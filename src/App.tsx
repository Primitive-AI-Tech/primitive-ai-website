
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Solutions from '@/pages/Solutions';
import Services from '@/pages/Services';
import Blog from '@/pages/Blog';
import Success from '@/pages/Success';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

// Solution detail pages
import CameraAI from '@/pages/solution-details/CameraAI';
import SupportHub from '@/pages/solution-details/Chatbot';
import LegalHub from '@/pages/solution-details/LegalHub';
import KnowledgeHub from '@/pages/solution-details/KnowledgeHub';
import FamilyHub from '@/pages/solution-details/FamilyHub';

// Blog post pages
import BlogPost1 from '@/pages/blog-posts/BlogPost1';
import BlogPost2 from '@/pages/blog-posts/BlogPost2';
import BlogPost3 from '@/pages/blog-posts/BlogPost3';
import BlogPost4 from '@/pages/blog-posts/BlogPost4';
import BlogPost5 from '@/pages/blog-posts/BlogPost5';
import BlogPost6 from '@/pages/blog-posts/BlogPost6';
import BlogPost7 from '@/pages/blog-posts/BlogPost7';
import BlogPost8 from '@/pages/blog-posts/BlogPost8';
import BlogPost9 from '@/pages/blog-posts/BlogPost9';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success" element={<Success />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Solution detail routes */}
            <Route path="/solutions/camera-ai" element={<CameraAI />} />
            <Route path="/solutions/chatbot" element={<SupportHub />} />
            <Route path="/solutions/legalhub" element={<LegalHub />} />
            <Route path="/solutions/knowledgehub" element={<KnowledgeHub />} />
            <Route path="/solutions/familyhub" element={<FamilyHub />} />
            
            {/* Blog post routes */}
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
            <Route path="/blog/3" element={<BlogPost3 />} />
            <Route path="/blog/4" element={<BlogPost4 />} />
            <Route path="/blog/5" element={<BlogPost5 />} />
            <Route path="/blog/6" element={<BlogPost6 />} />
            <Route path="/blog/7" element={<BlogPost7 />} />
            <Route path="/blog/8" element={<BlogPost8 />} />
            <Route path="/blog/9" element={<BlogPost9 />} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
