// app/blog/[slug]/posts/OttawaCEOVideo.tsx
import { PlayCircle, Target, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';

export default function OttawaCEOVideo() {
  return (
    <div className="space-y-20">
      
      {/* Intro */}
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p>In today’s competitive business landscape, visibility and credibility are essential for leadership success. For CEOs in Ottawa, strategic video content has become one of the most powerful tools for building authority and trust.</p>
      </div>

      {/* Why Video Matters */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
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
            <div key={i} className="md:flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm">
              <Target className="w-5 h-5 text-purple-600 mt-0.5 md:flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Thought Leadership */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
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
            <div key={i} className="md:flex items-center gap-1 bg-gray-50 p-5 rounded-2xl">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Benefits */}
      <div>
        <div className="md:flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-emerald-100 rounded-2xl md:flex items-center justify-center md:flex-shrink-0 mt-1">
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
            <li key={i} className="md:flex items-center gap-3 text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              {metric}
            </li>
          ))}
        </ul>
      </div>

      {/* Platforms & Tips */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Best Platforms for CEO Video Marketing</h3>
          <ul className="space-y-4 text-gray-700">
            {["LinkedIn", "YouTube", "Instagram & Facebook", "Company Website"].map((platform) => (
              <li key={platform} className="md:flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                {platform}
              </li>
            ))}
          </ul>
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
              <li key={tip} className="md:flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white rounded-3xl p-12 text-center">
        <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h3 className="text-3xl font-bold mb-4">Ready to Build Your Executive Authority?</h3>
        <p className="text-purple-100 max-w-md mx-auto mb-8">
          Let’s create strategic video content that positions you as a thought leader in Ottawa’s business community.
        </p>
        <a href="/contact" className="inline-block bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
          Start Your Video Strategy
        </a>
      </div>
    </div>
  );
}