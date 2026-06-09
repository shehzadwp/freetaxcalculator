'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { getAllPosts, getBlogCategories } from '@/lib/blog/posts';

const breadcrumbs = [{ name: 'Blog', path: '/blog' }];
const categories = getBlogCategories();
const posts = getAllPosts();

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="safe-area">
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <HeroSection
        subtitle="OUR BLOG"
        title="Tax Tips & Financial Insights"
        description="Stay updated with the latest tax news, calculator tips, and financial planning advice from our expert contributors."
      />

      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container-max container-px">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Welcome to the FreeTaxCalculator.us blog. Here you will find expert articles
              on federal and state taxes, payroll taxes, tax planning strategies,
              and financial tips to help you keep more of your hard-earned money.
              Our contributors explain key tax topics in simple terms for real-world use.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-accent hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="w-4 h-4" aria-hidden="true" />
                      {post.author}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-accent font-semibold inline-flex items-center gap-1">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container-max container-px">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Blog Categories
          </h2>

          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 px-5 py-4 text-left text-gray-900 dark:text-white hover:border-accent transition"
              >
                <span className="block text-sm font-semibold mb-2">{category}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">View articles in this category.</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
