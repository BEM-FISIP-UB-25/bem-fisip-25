<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" type="image/png" href="{{ asset('eskalasi.png') }}?v=1">
        <link rel="shortcut icon" href="{{ asset('eskalasi.png') }}?v=1" type="image/png">
        <title inertia>{{config('app.name', 'BEM FISIP UB 2025')}}</title>
        <meta name="description" content="Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025. Wadah aspirasi dan pengembangan mahasiswa FISIP UB.">
        <meta name="keywords" content="BEM FISIP UB 2025, BEM FISIP, FISIP UB, Fakultas Ilmu Sosial dan Politik, Universitas Brawijaya, Mahasiswa, Organisasi Mahasiswa, Malang">
        <meta name="author" content="BEM FISIP UB 2025">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="{{ url()->current() }}">
        
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="BEM FISIP UB 2025 - Badan Eksekutif Mahasiswa FISIP Universitas Brawijaya">
        <meta property="og:description" content="Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025. Wadah aspirasi dan pengembangan mahasiswa FISIP UB.">
        <meta property="og:image" content="{{ asset('eskalasi.png') }}">
        <meta property="og:site_name" content="BEM FISIP UB 2025">
        <meta property="og:locale" content="id_ID">
        
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="BEM FISIP UB 2025 - Badan Eksekutif Mahasiswa FISIP Universitas Brawijaya">
        <meta property="twitter:description" content="Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025. Wadah aspirasi dan pengembangan mahasiswa FISIP UB.">
        <meta property="twitter:image" content="{{ asset('eskalasi.png') }}">
        
        <meta name="theme-color" content="#1d2466">
        <meta name="msapplication-TileColor" content="#1d2466">
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
        <link rel="apple-touch-icon" href="{{ asset('eskalasi.png') }}">
        
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="dns-prefetch" href="//fonts.bunny.net">
        
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <script type="application/ld+json">
            {!! json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'Organization',
                'name' => 'BEM FISIP UB 2025',
                'alternateName' => 'Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya',
                'url' => url('/'),
                'logo' => asset('eskalasi.png'),
                'description' => 'Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Brawijaya 2025',
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressLocality' => 'Malang',
                    'addressRegion' => 'Jawa Timur',
                    'addressCountry' => 'ID',
                ],
                'parentOrganization' => [
                    '@type' => 'Organization',
                    'name' => 'Universitas Brawijaya',
                    'url' => 'https://bemfisip.ub.ac.id',
                ],
                'sameAs' => [
                    'https://instagram.com/bemfisipub',
                    'https://youtube.com/@bemfisipub',
                ],
            ], JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE) !!}
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
