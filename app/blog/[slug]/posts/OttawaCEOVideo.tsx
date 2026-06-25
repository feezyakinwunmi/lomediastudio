// app/blog/[slug]/posts/OttawaCEOVideo.tsx
import { PlayCircle, Target, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function OttawaCEOVideo() {
  return (
    <div className="space-y-20">
      
      {/* Intro */}
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p>In today's competitive business landscape, visibility and credibility are essential for leadership success. For CEOs in Ottawa, strategic video content has become one of the most powerful tools for building authority and trust.</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
          <p className="text-gray-700 text-sm">
            <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="text-red-600 hover:underline font-semibold">
              Video marketing
            </Link> is one of the most effective ways for Ottawa CEOs to build authority and grow their influence.
          </p>
        </div>
      </div>

      {/* Why Video Matters */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <PlayCircle className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Why Video Content Matters for Ottawa CEOs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-1 mt-8">
          {[
            "Build trust and credibility",
            "Showcase leadership expertise",
            "Humanize the brand",
            "Increase online visibility",
            "Improve SEO rankings",
            "Generate quality leads",
            "Strengthen audience engagement"
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm">
              <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/5-signs-your-ottawa-business-needs-professional-media-strategy" className="text-red-600 hover:underline">
            A professional media strategy
          </Link> helps CEOs maximize the impact of their video content across all platforms.
        </p>
      </div>

      {/* Thought Leadership */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">The Role of Thought Leadership Video Content</h2>
        </div>

        <p className="text-gray-600 mb-8">Thought leadership videos help CEOs establish themselves as experts within their industries.</p>

        <div className="grid md:grid-cols-2 gap-1">
          {[
            "Industry insight videos",
            "Educational videos",
            "Company vision videos",
            "Behind-the-scenes content",
            "Client success stories"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1 bg-gray-50 p-5 rounded-2xl">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/social-media-content-creation-for-ottawa-businesses" className="text-red-600 hover:underline">
            Social media content creation
          </Link> for thought leadership requires a strategic approach to building authority.
        </p>
      </div>

      {/* SEO Benefits */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">SEO Benefits of Strategic Video Content</h2>
        </div>

        <p className="text-gray-600 mb-6">Video content significantly improves search engine rankings and user engagement metrics.</p>

        <ul className="space-y-4">
          {[
            "Time spent on page",
            "Click-through rates",
            "Social shares",
            "Website traffic",
            "Audience retention"
          ].map((metric, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              {metric}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm mt-3">
          <Link href="/blog/instagram-reels-for-ottawa-brands" className="text-red-600 hover:underline">
            Instagram Reels for Ottawa brands
          </Link> also benefit from strong SEO and engagement strategies.
        </p>
      </div>

      {/* Platforms & Tips */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Best Platforms for CEO Video Marketing</h3>
          <ul className="space-y-4 text-gray-700">
            {["LinkedIn", "YouTube", "Instagram & Facebook", "Company Website"].map((platform) => (
              <li key={platform} className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                {platform}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="text-red-600 hover:underline">
              Video marketing
            </Link> strategies should be tailored to each platform for maximum impact.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Tips for High-Impact CEO Video Content</h3>
          <ul className="space-y-4 text-gray-700">
            {[
              "Focus on value first",
              "Keep videos authentic",
              "Optimize for SEO",
              "Use professional branding",
              "Maintain consistency"
            ].map((tip) => (
              <li key={tip} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500" />
                {tip}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm mt-4">
            <Link href="/blog/how-to-write-high-converting-email-sequences-without-annoying-your-audience" className="text-red-600 hover:underline">
              High-converting email sequences
            </Link> and video content both benefit from consistency and a clear value proposition.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white rounded-3xl p-12 text-center">
        <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h3 className="text-3xl font-bold mb-4">Ready to Build Your Executive Authority?</h3>
        <p className="text-purple-100 max-w-md mx-auto mb-8">
          Let's create strategic video content that positions you as a thought leader in Ottawa's business community.
        </p>
        <Link href="/contact" className="inline-block bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
          Start Your Video Strategy
        </Link>
      </div>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop" 
                alt="Video marketing for Ottawa businesses" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                5 Ways Video Marketing Helps Ottawa Businesses Grow Faster
              </h4>
              <p className="text-gray-500 text-sm mt-2">Video marketing has become such a valuable tool for businesses looking to grow.</p>
            </div>
          </Link>
          <Link href="/blog/instagram-reels-for-ottawa-brands" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop" 
                alt="Instagram Reels for Ottawa brands" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Instagram Reels for Ottawa Brands: Strategy That Converts
              </h4>
              <p className="text-gray-500 text-sm mt-2">If your brand is still posting static graphics while competitors dominate feeds with compelling Reels, you are already behind.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}