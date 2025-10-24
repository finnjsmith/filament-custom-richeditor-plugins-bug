// Ensure `npm run build` and `php artisan filament:assets` are executed for changes to take affect.
import { Underline } from "@tiptap/extension-underline";

export default Underline.extend({
    addKeyboardShortcuts() {
        return {
            // Mod = Cmd on macOS, Ctrl on Win/Linux
            "Mod-u": () => true,
        };
    },
});
