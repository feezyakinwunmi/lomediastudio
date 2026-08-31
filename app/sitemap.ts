// app/sitemap.ts
import { MetadataRoute } from 'next'
import { allBlogPosts } from '@/data/blogs'

const baseUrl = 'https://www.lomediastudio.com'

const services = [
  'media-content-creation',
  'digital-marketing',
  'email-marketing',
  'photography',
  'storytelling',
  'video-production',
  'visual-brand-development',
  'creative-direction',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}