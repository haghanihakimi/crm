const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js')
    .extract()
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .alias({
        '@': 'resources/js',
    });

if (mix.inProduction()) {
    mix.version();
}



mix.disableNotifications();