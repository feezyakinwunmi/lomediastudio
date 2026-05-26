// app/blog/[slug]/BlogPostContent.tsx
'use client';

type Props = { content: string };

export default function BlogPostContent({ content }: Props) {
  return (
    <div
      className="prose prose-lg max-w-none 
                 prose-h2:text-3xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mt-12 prose-h2:mb-6
                 prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:mt-10
                 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                 prose-ul:my-8 prose-li:text-gray-600 prose-li:leading-relaxed
                 prose-strong:text-gray-900
                 prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-6 prose-blockquote:italic"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}