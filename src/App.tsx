import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Twitter } from 'lucide-react';
import { Button } from './components/ui/button';

import image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6 from 'figma:asset/8bb762d8c6f92920e2791ab71b68c0b3aa042bf6.png';

// Import page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SpeechesPage from './components/SpeechesPage';
import VideosPage from './components/VideosPage';
import ArticlesPage from './components/ArticlesPage';
import ProfessionalBodiesPage from './components/ProfessionalBodiesPage';
import AwardsPage from './components/AwardsPage';
import MentorshipPage from './components/MentorshipPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set favicon
  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/png';
      newFavicon.href = image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6;
      document.head.appendChild(newFavicon);
    }
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage />;
      case 'speeches':
        return <SpeechesPage />;
      case 'videos':
        return <VideosPage />;
      case 'articles':
        return <ArticlesPage />;
      case 'professional-bodies':
        return <ProfessionalBodiesPage />;
      case 'awards':
        return <AwardsPage />;
      case 'mentorship':
        return <MentorshipPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <div className="flex items-center gap-3">
              <button onClick={() => navigateToPage('home')} className="text-xl font-bold text-black hover:text-gray-600 transition-colors text-left">
                Dr. Obi Peter Adigwe
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 ml-auto">
              <button onClick={() => navigateToPage('home')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'home' ? 'underline underline-offset-4' : ''}`}>Home</button>
              <button onClick={() => navigateToPage('about')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'about' ? 'underline underline-offset-4' : ''}`}>About</button>
              <button onClick={() => navigateToPage('speeches')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'speeches' ? 'underline underline-offset-4' : ''}`}>Speeches</button>
              <button onClick={() => navigateToPage('videos')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'videos' ? 'underline underline-offset-4' : ''}`}>Videos</button>
              <button onClick={() => navigateToPage('articles')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'articles' ? 'underline underline-offset-4' : ''}`}>Articles</button>
              <button onClick={() => navigateToPage('professional-bodies')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'professional-bodies' ? 'underline underline-offset-4' : ''}`}>Professional Organization</button>
              <button onClick={() => navigateToPage('awards')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'awards' ? 'underline underline-offset-4' : ''}`}>Awards</button>
              <button onClick={() => navigateToPage('mentorship')} className={`text-black hover:text-gray-600 transition-colors ${currentPage === 'mentorship' ? 'underline underline-offset-4' : ''}`}>Mentorship</button>
              <button onClick={() => navigateToPage('contact')} className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors ${currentPage === 'contact' ? 'ring-2 ring-gray-400' : ''}`}>Contact</button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-black hover:text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
              <button onClick={() => navigateToPage('home')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Home</button>
              <button onClick={() => navigateToPage('about')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">About</button>
              <button onClick={() => navigateToPage('speeches')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Speeches</button>
              <button onClick={() => navigateToPage('videos')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Videos</button>
              <button onClick={() => navigateToPage('articles')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Articles</button>
              <button onClick={() => navigateToPage('professional-bodies')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Professional Organization</button>
              <button onClick={() => navigateToPage('awards')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Awards</button>
              <button onClick={() => navigateToPage('mentorship')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Mentorship</button>
              <button onClick={() => navigateToPage('contact')} className="block w-full text-left py-2 text-black hover:text-gray-600 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {renderCurrentPage()}
      </main>



      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl mb-4 text-white">Dr. Obi Peter Adigwe</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Director General, National Institute for Pharmaceutical Research and Development (NIPRD) | 
              Pharmaceutical Policy Expert | Research Leader
            </p>
            
            <div className="border-t border-gray-600 pt-8 text-sm text-gray-400">
              <p>&copy; 2025 Dr. Obi Peter Adigwe. All Rights Reserved.</p>
              <p>Designed by MGSL, +234 704 471 2069</p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}