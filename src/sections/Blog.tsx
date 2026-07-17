import { motion } from 'framer-motion';
import { ArrowRight, Feather } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { BlogCard } from '@/components/BlogCard';
import { blogPosts, featuredPosts } from '@/data/blog';

export function Blog() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-warm-50/30 to-white" />
      
      <div className="relative z-10 section-padding" ref={ref}>
        <div className="content-max-width">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <SectionHeader
                label="Insights"
                title="Thoughts on systems, leadership, and building."
                align="left"
              />
            </div>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-copper-600 
                         transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Feather className="w-4 h-4" />
              View all articles
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Featured posts — large cards */}
          <div className="space-y-10 mb-16">
            {featuredPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} variant="featured" />
            ))}
          </div>

          {/* Post list — smaller grid */}
          <div className="border-t border-ink-100 pt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(p => !p.featured).map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
