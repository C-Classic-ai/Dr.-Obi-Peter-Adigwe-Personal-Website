import { User, Mic, FileText, Building2, Award, Users } from 'lucide-react';
import image_07897d220d37fb26859f957d7a1049848f9d2626 from 'figma:asset/07897d220d37fb26859f957d7a1049848f9d2626.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Text Content */}
            <div className="z-10 text-left py-20 lg:py-0">
              <p className="text-4xl md:text-5xl lg:text-6xl text-yellow-500 mb-6 tracking-wide" style={{ fontFamily: 'serif' }}>
                Dr. Obi Peter Adigwe
              </p>

            </div>

            {/* Right Side - Portrait Image */}
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 flex items-center justify-end">
              <div className="relative w-full h-[500px] lg:h-full">
                <img 
                  src={image_07897d220d37fb26859f957d7a1049848f9d2626}
                  alt="Dr. Obi Peter Adigwe"
                  className="w-full h-full object-cover object-center grayscale"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-black">Explore Dr. Adigwe's Work</h2>
            <p className="text-gray-600">Discover his contributions to pharmaceutical research, policy, and education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              onClick={() => onNavigate('about')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <User size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">About</h3>
                <p className="text-gray-300 text-sm">Learn about Dr. Adigwe's background and expertise</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('speeches')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Mic size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">Speeches</h3>
                <p className="text-gray-300 text-sm">Explore his notable speeches and presentations</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('professional-bodies')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Building2 size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">Professional Organization</h3>
                <p className="text-gray-300 text-sm">View his professional affiliations and roles</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('awards')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Award size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">Awards</h3>
                <p className="text-gray-300 text-sm">Discover his achievements and recognitions</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('mentorship')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Users size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">Mentorship</h3>
                <p className="text-gray-300 text-sm">Learn about his mentoring philosophy and approach</p>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('articles')}
              className="bg-black border border-gray-700 rounded-xl p-8 hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <FileText size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl text-white mb-2">Articles</h3>
                <p className="text-gray-300 text-sm">Read his published works and research</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}