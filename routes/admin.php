<?php

use App\Http\Controllers\Admin\PostAdminController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // Posts management
    Route::resource('posts', PostAdminController::class);
    Route::post('posts/{post}/toggle-publish', [PostAdminController::class, 'togglePublish'])->name('posts.toggle-publish');
});
