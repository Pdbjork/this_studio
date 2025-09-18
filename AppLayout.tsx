import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import UploadSection from './UploadSection';
import GallerySection from './GallerySection';
import FeaturesSection from './FeaturesSection';
import TestimonialSection from './TestimonialSection';
import PricingSection from './PricingSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <UploadSection />
        <GallerySection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
