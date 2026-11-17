# Rygiel

Zabezpieczenia i ślusarz całodobowy – Warszawa i okolice. Kierunek wizualny: premium, granat i srebro, nagłówki Bodoni, przekrój wkładki i skala klas odporności.

Strona w [Astro](https://astro.build), generowana do zwykłych plików HTML/CSS – działa na każdym hostingu.

## Przed publikacją

1. Otwórz `src/config.ts` i podmień:
   - `phoneDisplay` i `phoneHref` – numer telefonu (teraz `000 000 000`),
   - `url` – docelową domenę.
2. Sprawdź treści w `src/pages/index.astro` (usługi, FAQ) – szczególnie obietnice dotyczące
   cen, płatności i wymaganych dokumentów, czy zgadzają się z tym, jak faktycznie pracujecie.
3. Dzielnice i miejscowości są w `src/areas.ts`.

## Uruchomienie

```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # gotowa strona w folderze dist/
```

## Publikacja na hostingu

Po `npm run build` wgraj **zawartość** folderu `dist/` na serwer (np. przez FTP do `public_html`).
