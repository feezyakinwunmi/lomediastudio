// app/blog/[slug]/posts/OttawaMediaStrategy.tsx
import { CheckCircle, TrendingUp, Users, AlertTriangle, Award } from 'lucide-react';

export default function OttawaMediaStrategy() {
  return (
    <div className="space-y-20">
      
      {/* Section 1 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-red-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
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
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Common Warning Signs:</h3>
        <ul className="  grid grid-2 gap-2">
          {[
            "Posting only once every few weeks",
            "Low engagement despite having followers",
            "Different branding across platforms",
            "Poor-quality videos or graphics",
            "No clear brand voice"
          ].map((item, i) => (
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
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
            <li key={i} className="md:flex items-start gap-3 bg-emerald-50 p-1 rounded-2xl">
              <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5 md:flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            2. You’re Spending Money on Ads But Seeing Little Return
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>In Canada, many companies run advertisements or promote posts without a clear plan. They spend money on initiatives that don't generate qualified leads due to lack of audience insight, targeting, or creative direction.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-5">Signs Your Advertising Strategy Isn’t Working:</h3>
        <ul className="grid gap-1">
          {[
            "High ad spending with low conversions",
            "Plenty of clicks but few inquiries",
            "Weak website traffic",
            "Low customer retention",
            "No measurable ROI"
          ].map((item, i) => (
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            3. Your Competitors Are Getting More Attention Online
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
          <p>If your competitors continually dominate social media conversations, appear in search results, and receive more engagement, they are likely investing in professional branding and digital marketing.</p>
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
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 4 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
            <Award className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            4. Your Business Has No Clear Brand Identity
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Many businesses struggle because customers cannot clearly understand what they offer, what makes them different, or why they should trust them. Without a clear identity, businesses become forgettable.</p>
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
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 5 */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-teal-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
            <TrendingUp className="w-6 h-6 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            5. You’re Growing, But Your Online Presence Isn’t Keeping Up
          </h2>
        </div>

        <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
          <p>Growth creates new expectations. As businesses expand, customers expect better visuals, faster communication, more polished marketing, and stronger digital experiences.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-5">This Often Happens When:</h3>
        <ul className="grid gap-1 mb-10">
          {[
            "Your branding doesn't evolve with your business",
            "Your website no longer reflects your quality",
            "Your content looks outdated",
            "Your clientele has grown beyond what you can currently promote"
          ].map((item, i) => (
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
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
            <li key={i} className="md:flex items-start gap-3 bg-gray-50 p-1 rounded-2xl">
              <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 md:flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Ottawa Business?</h3>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Stop guessing with your marketing. Let us build a professional media strategy that delivers real results.
        </p>
        <a href="/contact" className="inline-block bg-white text-red-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
          Get Your Free Strategy Session
        </a>
      </div>
    </div>
  );
}