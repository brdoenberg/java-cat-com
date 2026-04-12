const TITLES = [
  'Getting Started with Modern Web Development',
  'A Deep Dive into Server Components',
  'Mastering Tailwind CSS Layouts',
  'TypeScript Tips for Everyday Developers',
  'Building Accessible UI Components',
  'The Art of Clean Code',
  'Understanding the Event Loop',
  'CSS Grid vs Flexbox: When to Use What',
  'Optimising Images for the Web',
  'State Management Without the Overhead',
];

const SUMMARIES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.',
  'Cras gravida pellentesque mollis. Nulla euismod leo eu augue lacinia vestibulum. Sed justo lorem.',
  'Fusce viverra consequat tellus vitae varius. Nunc laoreet justo nec nulla luctus interdum.',
  'Phasellus ut viverra neque. Donec condimentum mauris vitae lectus aliquet suscipit.',
  'Nam rhoncus elementum arcu, ut dictum diam consectetur at. Sed facilisis odio ut velit pulvinar.',
];

export type BlogPost = {
  id: number;
  title: string;
  summary: string;
  created_at: Date;
  permalink: string;
  thumbnail: string;
};

export function generateBlogPosts(count: number, permalink = '/demo/single-blog'): BlogPost[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: TITLES[i % TITLES.length],
    summary: SUMMARIES[i % SUMMARIES.length],
    created_at: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000),
    permalink,
    thumbnail: `https://picsum.photos/seed/${i + 1}/800/600`,
  }));
}
