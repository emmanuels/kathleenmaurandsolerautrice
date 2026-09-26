import ikigai from '../assets/covers/Ikigai.jpg';
import activites from '../assets/covers/80-activites-familiales-Monteori-Septembre-2019-Decembre-2020.jpg';
import ephemeride from '../assets/covers/Ephemeride-Monteori-2021.jpg';
import calendrier2020 from '../assets/covers/Calendrier-familial-Monteori-septembre-2020-a-janvier-2022.jpg';
import calendrier2019 from '../assets/covers/Calendrier-familial-Monteori.jpg';
import type { ImageMetadata } from 'astro';

export const site = {
  name: 'Kathleen Maurand Soler',
  jobTitle: 'Autrice',
  bio: [
    'Kathleen Maurand Soler écrit sur ce qui fait grandir : la transmission, la connaissance de soi et la quête de sens.',
    'Autrice de plusieurs ouvrages publiés chez Hatier Jeunesse, elle partage dans son dernier livre, Ikigaï découvrir et cultiver ce qui donne du sens à sa vie, un cheminement où se mêlent réflexions, expériences et propositions concrètes pour habiter sa vie avec plus de justesse.',
  ],
  region: 'Gard',
  /** Other pages about her: used as schema.org `sameAs` so engines link the profiles. */
  sameAs: [
    'https://www.mangoeditions.com/contributor/12584-kathleen-maurand-soler',
    'https://www.editions-hatier.fr/auteur/kathleen-maurand-soler',
  ],
  email: 'kmaurand@gmail.com',
  description:
    "Kathleen Maurand Soler écrit sur ce qui fait grandir : la transmission, la connaissance de soi et la quête de sens. Nouveau livre : Ikigaï, chez Mango Éditions.",
};

export interface BuyLink {
  label: string;
  href: string;
  primary?: boolean;
}

export const featured = {
  title: 'Ikigaï',
  subtitle: 'découvrir et cultiver ce qui donne du sens à sa vie',
  publisher: 'Mango Éditions',
  releaseLabel: 'Disponible en librairie',
  /** Publisher's presentation (Mango Éditions). */
  intro: [
    'La clé d’une vie plus alignée ne se trouverait-elle pas déjà en nous ? Un murmure discret, une intuition légère, un élan que l’on a parfois appris à faire taire… C’est là que commence l’ikigaï.',
    'Dans cet ouvrage inspirant, Kathleen Maurand Soler vous invite à découvrir ce qui donne du sens à votre existence. Bien plus qu’un concept japonais, l’ikigaï apparaît ici comme un mouvement vivant : une manière d’habiter pleinement sa vie, de retrouver son élan et de renouer avec ce qui nous met réellement en joie.',
    'À travers un chemin structuré en étapes – de l’éveil à l’action, de l’exploration intime à l’ancrage concret –, elle propose une expérience immersive mêlant récits personnels, exercices pratiques, mantras et respirations poétiques. Pas à pas, vous apprendrez à identifier ce qui vous anime, à écouter votre énergie, à reconnaître vos talents parfois invisibles et à tracer une trajectoire fidèle à qui vous êtes.',
    'Accessible à tous ceux qui ressentent un besoin de changement ou de clarté, ce guide invite à ralentir pour mieux avancer.',
  ],
  cover: ikigai,
  coverAlt: 'Couverture du livre Ikigaï de Kathleen Maurand Soler, Mango Éditions',
  buy: [
    {
      label: 'Mango Éditions',
      href: 'https://www.mangoeditions.com/9782317041747-ikigai-decouvrir-et-cultiver-ce-qui-donne-sens-a-sa-vie.html',
      primary: true,
    },
    {
      label: 'Fnac',
      href: 'https://www.fnac.com/a23031101/Kathleen-Maurand-Soler-Ikigai-Decouvrir-et-cultiver-ce-qui-donne-sens-a-sa-vie',
    },
    {
      label: 'Cultura',
      href: 'https://www.cultura.com/p-ikigai-decouvrir-et-cultiver-ce-qui-donne-sens-a-sa-vie-9782317041747.html',
    },
  ] satisfies BuyLink[],
};

