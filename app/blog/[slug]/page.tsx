import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog/posts';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://freetaxcalculator.us/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: 'https://freetaxcalculator.us/opengraph-image',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const slugify = (value: string) =>
    value
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle={post.category.toUpperCase()}
        title={post.title}
        description={post.excerpt}
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <article className="prose prose-lg dark:prose-invert prose-a:text-accent prose-a:no-underline">
              <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => {
                    const text = String(props.children);
                    return (
                      <h2 id={slugify(text)} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            <div className="rounded-3xl bg-gray-50 dark:bg-slate-900 p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Table of contents</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {post.content
                  .split('\n\n')
                  .filter((block) => block.startsWith('### '))
                  .map((heading) => (
                    <li key={heading}>
                      <a href={`#${heading.replace('### ', '').toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent transition-colors">
                        {heading.replace('### ', '')}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-blue-50 dark:bg-blue-950 p-6 border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-100">
              <h3 className="text-lg font-bold mb-2">Related articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {post.related.map((slug) => {
                  const relatedPost = getPostBySlug(slug);
                  if (!relatedPost) return null;
                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="rounded-3xl bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-gray-700 hover:border-accent transition"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white">{relatedPost.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{relatedPost.excerpt}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
