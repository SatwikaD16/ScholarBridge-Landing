import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Product } from './components/Product';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { VideoLightbox } from './components/VideoLightbox';

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export function App() {
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [selectedProductImage, setSelectedProductImage] = useState<ProductItem | null>(null);

  const handleOpenDemo = () => {
    setIsVideoLightboxOpen(true);
  };

  const handleCloseDemo = () => {
    setIsVideoLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onWatchDemo={handleOpenDemo} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. HERO with centered phone mockup & video preview */}
        <Hero 
          onWatchDemo={handleOpenDemo}
          isLightboxOpen={isVideoLightboxOpen}
        />

        {/* 2. PROBLEM */}
        <Problem />

        {/* 3. SOLUTION */}
        <Solution />

        {/* 4. HOW IT WORKS */}
        <HowItWorks />

        {/* 5. PRODUCT */}
        <Product onSelectImage={(item) => setSelectedProductImage(item)} />

        {/* 6. FINAL CTA */}
        <FinalCTA onWatchDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Demo Video Lightbox */}
      <VideoLightbox
        isOpen={isVideoLightboxOpen}
        onClose={handleCloseDemo}
      />

      {/* Product Image Zoom Modal */}
      <ImageModal
        item={selectedProductImage}
        onClose={() => setSelectedProductImage(null)}
      />
    </div>
  );
}

export default App;
