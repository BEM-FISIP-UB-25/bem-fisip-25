<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',function(){
    return Inertia::render('home/Landingpage');
});
Route::get('/profil', function(){
    return Inertia::render('home/Profile');
});
Route::get('/lembaga', function(){
    return Inertia::render('Lembaga');
});

Route::get('/hello',function(){
    return Inertia::render('Hello');
});

Route::get('/layanan', function(){
    return Inertia::render('Layanan');
});

Route::get('/informasi', function(){
    return Inertia::render('Informasi');
});

Route::get('/informasi/{slug}', function($slug){
    return Inertia::render('InformasiDetail', ['slug' => $slug]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
