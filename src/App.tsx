
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Solutions from '@/pages/Solutions';
import Services from '@/pages/Services';
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Solution detail routes */}
            <Route path="/solutions/camera-ai" element={<CameraAI />} />
            <Route path="/solutions/chatbot" element={<SupportHub />} />
            <Route path="/solutions/legalhub" element={<LegalHub />} />
            <Route path="/solutions/knowledgehub" element={<KnowledgeHub />} />
            <Route path="/solutions/familyhub" element={<FamilyHub />} />
            
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
