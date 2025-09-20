<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StrukturController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',function(){
    return Inertia::render('home/Landingpage');
});
Route::get('/profil', function(){
    return Inertia::render('home/Profile');
});

Route::prefix('struktur')->name('struktur.')->group(function () {
    Route::get('/', [StrukturController::class, 'index'])->name('index');
    Route::get('/spi', [StrukturController::class, 'Spi'])->name('spi');
    Route::get('/pengembangan', [StrukturController::class, 'Pengembangan'])->name('pengembangan');
    Route::get('/pelayanan', [StrukturController::class, 'Pelayanan'])->name('pelayanan');
    Route::get('/pergerakan', [StrukturController::class, 'Pergerakan'])->name('pergerakan');
});

Route::get('/lembaga', function(){
    return Inertia::render('Lembaga');
});
Route::prefix('struktur')->name('struktur.')->group(function () {
    Route::get('/', [StrukturController::class, 'index'])->name('index');
    Route::get('/spi', [StrukturController::class, 'Spi'])->name('spi');
    Route::get('/pengembangan', [StrukturController::class, 'Pengembangan'])->name('pengembangan');
    Route::get('/pelayanan', [StrukturController::class, 'Pelayanan'])->name('pelayanan');
    Route::get('/pergerakan', [StrukturController::class, 'Pergerakan'])->name('pergerakan');
});
Route::get('/lembaga', function(){
    return Inertia::render('Lembaga');
});

Route::get('/hello',function(){
    return Inertia::render('Hello');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
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
