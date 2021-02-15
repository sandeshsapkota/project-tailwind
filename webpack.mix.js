const mix = require('laravel-mix');
const tailwind = require('tailwindcss');

mix.sass('src/app.scss','dist/app.css');
mix.postCss("src/tailwind.css", "dist/tailwind.css", [
    require("postcss-import"),
    tailwind({ config: 'tailwind.config.js' }),
])
