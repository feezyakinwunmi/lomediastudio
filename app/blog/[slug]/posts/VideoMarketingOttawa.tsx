 // app/blog/[slug]/posts/VideoMarketingOttawa.tsx
import { PlayCircle, TrendingUp, Users, Award, Target, Heart } from 'lucide-react';

export default function VideoMarketingOttawa() {
  return (
    <div className="space-y-20">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        5 Ways Video Marketing Helps Ottawa Businesses Grow Faster
      </h1>

      {/* Introduction */}
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p>Ottawa’s business community has changed quickly over the last few years. From growing tech startups in Kanata to local businesses across Centretown, Orleans, and ByWard Market, more brands are competing for attention online than ever before.</p>
        <p>And in a city where customers often research businesses before making contact, first impressions matter.</p>
        <p>That’s one reason video marketing has become such a valuable tool for businesses looking to grow. It helps brands connect with people faster, communicate more clearly, and stay visible in a crowded digital space.</p>
        <p>Here are five ways video marketing is helping Ottawa businesses grow faster in 2026.</p>
      </div>

      {/* 1 */}
      <div>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">1. Video Builds Trust Faster</h2>
        </div>
        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Ottawa is still very much a relationship-driven city. People want to know who they’re working with before they commit to a service or make a purchase.</p>
          <p>A well-produced video gives businesses the opportunity to show the people behind the brand, their process, customer experiences, and the quality of their work.</p>
          <p>This is especially useful for industries like real estate, construction, hospitality, healthcare, and professional services where trust influences buying decisions heavily. Even short videos like a founder introduction or customer testimonial can make a business feel more approachable and credible.</p>
        </div>
      </div>

      {/* 2 */}
      <div>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">2. Video Helps Businesses Stand Out Locally</h2>
        </div>
        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Ottawa’s market is becoming more competitive across almost every industry. Video helps cut through that noise.</p>
          <p>Whether it’s showcasing a restaurant atmosphere in ByWard Market, highlighting a renovation project in Barrhaven, covering a local event downtown, or creating social content for a growing startup — video creates a stronger and more memorable impression than static posts alone.</p>
        </div>
      </div>

      {/* 3 */}
      <div>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">3. Video Performs Better Across Social Platforms</h2>
        </div>
        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Social media platforms continue prioritizing short-form video content. For Ottawa businesses, this creates an opportunity to stay visible consistently without relying entirely on paid ads.</p>
          <p>Content that tends to perform well locally includes behind-the-scenes clips, event coverage, quick educational videos, customer reactions, day-in-the-life content, and community-focused campaigns.</p>
        </div>
      </div>

      {/* 4 */}
      <div>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">4. Video Improves Online Visibility</h2>
        </div>
        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Search engines increasingly prioritize engaging content, and video plays a major role in that. Adding video to your website can help improve user engagement, time spent on page, social sharing, and overall search visibility.</p>
        </div>
      </div>

      {/* 5 */}
      <div>
        <div className="flex items-start gap-5 mb-6">
          <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-rose-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">5. Video Helps Businesses Stay Competitive</h2>
        </div>
        <div className="prose prose-lg text-gray-600 leading-relaxed">
          <p>Many Ottawa businesses are still underusing video strategically. But brands treating video as part of a long-term marketing strategy are often seeing stronger results over time.</p>
          <p>Video can support brand awareness, lead generation, customer education, recruitment, social engagement, and local visibility.</p>
        </div>
      </div>

      {/* Conclusion + CTA */}
      <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-16 text-center">
        <Heart className="w-16 h-16 mx-auto mb-6 text-red-500" />
        <h3 className="text-3xl font-bold mb-6">Video marketing is no longer just an add-on for businesses in Ottawa.</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          It’s becoming part of how brands communicate, build trust, and stay visible online. 
          At LO Media House, we work with businesses to create content that not only looks good, but also supports real business growth through strategy, storytelling, and digital visibility.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-gray-900 px-12 py-5 rounded-2xl font-semibold hover:bg-gray-100 transition text-lg"
        >
          Contact LO Media House
        </a>
        <p className="text-xs text-gray-400 mt-6">www.lomediahouse.com</p>
      </div>
    </div>
  );
}