<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class StrukturController extends Controller
{
    public function index()
    {
        return Inertia::render('Struktur/Index', [
        ]);
    }

    public function Spi()
    {
        return Inertia::render('Struktur/Spi', [
        ]);
    }

    public function Pengembangan()
    {
        return Inertia::render('Struktur/Pengembangan'); 
    }

    public function Pelayanan()
    {
        return Inertia::render('Struktur/Pelayanan'); 
    }

    public function Pergerakan()
    {
        return Inertia::render('Struktur/Pergerakan'); 
    } 
}