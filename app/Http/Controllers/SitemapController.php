<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $posts = Post::published()
            ->select('slug', 'updated_at')
            ->orderBy('updated_at', 'desc')
            ->get();

        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        
        $staticPages = [
            ['url' => url('/'), 'priority' => '1.0', 'changefreq' => 'weekly'],
            ['url' => url('/profil'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/struktur'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/struktur/spi'), 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['url' => url('/struktur/pengembangan'), 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['url' => url('/struktur/pelayanan'), 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['url' => url('/struktur/pergerakan'), 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['url' => url('/lembaga'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/layanan'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/informasi'), 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['url' => url('/artikel'), 'priority' => '0.9', 'changefreq' => 'daily'],
        ];

        foreach ($staticPages as $page) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . $page['url'] . '</loc>';
            $sitemap .= '<lastmod>' . now()->format('Y-m-d') . '</lastmod>';
            $sitemap .= '<changefreq>' . $page['changefreq'] . '</changefreq>';
            $sitemap .= '<priority>' . $page['priority'] . '</priority>';
            $sitemap .= '</url>';
        }

        // Dynamic blog posts
        foreach ($posts as $post) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url('/artikel/' . $post->slug) . '</loc>';
            $sitemap .= '<lastmod>' . $post->updated_at->format('Y-m-d') . '</lastmod>';
            $sitemap .= '<changefreq>weekly</changefreq>';
            $sitemap .= '<priority>0.6</priority>';
            $sitemap .= '</url>';
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200)
            ->header('Content-Type', 'application/xml');
    }
}
