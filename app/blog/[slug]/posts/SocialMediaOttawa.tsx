// app/blog/[slug]/posts/SocialMediaOttawa.tsx
import { CheckCircle, MapPin, Users, Heart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function SocialMediaOttawa() {
  return (
    <div className="space-y-20">
      
      {/* Introduction */}
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p>Social media has become one of the most powerful tools for business growth in Ottawa. From local startups in Kanata, to retail brands in Westboro, to professional firms downtown — businesses now need more than occasional posts to stay competitive.</p>
        <p>Today's audiences value authentic, engaging, and locally relevant content.</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
          <p className="text-gray-700 text-sm">
            <Link href="/blog/instagram-reels-for-ottawa-brands" className="text-red-600 hover:underline font-semibold">
              Instagram Reels for Ottawa brands
            </Link> are one of the most effective ways to create the authentic, engaging content today's audiences crave.
          </p>
        </div>
      </div>

      {/* What Works Section */}
      <div>
        <div className="md:flex items-start gap-5 mb-10">
          <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">What Works in Social Media Marketing Today</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <MapPin className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Localized Social SEO</h3>
            </div>
            <p className="text-gray-600">Using Ottawa-focused keywords, captions, and hashtags like #OttawaBusiness, #KanataTech, and #WestboroOttawa helps you appear in local searches.</p>
            <p className="text-gray-600 text-sm mt-3">
              <Link href="/blog/5-signs-your-ottawa-business-needs-professional-media-strategy" className="text-red-600 hover:underline">
                A professional media strategy
              </Link> can help you optimize your social SEO for local search.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <TrendingUp className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Authentic Video Content</h3>
            </div>
            <p className="text-gray-600">Short-form videos and behind-the-scenes content consistently outperform polished corporate posts. People connect with real stories.</p>
            <p className="text-gray-600 text-sm mt-3">
              <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="text-red-600 hover:underline">
                Video marketing
              </Link> is essential for creating the authentic content that drives engagement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <Users className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Founder & Team Visibility</h3>
            </div>
            <p className="text-gray-600">Showcasing your team and workplace culture builds stronger trust. People buy from brands that feel personal and community-driven.</p>
            <p className="text-gray-600 text-sm mt-3">
              <Link href="/blog/how-ottawa-ceos-can-build-authority-using-strategic-video-content" className="text-red-600 hover:underline">
                Ottawa CEOs are building authority
              </Link> through strategic content that showcases their leadership and team.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <Heart className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Ottawa-Focused Content</h3>
            </div>
            <p className="text-gray-600">Content tied to local seasons, events (Winterlude), neighborhoods (ByWard Market), and community stories performs significantly better.</p>
            <p className="text-gray-600 text-sm mt-3">
              <Link href="/blog/instagram-reels-for-ottawa-brands" className="text-red-600 hover:underline">
                Instagram Reels
              </Link> are a great format for sharing locally-focused, timely content.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Why It Matters for Ottawa Businesses</h3>
        <div className="grid sm:grid-cols-2 gap-1">
          {[
            "Increase local visibility",
            "Build customer trust",
            "Generate qualified leads",
            "Strengthen brand authority",
            "Drive long-term business growth"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-1 bg-gray-50 p-6 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/5-signs-your-ottawa-business-needs-professional-media-strategy" className="text-red-600 hover:underline">
            A professional media strategy
          </Link> helps you achieve all of these benefits through consistent, strategic social media marketing.
        </p>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-3xl p-14 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Ottawa Business on Social Media?</h3>
        <p className="text-emerald-100 max-w-lg mx-auto mb-8">
          Let's create authentic, locally relevant content that builds trust and drives real business results.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Start Your Social Media Strategy
        </Link>
      </div>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </section>
    </div>
  );
}