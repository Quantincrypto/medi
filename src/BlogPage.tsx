import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Layout } from './components/Layout';
import { SEO } from './components/SEO';
import { blogPosts } from './data';

export const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Medical Equipment Guides & Market News Africa | MedicalEquipment.Africa"
        description="Expert guides on buying refurbished medical equipment, market trends in Africa, and technical insights for healthcare providers."
      />

      <div className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight">Insights & Guides</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Expert advice on medical equipment procurement, technical standards, and healthcare infrastructure in Africa.
          </p>
        </div>
      </div>

      <section className="py-20 bg-clinical">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-teal/10 text-teal text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-navy/40 font-bold uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-4 group-hover:text-teal transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-navy/60 text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-navy/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-clinical rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-navy/40" />
                      </div>
                      <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-teal font-bold text-sm flex items-center gap-1 hover:underline">
                      Read <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-white border-t border-navy/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Stay Informed</h2>
          <p className="text-navy/60 mb-8">Get the latest guides and market reports delivered to your inbox. No spam, just expert insights.</p>
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-1 p-4 rounded-xl border border-navy/10 outline-none focus:border-teal transition-colors"
            />
            <button className="bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};
