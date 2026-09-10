# Venta Victoria

Astro svetainė restoranui "Venta Victoria" (Casares, Málaga). Sukurta Cowork automatikos pilotui.

## Vietinis paleidimas

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Turinys

- Visi tekstai, meniu, atsiliepimai: `src/data/content.ts`
- Nuotraukos: `src/assets/photos/` (Google Maps) ir `src/assets/instagram/` (Instagram)
- EN/ES kalbos perjungimas: client-side, `data-lang` atributas ant `<html>`, žr. `src/layouts/Layout.astro`

## Lighthouse (lokalus testas, 2026-09-10)

- Performance: 99
- Accessibility: 100
- Best Practices: 100
- SEO: 100
