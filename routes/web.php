<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StrukturController;
use App\Http\Controllers\SitemapController;
use App\Domain\Blog\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('home/Landingpage', [
        'meta' => [
            'title' => 'BEM FISIP UB 2025 - Badan Eksekutif Mahasiswa FISIP Universitas Brawijaya',
            'description' => 'Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025. Wadah aspirasi dan pengembangan mahasiswa FISIP UB.',
            'keywords' => 'BEM FISIP UB 2025, BEM FISIP, FISIP UB, Fakultas Ilmu Sosial dan Politik, Universitas Brawijaya, Mahasiswa, Organisasi Mahasiswa, Malang'
        ]
    ]);
})->name('home');

Route::get('/profil', function(){
    return Inertia::render('home/Profile', [
        'meta' => [
            'title' => 'Profil BEM FISIP UB 2025',
            'description' => 'Profil lengkap Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025.',
            'keywords' => 'Profil BEM FISIP UB, Sejarah BEM FISIP, Visi Misi BEM FISIP UB'
        ]
    ]);
})->name('profil');

Route::prefix('struktur')->name('struktur.')->group(function () {
    Route::get('/', [StrukturController::class, 'index'])->name('index');
    Route::get('/spi', [StrukturController::class, 'Spi'])->name('spi');
    Route::get('/pengembangan', [StrukturController::class, 'Pengembangan'])->name('pengembangan');
    Route::get('/pelayanan', [StrukturController::class, 'Pelayanan'])->name('pelayanan');
    Route::get('/pergerakan', [StrukturController::class, 'Pergerakan'])->name('pergerakan');
});

Route::get('/lembaga', function(){
    return Inertia::render('Lembaga', [
        'meta' => [
            'title' => 'Lembaga BEM FISIP UB 2025',
            'description' => 'Daftar lembaga dan unit kerja di bawah naungan BEM FISIP Universitas Brawijaya 2025.',
            'keywords' => 'Lembaga BEM FISIP UB, Unit Kerja BEM FISIP, Organisasi Mahasiswa FISIP UB'
        ]
    ]);
})->name('lembaga');

Route::get('/layanan', function(){
    return Inertia::render('Layanan', [
        'meta' => [
            'title' => 'Layanan BEM FISIP UB 2025',
            'description' => 'Berbagai layanan yang disediakan BEM FISIP Universitas Brawijaya untuk mahasiswa FISIP UB.',
            'keywords' => 'Layanan BEM FISIP UB, Pelayanan Mahasiswa, Bantuan Mahasiswa FISIP'
        ]
    ]);
})->name('layanan');

Route::get('/informasi', function(){
    return Inertia::render('Informasi', [
        'meta' => [
            'title' => 'Informasi BEM FISIP UB 2025',
            'description' => 'Kumpulan informasi terkini dan pengumuman resmi dari BEM FISIP Universitas Brawijaya 2025.',
            'keywords' => 'Informasi BEM FISIP UB, Pengumuman BEM FISIP, Berita FISIP UB'
        ]
    ]);
})->name('informasi');

Route::get('/informasi/{slug}', function($slug){
    return Inertia::render('InformasiDetail', [
        'slug' => $slug,
        'meta' => [
            'title' => 'Informasi Detail - BEM FISIP UB 2025',
            'description' => 'Informasi detail dan pengumuman resmi dari BEM FISIP Universitas Brawijaya 2025.',
            'keywords' => 'Informasi BEM FISIP UB, Pengumuman BEM FISIP, Berita FISIP UB'
        ]
    ]);
})->name('informasi.detail');

Route::get('/artikel', [PostController::class, 'index'])->name('blog.index');
Route::get('/artikel/{post:slug}', [PostController::class, 'show'])->name('blog.show');
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/auth.php';
