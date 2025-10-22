# Filament >= 4.1.2 Custom Rich Editor Plugin Bug

This repository demonstrates that when upgrading from **Filament v4.1.1** to **v4.1.2**, custom `RichEditor` plugins stop working.

## Steps to Reproduce

1. Remove any existing version lock for Filament in your `composer.json`, then require the latest 4.1.2 release:
   ```bash
   composer require filament/filament:"^4.1.2"
   ```

2. Rebuild your frontend assets:
   ```bash
   npm run build
   ```

3. Publish and refresh Filament’s assets:
   ```bash
   php artisan filament:assets
   ```

4. Clear cached files to ensure the new assets are used:
   ```bash
   php artisan optimize:clear
   ```

5. Reload your Filament admin panel — custom RichEditor plugins should now fail to load, confirming the issue.


## Original bug message in discord:
> I implemented some custom rich editor plugins as per the documentation at the time in v4.0.x.
Everything was working fine in 4.1.0 and 4.1.1, however since updating to 4.1.2 I've found these custom plugins have stopped working.
I think an accidental breaking change / bug was introduced? I think the commit that has broken things is to do with the custom plugins merge: https://github.com/filamentphp/filament/pull/18049.

https://discord.com/channels/883083792112300104/1430507728744222814/1430507728744222814
