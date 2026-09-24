// /llms.txt — plain-text summary of the site for AI assistants (https://llmstxt.org).
import type { APIRoute } from 'astro';
import { site, books, featured } from '../data/site';

export const GET: APIRoute = ({ site: siteUrl }) => {
  const home = new URL('/', siteUrl).href;
  const bookLines = books.map((b) => {
    const title = b.edition ? `${b.title} (${b.edition})` : b.title;
    const isbn = b.isbn ? `, ISBN ${b.isbn}` : '';
    return `- ${title} — ${b.publisher}, ${b.year}${isbn}. ${b.genre}. ${b.description}`;
  });

  const body = `# ${site.name}

> Autrice d'« ${featured.title} — ${featured.subtitle} » (${featured.publisher}, 2026) et d'ouvrages sur la pédagogie Montessori (Hatier). Vit dans le ${site.region}.

${site.bio.join('\n\n')}

## Nouveau livre : ${featured.title}

${featured.intro.join('\n\n')}

Où l'acheter :
${featured.buy.map((l) => `- [${l.label}](${l.href})`).join('\n')}

## Bibliographie

${bookLines.join('\n')}

## Contact

- E-mail : ${site.email}
- Site : ${home}
${site.sameAs.map((u) => `- ${u}`).join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
