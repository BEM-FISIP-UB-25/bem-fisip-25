<?php

namespace App\Http\Controllers\Admin;

use App\Domain\Blog\Requests\StorePostRequest;
use App\Domain\Blog\Requests\UpdatePostRequest;
use App\Domain\Blog\Resources\PostResource;
use App\Domain\Blog\Services\PostService;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostAdminController extends Controller
{
    public function __construct(
        private PostService $postService
    ) {}

    /**
     * Display a listing of posts
     */
    public function index(Request $request)
    {
        $query = Post::query()
            ->select('id', 'title', 'slug', 'image_path', 'status', 'published_at', 'created_at', 'updated_at')
            ->orderBy('created_at', 'desc');

        // Search filter
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Status filter
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Date range filter
        if ($request->filled('date_from')) {
            $query->whereDate('published_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('published_at', '<=', $request->date_to);
        }

        $posts = $query->paginate(15);

        return Inertia::render('admin/posts/Index', [
            'posts' => PostResource::collection($posts),
            'filters' => $request->only(['search', 'status', 'date_from', 'date_to']),
        ]);
    }

    /**
     * Show the form for creating a new post
     */
    public function create()
    {
        return Inertia::render('admin/posts/Create');
    }

    /**
     * Store a newly created post
     */
    public function store(StorePostRequest $request)
    {
        $post = $this->postService->store(
            $request->validated(),
            $request->file('image')
        );

        return redirect()
            ->route('admin.posts.index')
            ->with('success', 'Artikel berhasil dibuat.');
    }

    /**
     * Show the form for editing the specified post
     */
    public function edit(Post $post)
    {
        try {
            \Log::info('PostAdminController@edit called with post ID: ' . $post->id);
            \Log::info('Post title: ' . $post->title);
            
            return Inertia::render('admin/posts/Edit', [
                'post' => new PostResource($post),
            ]);
        } catch (\Exception $e) {
            \Log::error('Error in PostAdminController@edit: ' . $e->getMessage());
            \Log::error('Stack trace: ' . $e->getTraceAsString());
            return redirect()->route('admin.posts.index')
                ->with('error', 'Post tidak ditemukan atau terjadi kesalahan.');
        }
    }

    /**
     * Update the specified post
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $this->postService->update(
            $post,
            $request->validated(),
            $request->file('image')
        );

        return redirect()
            ->route('admin.posts.index')
            ->with('success', 'Artikel berhasil diperbarui.');
    }

    /**
     * Remove the specified post
     */
    public function destroy(Post $post)
    {
        $this->postService->delete($post);

        return redirect()
            ->route('admin.posts.index')
            ->with('success', 'Artikel berhasil dihapus.');
    }

    /**
     * Toggle publish status
     */
    public function togglePublish(Post $post)
    {
        $this->postService->togglePublish($post);

        $status = $post->fresh()->status === 'published' ? 'dipublikasikan' : 'disimpan sebagai draft';

        return redirect()
            ->route('admin.posts.index')
            ->with('success', "Artikel berhasil {$status}.");
    }
    public function show(Post $post)
{
    try {
        return Inertia::render('admin/posts/Show', [
            'post' => new PostResource($post),
        ]);
    } catch (\Exception $e) {
        \Log::error('Error in PostAdminController@show: ' . $e->getMessage());
        return redirect()->route('admin.posts.index')
            ->with('error', 'Post tidak ditemukan.');
    }
}
}
