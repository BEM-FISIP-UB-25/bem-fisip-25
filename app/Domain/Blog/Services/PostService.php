<?php

namespace App\Domain\Blog\Services;

use App\Models\Post;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PostService
{
    /**
     * Store a new post
     */
    public function store(array $data, ?UploadedFile $image = null): Post
    {
        $postData = $data;
        
        if ($image) {
            $postData['image_path'] = $this->uploadImage($image);
        }
        
        // Auto-generate slug if not provided
        if (empty($postData['slug'])) {
            $postData['slug'] = Str::slug($postData['title']);
        }
        
        if ($postData['status'] === 'published' && empty($postData['published_at'])) {
            $postData['published_at'] = now();
        }
        
        $post = Post::create($postData);
        
        $this->clearCache();
        
        return $post;
    }

    /**
     * Update an existing post
     */
    public function update(Post $post, array $data, ?UploadedFile $image = null): Post
    {
        $postData = $data;
        
        if ($image) {
            if ($post->image_path) {
                Storage::disk('public')->delete($post->image_path);
            }
            $postData['image_path'] = $this->uploadImage($image);
        }
        
        if (empty($postData['slug'])) {
            $postData['slug'] = Str::slug($postData['title']);
        }
        
        if ($postData['status'] === 'published' && empty($postData['published_at'])) {
            $postData['published_at'] = now();
        }
        
        $post->update($postData);
        
        $this->clearCache();
        
        return $post;
    }

    /**
     * Delete a post
     */
    public function delete(Post $post): bool
    {
        if ($post->image_path) {
            Storage::disk('public')->delete($post->image_path);
        }
        
        $deleted = $post->delete();
        
        $this->clearCache();
        
        return $deleted;
    }

    /**
     * Toggle publish status
     */
    public function togglePublish(Post $post): Post
    {
        if ($post->status === 'draft') {
            $post->update([
                'status' => 'published',
                'published_at' => $post->published_at ?? now(),
            ]);
        } else {
            $post->update([
                'status' => 'draft',
            ]);
        }
        
        $this->clearCache();
        
        return $post;
    }

    /**
     * Upload image to storage
     */
    private function uploadImage(UploadedFile $image): string
    {
        $filename = Str::ulid() . '.' . $image->getClientOriginalExtension();
        $path = $image->storeAs('posts', $filename, 'public');
        
        return $path;
    }

    /**
     * Clear all post-related cache
     */
    private function clearCache(): void
    {
        $cacheKeys = [
            'posts_index_*',
            'posts_detail_*',
        ];
        
        Cache::flush();
        \Log::info('Post cache cleared');
    }
}
