// app/work/page.tsx
'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Eye, 
  Filter,
  Star,
  Users,
  Globe,
  Award,
  ExternalLink
} from 'lucide-react';

// Project Categories
const categories = [
  { id: 'all', name: 'All Projects', color: 'red' },
  { id: 'web', name: 'Web Creation', color: 'blue' },
  { id: 'video', name: 'Event Videography', color: 'green' },
  { id: 'recording', name: 'Recording Studio', color: 'purple' },
  { id: 'branding', name: 'Branding', color: 'orange' },
  { id: 'content', name: 'Content Creation', color: 'pink' },
];

const projects = [
  {
    id: 1,
    title: "Nexus Digital",
    category: "web",
    categoryName: "Web Creation",
    image: "/bg1.jpg",
    client: "Nexus Digital",
    year: "2024",
    description: "A cutting-edge web platform for a tech startup, featuring immersive animations and seamless user experience.",
    stats: { views: "12.5K" },
    featured: true,
    externalLink: "https://nexusdigital.com" // External link
  },
  {
    id: 2,
    title: "Rhythm & Soul",
    category: "recording",
    categoryName: "Recording Studio",
    image: "/bg2.jpg",
    client: "Rhythm & Soul Records",
    year: "2024",
    description: "Full album production and mixing for emerging artists, capturing authentic sound and emotion.",
    stats: { views: "8.2K" },
    featured: false,
    externalLink: "https://rhythmandsoul.com"
  },
  {
    id: 3,
    title: "Tech Summit 2024",
    category: "video",
    categoryName: "Event Videography",
    image: "/bg3.jpg",
    client: "Global Tech Events",
    year: "2024",
    description: "Comprehensive event coverage with cinematic highlights and speaker interviews.",
    stats: { views: "25.3K" },
    featured: true,
    externalLink: "https://techsummit2024.com"
  },
  {
    id: 4,
    title: "Luxe Identity",
    category: "branding",
    categoryName: "Branding",
    image: "/bg4.jpg",
    client: "Luxe Lifestyle",
    year: "2023",
    description: "Complete brand identity overhaul including logo, packaging, and digital presence.",
    stats: { views: "15.7K" },
    featured: false,
    externalLink: "https://luxeidentity.com"
  },
  {
    id: 5,
    title: "Social Pulse",
    category: "content",
    categoryName: "Content Creation",
    image: "/bg5.jpg",
    client: "Social Media Agency",
    year: "2024",
    description: "Strategic content campaign reaching millions across multiple platforms.",
    stats: { views: "45.8K" },
    featured: true,
    externalLink: "https://socialpulse.com"
  },
  {
    id: 6,
    title: "Studio Sessions",
    category: "recording",
    categoryName: "Recording Studio",
    image: "/bg6.jpg",
    client: "Independent Artists",
    year: "2023",
    description: "Live recording sessions featuring emerging talent from around the world.",
    stats: { views: "18.9K" },
    featured: false,
    externalLink: "https://studiosessions.com"
  },
  {
    id: 7,
    title: "Corporate Vision",
    category: "video",
    categoryName: "Event Videography",
    image: "/bg7.jpg",
    client: "Fortune 500 Company",
    year: "2024",
    description: "High-end corporate video production for global brand campaigns.",
    stats: { views: "32.1K" },
    featured: false,
    externalLink: "https://corporatevision.com"
  },
  {
    id: 8,
    title: "Creative Studio",
    category: "web",
    categoryName: "Web Creation",
    image: "/bg8.jpg",
    client: "Design Agency",
    year: "2024",
    description: "Interactive portfolio website with dynamic animations and CMS integration.",
    stats: { views: "22.4K" },
    featured: false,
    externalLink: "https://creativestudio.com"
  },
  {
    id: 9,
    title: "Brand Evolution",
    category: "branding",
    categoryName: "Branding",
    image: "/bg9.jpg",
    client: "Eco-Friendly Products",
    year: "2023",
    description: "Sustainable brand identity design with eco-conscious packaging.",
    stats: { views: "12.3K" },
    featured: false,
    externalLink: "https://brandevolution.com"
  }
];

// Featured Project Component
function FeaturedProject({ project }: { project: any }) {
  return (
    <motion.div suppressHydrationWarning
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden group mb-12 mx-10"
    >
      <div className="relative h-[100vh] md:h-[90vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full px-3 py-1 border border-purple-900/30">
                <span className="text-red-400 text-xs font-semibold">Featured Project</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h2>
            <p className="text-gray-200 text-lg mb-4">{project.description}</p>
            <div className="flex gap-4 mb-6">
              <span className="text-gray-300 text-sm">Client: {project.client}</span>
              <span className="text-gray-300 text-sm">Year: {project.year}</span>
            </div>
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <motion.button suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-900 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Project Card Component - Simplified
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div suppressHydrationWarning
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-purple-900 text-xs font-semibold uppercase tracking-wider">
                {project.categoryName}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{project.title}</h3>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="flex gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" /> {project.stats.views}
              </span>
            </div>
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-purple-900 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View Project
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilter, setShowFilter] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  // Filter projects
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' ? true : project.category === selectedCategory
  );
  
  const featuredProject = projects.find(p => p.featured);

  return (
    <main ref={sectionRef} className="bg-gray-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden md:py-20">
        {/* Background with Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div suppressHydrationWarning
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-center text-white"
          >
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full px-4 py-1 border border-purple-900/30">
                <span className="text-red-400 text-sm font-semibold">Our Portfolio</span>
              </div>
            </motion.div>
            
            <motion.h1 suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Creative Works That
              <span className="text-purple-900 block">Inspire & Transform</span>
            </motion.h1>
            
            <motion.p suppressHydrationWarning
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Explore our collection of projects that showcase our passion for creativity, 
              innovation, and exceptional storytelling.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Completed", icon: Award },
              { value: "30+", label: "Happy Clients", icon: Users },
              { value: "15+", label: "Countries", icon: Globe },
              { value: "98%", label: "Success Rate", icon: Star },
            ].map((stat, idx) => (
              <motion.div suppressHydrationWarning
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-purple-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && <FeaturedProject project={featuredProject} />}

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">All Projects</h2>
              <p className="text-gray-600">Discover our latest creative works</p>
            </div>
            
            {/* Desktop Filter */}
            <div className="hidden md:flex gap-2">
              {categories.map((cat) => (
                <motion.button suppressHydrationWarning
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-purple-900 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-lg text-gray-600 hover:bg-white border border-gray-200'
                  }`}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-lg rounded-full border border-gray-200"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>
          </div>
          
          {/* Mobile Filter Dropdown */}
          {showFilter && (
            <motion.div suppressHydrationWarning
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden flex flex-wrap gap-2 mb-8"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowFilter(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-purple-900 text-white'
                      : 'bg-white/80 text-gray-600 border border-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>
          )}
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div suppressHydrationWarning
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900 to-red-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with our creative expertise.
            </p>
            <Link href="/contact">
              <motion.button suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}