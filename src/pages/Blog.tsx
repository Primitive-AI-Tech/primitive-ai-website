
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';
import { Link, useSearchParams } from 'react-router-dom';
import { Brain, Camera, MessageCircle, FileText, Search } from 'lucide-react';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const allCategories = ['All', 'Workplace Safety', 'Chatbots', 'Legal AI', 'Document Processing', 'AI Trends'];
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  
  const blogPosts = [
    {
      id: '1',
      title: 'How AI is Transforming Workplace Safety Monitoring',
      excerpt: 'Discover how computer vision and AI are revolutionizing workplace safety protocols and preventing accidents before they happen.',
      category: 'Workplace Safety',
      publishDate: new Date('2024-06-01'),
      imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '2',
      title: 'The Evolution of Conversational AI in Customer Support',
      excerpt: 'Learn how advanced LLMs are changing customer support interactions and delivering more natural, helpful experiences.',
      category: 'Chatbots',
      publishDate: new Date('2024-05-24'),
      imageUrl: 'https://images.unsplash.com/photo-1586880244406-8b640a5c0c7d?q=80&w=2574&auto=format&fit=crop',
    },
    {
      id: '3',
      title: 'Legal Document Automation: The Future of Legal Operations',
      excerpt: 'Explore how AI-powered document automation is transforming legal operations and reducing the time and cost of document creation.',
      category: 'Legal AI',
      publishDate: new Date('2024-05-15'),
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '4',
      title: 'Intelligent Document Processing: Beyond OCR',
      excerpt: 'Discover how modern IDP solutions are moving beyond basic OCR to deliver more accurate, context-aware document processing.',
      category: 'Document Processing',
      publishDate: new Date('2024-05-05'),
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '5',
      title: 'Robot-Human Coworking: Safety Challenges and Solutions',
      excerpt: 'As robots become more common in the workplace, ensuring safe human-robot interaction is crucial. Learn about the latest approaches.',
      category: 'Workplace Safety',
      publishDate: new Date('2024-04-27'),
      imageUrl: 'https://images.unsplash.com/photo-1581091014534-676b853dcea9?q=80&w=2574&auto=format&fit=crop',
    },
    {
      id: '6',
      title: 'The Role of Voice Bots in Modern Customer Experience',
      excerpt: 'Voice interactions are becoming increasingly important in customer service. Learn how voice bots are evolving to meet customer needs.',
      category: 'Chatbots',
      publishDate: new Date('2024-04-15'),
      imageUrl: 'https://images.unsplash.com/photo-1628555663365-05799c7d89a2?q=80&w=2574&auto=format&fit=crop',
    },
    {
      id: '7',
      title: 'E-Signing in the Digital Age: Legal Considerations',
      excerpt: 'Electronic signatures are now widely accepted, but there are important legal considerations to ensure their validity and security.',
      category: 'Legal AI',
      publishDate: new Date('2024-04-08'),
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2676&auto=format&fit=crop',
    },
    {
      id: '8',
      title: 'The Future of AI: Trends to Watch in 2024',
      excerpt: 'From multimodal models to democratized AI tools, explore the key artificial intelligence trends shaping the future of business.',
      category: 'AI Trends',
      publishDate: new Date('2024-03-28'),
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '9',
      title: 'Implementing AI in Manufacturing: Best Practices',
      excerpt: 'Learn practical strategies for successfully implementing AI solutions in manufacturing environments to improve safety and productivity.',
      category: 'Workplace Safety',
      publishDate: new Date('2024-03-15'),
      imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2672&auto=format&fit=crop',
    },
  ];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Helper function to map categories to solution paths
  const getCategoryPath = (category) => {
    switch(category) {
      case 'Workplace Safety':
        return '/solutions/camera-ai';
      case 'Chatbots':
        return '/solutions/chatbot';
      case 'Legal AI':
        return '/solutions/legalhub';
      case 'Document Processing':
        return '/solutions/document-processing';
      case 'AI Trends':
        return '/solutions';
      default:
        return '/solutions';
    }
  };

  // Function to get the correct blog post path based on ID
  const getBlogPath = (id: string) => {
    return `/blog/${id}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section min-h-screen flex items-center" data-theme="dark">
        <div className="section-container py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">Blog & Insights</h1>
            <p className="text-base md:text-xl text-purple-200/80 mb-8">
              Stay up to date with the latest trends, best practices, and insights in AI technology and business applications.
            </p>
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border-2 border-purple-300 shadow-lg focus:ring-4 focus:ring-purple-400 focus:border-purple-500 outline-none placeholder-gray-400 text-white transition-all"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pt-10 pb-4">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {allCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "purple" : "outline"}
                className="hover:shadow-md transition-shadow duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-10">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-200 pb-16">
              <div>
                <Link to={getBlogPath(filteredPosts[0].id)} className="block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={filteredPosts[0].imageUrl} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                </Link>
              </div>
              <div>
                <span className="text-sm text-gray-600">
                  {filteredPosts[0].publishDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">
                  <Link to={getBlogPath(filteredPosts[0].id)} className="hover:text-purple-600 transition-colors">
                    {filteredPosts[0].title}
                  </Link>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {filteredPosts[0].excerpt}
                </p>
                <Button variant="purple" className="shadow-md">
                  <Link to={getBlogPath(filteredPosts[0].id)}>Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            title="Latest Articles"
            subtitle={`Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} ${activeCategory !== 'All' ? `in ${activeCategory}` : ''}`}
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                publishDate={post.publishDate}
                category={post.category}
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No articles found in this category</h3>
              <p className="text-gray-600 mt-2">Try selecting a different category or check back later</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest insights, industry trends, and product updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-purple-500 outline-none shadow-sm"
              />
              <Button variant="purple" className="py-3 shadow-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            title="Explore Topics"
            subtitle="Dive deeper into the subjects that matter most to your business"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Workplace Safety</h3>
              <p className="text-gray-600 mb-4">
                Articles on AI-powered safety monitoring, compliance, and risk prevention.
              </p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/solutions/camera-ai">Explore</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Conversational AI</h3>
              <p className="text-gray-600 mb-4">
                Insights on chatbots, voice assistants, and customer interaction technology.
              </p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/solutions/chatbot">Explore</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Legal Technology</h3>
              <p className="text-gray-600 mb-4">
                Content on legal document automation, compliance, and legal operations.
              </p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/solutions/legalhub">Explore</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Trends</h3>
              <p className="text-gray-600 mb-4">
                Updates on the latest advancements, research, and applications in AI technology.
              </p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/solutions">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
