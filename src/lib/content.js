import matter from 'gray-matter';
import { marked } from 'marked';

const imageModules = import.meta.glob('../../content/publication/*/featured.*', { eager: true, query: '?url', import: 'default' });
const publicationSources = import.meta.glob('../../content/publication/*/index.md', { eager: true, query: '?raw', import: 'default' });
const postSources = import.meta.glob('../../content/post/*/index.md', { eager: true, query: '?raw', import: 'default' });

function readCollection(sources) {
  return Object.entries(sources)
    .map(([file, source]) => {
      const slug = file.split('/').at(-2).toLowerCase();
      const { data, content } = matter(source);
      const imageKey = Object.keys(imageModules).find((key) => key.toLowerCase().includes(`/publication/${slug}/`));
      // Some older case studies explicitly contain unverified draft claims and
      // placeholder statistics. Keep their videos, but do not publish the draft.
      const verifiedBody = content.replace(/<!--[\s\S]*?FACT-CHECK PASS NEEDED[\s\S]*$/, '');
      const body = verifiedBody.replace(/\{\{<\s*youtube\s+([\w-]+)\s*>\}\}/g,
        '<iframe src="https://www.youtube-nocookie.com/embed/$1" title="Publication video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      const links = (data.links || []).map((link) => ({ ...link, url: link.url === '/uploads/IEEEVR23_UpperBody.pdf' ? '/uploads/IEEEVR2023_UpperBody.pdf' : link.url }));
      return { ...data, slug, links, image: imageKey ? imageModules[imageKey] : null, html: marked.parse(body), publicationHtml: marked.parseInline(data.publication || data.publication_short || ''), year: new Date(data.date).getUTCFullYear(), dateValue: new Date(data.date).getTime() };
    }).sort ( (a, b) => b.dateValue - a.dateValue );
}

export const publications = readCollection(publicationSources);
export const posts = readCollection(postSources);
