<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
        <link rel="canonical" href="{{ url()->current() }}">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
    </head>
    <body class="font-sans antialiased" style="background-color: #fafafa;">
        @inertia

        @routes
            <!-- Fonts -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
            <link rel="stylesheet" href="{{mix('css/app.css')}}">
            <script src="{{ mix('js/manifest.js') }}" defer></script>
            <script src="{{ mix('js/vendor.js') }}" defer></script>
            <script src="{{ mix('js/app.js') }}" defer></script>
        @inertiaHead
    </body>
</html>
