// Ensure `npm run build` and `php artisan filament:assets` are executed for changes to take affect.

import { Extension } from "@tiptap/core";

const DisableUnderline = Extension.create({
    name: "disableUnderline",
    addKeyboardShortcuts() {
        return {
            // Mod = Cmd on macOS, Ctrl on Win/Linux
            "Mod-u": () => true,
        };
    },
});

export default [DisableUnderline];
