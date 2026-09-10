// Venta Victoria — bilingual site content
// All review quotes are verbatim from Google Maps / TripAdvisor — nothing invented.

export const site = {
  name: 'Venta Victoria',
  domain: 'ventavictoria.pages.dev',
  phone: '+34 952 89 41 99',
  phoneDisplay: '952 89 41 99',
  address: 'Carretera de Casares, Km 8, 29690 Casares, Málaga',
  mapsUrl: 'https://www.google.com/maps/place/Restaurante+Venta+Victoria/@36.4405823,-5.2425799,17z',
  priceRange: '€20–30',
  googleRating: '4.6',
  googleReviewCount: '1.077',
  taRating: '4.4',
  taReviewCount: '328',
  taRank: 'Nº 3 de 39',
};

export const hours = [
  { day: { es: 'Domingo', en: 'Sunday' }, ranges: ['10:00 – 16:30'] },
  { day: { es: 'Lunes', en: 'Monday' }, ranges: ['10:00 – 15:30', '20:00 – 22:00'] },
  { day: { es: 'Martes', en: 'Tuesday' }, ranges: [] },
  { day: { es: 'Miércoles', en: 'Wednesday' }, ranges: ['10:00 – 15:30', '20:00 – 22:00'] },
  { day: { es: 'Jueves', en: 'Thursday' }, ranges: ['10:00 – 15:30', '20:00 – 22:30'] },
  { day: { es: 'Viernes', en: 'Friday' }, ranges: ['10:00 – 15:30', '20:00 – 22:30'] },
  { day: { es: 'Sábado', en: 'Saturday' }, ranges: ['10:00 – 15:30', '20:00 – 22:30'] },
];

export const menu = [
  {
    title: { es: 'Aperitivos', en: 'Starters' },
    items: [
      { name: { es: 'Revuelto de verduras de temporada', en: 'Seasonal vegetable scramble' }, price: '12€' },
      { name: { es: 'Paté casero de champiñón y atún', en: 'Homemade mushroom & tuna pâté' }, price: '8€' },
      { name: { es: 'Chorizo al vino', en: 'Chorizo in wine' }, price: '9€' },
      { name: { es: 'Tortilla Española', en: 'Spanish omelette' }, price: '10 / 14 / 21€' },
      { name: { es: 'Queso de Casares', en: 'Casares cheese' }, price: '12€' },
      { name: { es: 'Combinado de queso, chorizo y morcilla', en: 'Cheese, chorizo & black sausage board' }, price: '14€', popular: true },
    ],
  },
  {
    title: { es: 'Carnes', en: 'Meats' },
    items: [
      { name: { es: 'Pollo al ajillo', en: 'Garlic chicken' }, price: '12,50€' },
      { name: { es: 'Costillas en adobo', en: 'Marinated ribs' }, price: '12,50€' },
      { name: { es: 'Medallones de solomillo a la pimienta verde', en: 'Sirloin medallions, green pepper sauce' }, price: '18€' },
      { name: { es: 'Lomo, huevos y patatas', en: 'Pork loin, eggs & potatoes' }, price: '12,50€' },
    ],
  },
  {
    title: { es: 'Especialidades de la Venta', en: "The Venta's specialities" },
    items: [
      { name: { es: 'Caldereta de cabrito', en: 'Kid goat stew' }, price: '16,50€' },
      { name: { es: 'Venado en salsa', en: 'Venison in sauce' }, price: '16,50€', popular: true },
      { name: { es: 'Pollo al coñac con bacón y pasas', en: 'Brandy chicken with bacon & raisins' }, price: '16,50€' },
    ],
  },
];

