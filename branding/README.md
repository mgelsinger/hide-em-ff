# Branding

`icon.svg` is the master icon. Chrome Web Store needs PNGs at 16, 48, and 128 px (and the store listing also wants a 128 px source). To rasterize, use whichever you have handy:

**ImageMagick (Windows):**
```sh
magick branding/icon.svg -resize 16x16   public/icons/icon-16.png
magick branding/icon.svg -resize 48x48   public/icons/icon-48.png
magick branding/icon.svg -resize 128x128 public/icons/icon-128.png
```

**Inkscape:**
```sh
inkscape branding/icon.svg -w 16  -o public/icons/icon-16.png
inkscape branding/icon.svg -w 48  -o public/icons/icon-48.png
inkscape branding/icon.svg -w 128 -o public/icons/icon-128.png
```

**Online (one-off):** open the SVG in any browser, screenshot, or run it through any SVG-to-PNG converter.

After the PNGs land in `public/icons/`, update the `icons:` field in `vite.config.ts`:

```ts
icons: {
  16: 'public/icons/icon-16.png',
  48: 'public/icons/icon-48.png',
  128: 'public/icons/icon-128.png',
},
```

Then `npm run build` and verify the icons show up on `chrome://extensions`.
