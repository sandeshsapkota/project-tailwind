const mix = require("laravel-mix")
const tailwind = require("tailwindcss")

mix.sass("src/css/app.scss", "dist/app.css");
mix.js("src/js/app.js", "dist/app.js");
mix.js("src/js/smoothscroll.js", "dist/smoothscroll.js")
mix.postCss("src/css/tailwind.css", "dist/tailwind.css", [
    require("postcss-import"),
    tailwind({ config: "tailwind.config.js" }),
])
