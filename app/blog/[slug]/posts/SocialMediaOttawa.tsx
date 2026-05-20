// app/blog/[slug]/posts/SocialMediaOttawa.tsx
import { CheckCircle, MapPin, Users, Heart, TrendingUp } from 'lucide-react';

export default function SocialMediaOttawa() {
  return (
    <div className="space-y-20">
      
      {/* Introduction */}
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p>Social media has become one of the most powerful tools for business growth in Ottawa. From local startups in Kanata, to retail brands in Westboro, to professional firms downtown — businesses now need more than occasional posts to stay competitive.</p>
        <p>Today’s audiences value authentic, engaging, and locally relevant content.</p>
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
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <TrendingUp className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Authentic Video Content</h3>
            </div>
            <p className="text-gray-600">Short-form videos and behind-the-scenes content consistently outperform polished corporate posts. People connect with real stories.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <Users className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Founder & Team Visibility</h3>
            </div>
            <p className="text-gray-600">Showcasing your team and workplace culture builds stronger trust. People buy from brands that feel personal and community-driven.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="md:flex items-center gap-1 mb-6">
              <Heart className="w-7 h-7 text-emerald-600" />
              <h3 className="text-xl font-semibold">Ottawa-Focused Content</h3>
            </div>
            <p className="text-gray-600">Content tied to local seasons, events (Winterlude), neighborhoods (ByWard Market), and community stories performs significantly better.</p>
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
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-3xl p-14 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Ottawa Business on Social Media?</h3>
        <p className="text-emerald-100 max-w-lg mx-auto mb-8">
          Let’s create authentic, locally relevant content that builds trust and drives real business results.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
        >
          Start Your Social Media Strategy
        </a>
      </div>
    </div>
  );
}