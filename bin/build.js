import * as esbuild from "esbuild";

const plugins = [
    {
        entry: "./resources/js/filament/rich-content-plugins/unique-id.js",
        out: "./resources/js/dist/filament/rich-content-plugins/unique-id.js",
    },
    {
        entry: "./resources/js/filament/rich-content-plugins/disable-underline.js",
        out: "./resources/js/dist/filament/rich-content-plugins/disable-underline.js",
    },
];

async function buildPlugins(watch = false) {
    for (const { entry, out } of plugins) {
        if (watch) {
            const ctx = await esbuild.context({
                entryPoints: [entry],
                outfile: out,
                bundle: true,
                format: "esm",
                platform: "neutral",
                target: ["es2020"],
                minify: true,
            });
            await ctx.watch();
        } else {
            await esbuild.build({
                entryPoints: [entry],
                outfile: out,
                bundle: true,
                format: "esm",
                platform: "neutral",
                target: ["es2020"],
                minify: true,
            });
        }
    }
}

export function filamentPluginBuild() {
    return {
        name: "filament-plugin-build",
        apply: "build",
        async buildStart() {
            await buildPlugins(false);
        },
    };
}

export function filamentPluginDevBuilder() {
    return {
        name: "filament-plugin-dev-builder",
        apply: "serve",
        async buildStart() {
            await buildPlugins(true);
        },
    };
}
