# Filament >= 4.1.2 Custom Rich Editor Plugin Bug

~~This repository demonstrates that when upgrading from **Filament v4.1.1** to **v4.1.2**, custom `RichEditor` plugins stop working.~~

This repository demonstrates how to alter custom TipTap editor JavaScript plugins to fix any issues introduced in Filament v4.1.2. 

## Steps to fix

1. Ensure that tip-tap extensions existing in the vanilla use `.extend()` in the configuration.
   * See [`resources/js/filament/rich-content-plugins/disable-underline.js`](resources/js/filament/rich-content-plugins/disable-underline.js)
     * This custom logic alters the behaviour of the underline extension.
2. Ensure that tip-tap extensions that are added use their regularly documented methods, for example `unique-id.js` uses `.configure()`.
   * See [`resources/js/filament/rich-content-plugins/unique-id.js`](resources/js/filament/rich-content-plugins/unique-id.js)
     * This extension adds unique ids to the nodes listed in the configuration.
   * See https://tiptap.dev/docs/editor/extensions/functionality/uniqueid#configuration
3. Be aware that if you are using any custom extensions that are then added to the Rich Editor's default extension set, they will then have to be altered to use `.extend()`.
