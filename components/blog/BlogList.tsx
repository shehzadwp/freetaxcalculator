'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/posts';

interface BlogListProps {
  posts: BlogPost[];
}

const categories = [
  'All',
  'Tax Planning',
  'IRS Updates',
  'Self-Employed',
  'Retirement',
  'State Taxes',
];

export default function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      activeCategory === 'All' ? true : post.category === activeCategory
    );
  }, [activeCategory, posts]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-accent text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
                {post.category}
              </span>
              <span className="rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 px-3 py-1 text-xs font-medium">
                {post.readTime}
              </span>
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
