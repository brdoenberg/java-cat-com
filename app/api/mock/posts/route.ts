import { generateBlogPosts } from '@/lib/placeholder-blog';

export async function GET() {
  return Response.json(generateBlogPosts(9));
}