export interface Book {
  title: string;
  /** Title shown in the compact mobile list, when shorter than `title`. */
  shortTitle?: string;
  /** Italic second line on desktop (edition span for the calendars). */
  edition?: string;
  /** Short form of `edition`, appended to the meta line on mobile. */
  editionShort?: string;
  genre: string;
  year: number;
  publisher: string;
  /** ISO date; the badge reads « À paraître » until this date, « Paru » after. */
  releaseDate?: string;
  /** Exact publication date (ISO), for structured data. Falls back to `year`. */
  datePublished?: string;
  isbn?: string;
  /** Publisher's page for the book. */
  url?: string;
  description: string;
  cover: ImageMetadata;
  coverAlt: string;
  /** Portrait covers are cropped to fill; square/landscape ones are shown whole. */
  portrait?: boolean;
  /** Where the book can still be bought (small buttons under the description). */
  buy?: BuyLink[];
}

export const books: Book[] = [
  {
    title: 'Ikigaï — Découvrir et cultiver ce qui donne du sens à sa vie',
    shortTitle: 'Ikigaï',
    genre: 'Développement personnel',
    year: 2026,
    publisher: 'Mango Éditions',
    datePublished: '2026-09-25',
    isbn: '9782317041747',
    url: 'https://www.mangoeditions.com/9782317041747-ikigai-decouvrir-et-cultiver-ce-qui-donne-sens-a-sa-vie.html',
    description:
      "Réflexions, expériences et pistes concrètes pour retrouver ce qui nous met en mouvement — chaque chapitre se referme sur un temps d'exercice.",
    cover: ikigai,
    coverAlt: featured.coverAlt,
    portrait: true,
  },
  {
    title: 'Éphéméride Montessori',
    genre: 'Pédagogie',
    year: 2021,
    publisher: 'Hatier',
    description: "365 idées d'activités Montessori pour organiser son quotidien, jour après jour.",
    cover: ephemeride,
    coverAlt: "Couverture de l'Éphéméride Montessori, textes de Kathleen Maurand Soler, Hatier",
    buy: [
      {
        label: 'Acheter à la Fnac',
        href: 'https://www.fnac.com/a14903584/Kathleen-Maurand-Soler-Ephemeride-Montessori-2021',
      },
    ],
  },
  {
    title: 'Calendrier familial Montessori',
    edition: 'septembre 2020 – janvier 2022',
    editionShort: 'sept. 2020 – janv. 2022',
    genre: 'Pédagogie',
    year: 2020,
    publisher: 'Hatier',
    description:
      "Bien s'organiser toute l'année en famille grâce à la pédagogie Montessori : plannings à compléter, défis familiaux, jeux d'observation.",
    cover: calendrier2020,
    coverAlt:
      'Couverture du Calendrier familial Montessori septembre 2020 – janvier 2022, textes de Kathleen Maurand Soler, Hatier',
  },
  {
    title: '80 activités familiales Montessori',
    genre: 'Pédagogie',
    year: 2019,
    publisher: 'Hatier Jeunesse',
    description:
      "Un an d'activités pour appliquer au quotidien, en famille, les grands principes de Maria Montessori.",
    cover: activites,
    coverAlt:
      'Couverture du livre 80 activités familiales Montessori de Kathleen Maurand Soler, Hatier Jeunesse',
  },
  {
    title: 'Calendrier familial Montessori',
    edition: 'septembre 2019 – décembre 2021',
    editionShort: 'sept. 2019 – déc. 2021',
    genre: 'Pédagogie',
    year: 2019,
    publisher: 'Hatier',
    description:
      "La première édition du calendrier : une année d'organisation familiale, de routines et d'activités à mener ensemble.",
    cover: calendrier2019,
    coverAlt:
      'Couverture du Calendrier familial Montessori septembre 2019 – décembre 2021, textes de Kathleen Maurand Soler, Hatier',
  },
];

export const nav = [
  { href: '/#autrice', label: 'Autrice' },
  { href: '/#ikigai', label: 'Ikigaï' },
  { href: '/#livres', label: 'Livres' },
  { href: '/#contact', label: 'Contact' },
];
