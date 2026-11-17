// Obszar działania – wspólny dla wszystkich marek (fakty geograficzne).
export const districts = [
  'Bemowo', 'Białołęka', 'Bielany', 'Mokotów', 'Ochota', 'Praga-Południe',
  'Praga-Północ', 'Rembertów', 'Śródmieście', 'Targówek', 'Ursus', 'Ursynów',
  'Wawer', 'Wesoła', 'Wilanów', 'Włochy', 'Wola', 'Żoliborz',
];

// Okolice i przedmieścia, pogrupowane kierunkami od centrum.
export const suburbs: Record<string, string[]> = {
  'Północ': ['Łomianki', 'Jabłonna', 'Legionowo', 'Nieporęt', 'Marki', 'Ząbki', 'Zielonka', 'Kobyłka', 'Wołomin', 'Radzymin'],
  'Wschód': ['Sulejówek', 'Halinów', 'Józefów', 'Otwock', 'Wiązowna', 'Karczew'],
  'Południe': ['Piaseczno', 'Konstancin-Jeziorna', 'Lesznowola', 'Raszyn', 'Janki', 'Góra Kalwaria'],
  'Zachód': ['Pruszków', 'Piastów', 'Michałowice', 'Ożarów Mazowiecki', 'Stare Babice', 'Izabelin', 'Nadarzyn', 'Brwinów', 'Milanówek', 'Podkowa Leśna', 'Grodzisk Mazowiecki'],
};

export const allSuburbs = Object.values(suburbs).flat();
