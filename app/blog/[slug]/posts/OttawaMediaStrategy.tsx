// app/blog/[slug]/posts/OttawaMediaStrategy.tsx
import { CheckCircle, TrendingUp, Users, AlertTriangle, Award } from 'lucide-react';
import Link from 'next/link';

export default function OttawaMediaStrategy() {
  return (
    <div className="space-y-20">
      
      {/* Section 1 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              1. Your Social Media Looks Inconsistent or Unprofessional
            </h2>
          </div>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
          <p>Your social media presence is among the first things prospective buyers look at. Customers may believe your company lacks professionalism if your pages contain out-of-date graphics, sporadic posting, subpar images, or inconsistent messaging.</p>
          <p>Digital impression has a big impact on customers in places like Ottawa. Before a client even messages you or comes to your store, a professional online presence fosters trust.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              <Link href="/blog/social-media-content-creation-for-ottawa-businesses" className="text-red-600 hover:underline font-semibold">
                Social media content creation
              </Link> is essential for maintaining a consistent and professional online presence.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Common Warning Signs:</h3>
        <ul className="grid grid-2 gap-2">
          {[
            "Posting only once every few weeks",
            "Low engagement despite having followers",
            "Different branding across platforms",
            "Poor-quality videos or graphics",
            "No clear brand voice"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">A professional media strategy helps create:</h3>
        <ul className="grid gap-1">
          {[
            "Consistent branding",
            "High-quality content",
            "Targeted messaging",
            "Better audience engagement",
            "Stronger brand recognition"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-emerald-50 p-1 rounded-2xl">
              <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/instagram-reels-for-ottawa-brands" className="text-red-600 hover:underline">
            Instagram Reels for Ottawa brands
          </Link> can help you create consistent, high-quality video content that builds brand recognition.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            2. You're Spending Money on Ads But Seeing Little Return
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>In Canada, many companies run advertisements or promote posts without a clear plan. They spend money on initiatives that don't generate qualified leads due to lack of audience insight, targeting, or creative direction.</p>
          <p className="text-gray-600 text-sm mt-3">
            <Link href="/blog/how-to-write-high-converting-email-sequences-without-annoying-your-audience" className="text-red-600 hover:underline">
              High-converting email sequences
            </Link> and targeted ad campaigns work best when they're part of a comprehensive media strategy.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Signs Your Advertising Strategy Isn't Working:</h3>
        <ul className="grid gap-1">
          {[
            "High ad spending with low conversions",
            "Plenty of clicks but few inquiries",
            "Weak website traffic",
            "Low customer retention",
            "No measurable ROI"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            3. Your Competitors Are Getting More Attention Online
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
          <p>If your competitors continually dominate social media conversations, appear in search results, and receive more engagement, they are likely investing in professional branding and digital marketing.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              <Link href="/blog/how-ottawa-ceos-can-build-authority-using-strategic-video-content" className="text-red-600 hover:underline font-semibold">
                Ottawa CEOs are building authority
              </Link> through strategic video content that helps them stand out from competitors.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-5">What Competitors May Be Doing Better:</h3>
        <ul className="grid gap-1">
          {[
            "Professional video marketing",
            "Consistent social content",
            "Better storytelling",
            "SEO optimization",
            "Influencer collaborations",
            "Stronger visual identity",
            "Community engagement"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="text-red-600 hover:underline">
            Video marketing
          </Link> is one of the key strategies competitors are using to gain an edge in Ottawa's market.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Award className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            4. Your Business Has No Clear Brand Identity
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Many businesses struggle because customers cannot clearly understand what they offer, what makes them different, or why they should trust them. Without a clear identity, businesses become forgettable.</p>
          <p className="text-gray-600 text-sm mt-3">
            <Link href="/blog/social-media-content-creation-for-ottawa-businesses" className="text-red-600 hover:underline">
              Social media content creation
            </Link> plays a crucial role in establishing and communicating a clear brand identity.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Strong Branding Includes:</h3>
        <ul className="grid gap-1">
          {[
            "A recognizable visual style",
            "Clear messaging",
            "Emotional storytelling",
            "Consistent tone of voice",
            "Professional photography and video",
            "Audience-focused communication"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 5 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            5. You're Growing, But Your Online Presence Isn't Keeping Up
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
          <p>Growth creates new expectations. As businesses expand, customers expect better visuals, faster communication, more polished marketing, and stronger digital experiences.</p>
          <p className="text-gray-600 text-sm mt-3">
            <Link href="/blog/5-ways-video-marketing-helps-ottawa-businesses-grow-faster" className="text-red-600 hover:underline">
              Video marketing
            </Link> and professional media strategies help growing businesses maintain a polished online presence.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-5">This Often Happens When:</h3>
        <ul className="grid gap-1 mb-10">
          {[
            "Your branding doesn't evolve with your business",
            "Your website no longer reflects your quality",
            "Your content looks outdated",
            "Your clientele has grown beyond what you can currently promote"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-5">Professional Media Support Includes:</h3>
        <ul className="grid gap-1">
          {[
            "Brand development",
            "Corporate video production",
            "Content marketing",
            "Social media management",
            "Digital campaigns",
            "Photography",
            "Creative direction",
            "SEO-focused content"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          <Link href="/blog/5-signs-your-ottawa-business-needs-professional-media-strategy" className="text-red-600 hover:underline">
            A professional media strategy
          </Link> ensures your online presence evolves alongside your business growth.
        </p>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Ottawa Business?</h3>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Stop guessing with your marketing. Let us build a professional media strategy that delivers real results.
        </p>
        <Link href="/contact" className="inline-block bg-white text-red-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
          Get Your Free Strategy Session
        </Link>
      </div>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/social-media-content-creation-for-ottawa-businesses" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Social media content creation" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Social Media Content Creation for Ottawa Businesses
              </h4>
              <p className="text-gray-500 text-sm mt-2">How Ottawa businesses can create engaging, locally relevant social media content that drives real growth.</p>
            </div>
          </Link>
          <Link href="/blog/how-ottawa-ceos-can-build-authority-using-strategic-video-content" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop" 
                alt="Ottawa CEOs building authority with video" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How Ottawa CEOs Can Build Authority Using Strategic Video Content
              </h4>
              <p className="text-gray-500 text-sm mt-2">Why top Ottawa CEOs are using strategic video content to establish authority and grow their influence.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}