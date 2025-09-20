<?php

namespace App\Domain\Blog\Controllers;

use App\Domain\Blog\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController
{
    /**
     * Display a listing of published posts
     */
    public function index(Request $request)
    {
        $query = $request->get('q');
        
        // Temporary disable cache for debugging
        $postsQuery = Post::published()
            ->select('id', 'title', 'slug', 'abstract', 'image_path', 'published_at')
            ->orderBy('published_at', 'desc')
            ->orderBy('id', 'desc');
        
        if ($query) {
            $postsQuery->search($query);
        }
        
        $posts = $postsQuery->paginate(12);
        
        // Transform data using PostResource
        $posts->getCollection()->transform(function ($post) {
            return (new PostResource($post))->toArray(request());
        });
        
        return Inertia::render('Blog', [
            'posts' => $posts,
            'searchQuery' => $query,
            'meta' => [
                'title' => 'Artikel | BEM FISIP UB',
                'description' => 'Kumpulan artikel dan berita terbaru dari BEM FISIP Universitas Brawijaya',
            ]
        ]);
    }

    /**
     * Display the specified post
     */
    public function show(Post $post)
    {
        if ($post->status !== 'published' || $post->published_at > now()) {
            abort(404);
        }
        
        $cacheKey = "post_detail_{$post->slug}";
        
        $postData = Cache::remember($cacheKey, 300, function () use ($post) {
            return (new PostResource($post))->toArray(request());
        });
        
        return Inertia::render('PostShow', [
            'post' => $postData,
            'meta' => [
                'title' => $post->title . ' | BEM FISIP UB',
                'description' => Str::limit(strip_tags($post->abstract), 160),
                'image' => $post->image_url,
            ]
        ]);
    }
}
