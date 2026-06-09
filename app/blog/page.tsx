import BlogPageClient from '@/components/blog/BlogPageClient';
import { getPageMetadata } from '@/lib/seo/pages';

export const metadata = getPageMetadata('blog');

export default function BlogPage() {
  return <BlogPageClient />;
}