export const reviews = [
  {
    quote: {
      es: 'Sitio precioso, trato maravilloso y comida espectacular con un precio asequible. Salimos encantados.',
      en: 'Sitio precioso, trato maravilloso y comida espectacular con un precio asequible. Salimos encantados.',
    },
    author: 'Yolanda S.',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    quote: {
      es: "Don't miss a chance to eat at Venta Victoria. The food is out of this world and the service is warm and friendly.",
      en: "Don't miss a chance to eat at Venta Victoria. The food is out of this world and the service is warm and friendly.",
    },
    author: 'Rebecca Kaatz',
    source: 'Google · Local Guide',
    rating: 5,
  },
  {
    quote: {
      es: 'Nos encanta este restaurante para el almuerzo, muy español con excelente comida local. Bien merece una visita.',
      en: 'Nos encanta este restaurante para el almuerzo, muy español con excelente comida local. Bien merece una visita.',
    },
    author: 'The K',
    source: 'TripAdvisor · Dublín',
    rating: 5,
  },
  {
    quote: {
      es: 'Breath taking views over the mountains, and food is something I will not forget in my lifetime.',
      en: 'Breath taking views over the mountains, and food is something I will not forget in my lifetime.',
    },
    author: 'Pinak Shuvro Roy',
    source: 'Google · Local Guide',
    rating: 5,
  },
];

export const i18n = {
  es: {
    langSwitch: 'EN',
    heroTagline: 'Cocina tradicional en las montañas de Casares',
    heroCta: 'Ver la carta',
    heritageEyebrow: 'Una venta de carretera, de verdad',
    heritageStat: 'Km 8',
    heritageLine1: 'A pie de la carretera que sube a Casares, con las mismas ollas de siempre y las vistas que no se piden.',
    heritageLine2: 'Manteles de cuadros, olor a guiso desde la puerta, y un servicio que te hace sentir de la familia — así lo describen quienes vuelven cada año.',
    philosophyEyebrow: 'La cocina',
    philosophyTitle: 'No ha cambiado en años. Y ese es el punto.',
    philosophyBody: 'Rabo de toro, venado en salsa, caldereta de cabrito — recetas caseras de la zona, servidas en raciones generosas, cocinadas como se cocinaba antes.',
    menuEyebrow: 'La carta',
    menuTitle: 'Lo que se cocina en Venta Victoria',
    menuNote: 'Selección de la carta completa · precios 2024',
    viewMomentLine: 'Las vistas de la Sierra no se piden. Se disfrutan desde la mesa.',
    reviewsEyebrow: 'Quien vuelve, lo cuenta',
    reviewsTitle: '4,6 en Google · 4,4 en TripAdvisor',
    pressEyebrow: 'Como nos vieron',
    pressLine: 'Radio Municipal de Casares nos visitó para su serie "Cerca de ti, tu pueblo, tu comercio" — y la actriz Maribel Verdú también ha pasado por aquí.',
    visitEyebrow: 'Visítanos',
    visitTitle: 'Km 8, camino de Casares',
    visitHoursTitle: 'Horario',
    visitClosed: 'Cerrado',
    visitCta: 'Cómo llegar',
    visitCall: 'Llamar',
    footerRights: 'Todos los derechos reservados.',
  },
  en: {
    langSwitch: 'ES',
    heroTagline: 'Traditional cooking in the mountains above Casares',
    heroCta: 'View the menu',
    heritageEyebrow: 'A real roadside venta',
    heritageStat: 'Km 8',
    heritageLine1: 'Right on the road up to Casares, with the same pots as always and views nobody asked for.',
    heritageLine2: 'Checked tablecloths, the smell of stew from the doorway, and service that makes you feel like family — that’s how the regulars describe it.',
    philosophyEyebrow: 'The kitchen',
    philosophyTitle: "It hasn't changed in years. That's the point.",
    philosophyBody: 'Oxtail, venison in sauce, kid goat stew — local home recipes, served in generous portions, cooked the way they always were.',
    menuEyebrow: 'The menu',
    menuTitle: 'What’s cooking at Venta Victoria',
    menuNote: 'Selection from the full menu · 2024 prices',
    viewMomentLine: 'Nobody asks for the Sierra views. You just get to enjoy them from the table.',
    reviewsEyebrow: 'The ones who come back, say it best',
    reviewsTitle: '4.6 on Google · 4.4 on TripAdvisor',
    pressEyebrow: 'As seen on',
    pressLine: 'Radio Municipal de Casares featured us in their "Cerca de ti, tu pueblo, tu comercio" series — and actress Maribel Verdú has stopped by too.',
    visitEyebrow: 'Visit us',
    visitTitle: 'Km 8, on the road to Casares',
    visitHoursTitle: 'Opening hours',
    visitClosed: 'Closed',
    visitCta: 'Get directions',
    visitCall: 'Call us',
    footerRights: 'All rights reserved.',
  },
} as const;

export type Lang = keyof typeof i18n;
