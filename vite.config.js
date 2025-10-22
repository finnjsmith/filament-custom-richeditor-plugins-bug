import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { filamentPluginBuild, filamentPluginDevBuilder } from "./bin/build.js";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        filamentPluginBuild(), // build
        filamentPluginDevBuilder(), // dev
    ],
});
