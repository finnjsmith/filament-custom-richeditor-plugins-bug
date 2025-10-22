// Ensure `npm run build` and `php artisan filament:assets` are executed for changes to take affect.

import UniqueID from "@tiptap/extension-unique-id";

export default [
    UniqueID.configure({
        attributeName: "uid",
        types: ["paragraph", "heading", "blockquote", "orderedList", "bulletList", "listItem"],
    }),
];
