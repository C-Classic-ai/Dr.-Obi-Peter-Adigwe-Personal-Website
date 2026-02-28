import { useState } from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import PageHeader from './PageHeader';

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
}

const videoPlaylist: Video[] = [
  {
    id: '1',
    youtubeId: 'Vdq9vqErWAg',
    title: 'NIPRD Leadership Vision and Strategy',
    category: 'Leadership',
    description: 'Dr. Adigwe discusses his strategic vision for transforming pharmaceutical research and development in Nigeria.',
    thumbnail: 'https://img.youtube.com/vi/Vdq9vqErWAg/maxresdefault.jpg'
  },
  {
    id: '2',
    youtubeId: 'FStxvqzQTmM',
    title: 'Pharmaceutical Research Innovation',
    category: 'Research',
    description: 'Insights into cutting-edge pharmaceutical research and development initiatives at NIPRD.',
    thumbnail: 'https://img.youtube.com/vi/FStxvqzQTmM/maxresdefault.jpg'
  },
  {
    id: '3',
    youtubeId: 'fOln6zGsd1I',
    title: 'Healthcare Policy and Development',
    category: 'Policy',
    description: 'Expert discussion on evidence-based healthcare policy making and pharmaceutical regulations.',
    thumbnail: 'https://img.youtube.com/vi/fOln6zGsd1I/maxresdefault.jpg'
  },
  {
    id: '4',
    youtubeId: 'WCUEjeir4uQ',
    title: 'African Pharmaceutical Manufacturing',
    category: 'Manufacturing',
    description: 'Strategies for building sustainable pharmaceutical manufacturing ecosystems across Africa.',
    thumbnail: 'https://img.youtube.com/vi/WCUEjeir4uQ/maxresdefault.jpg'
  },
  {
    id: '5',
    youtubeId: 'bDoaT1ZzP8c',
    title: 'Traditional Medicine and Modern Healthcare',
    category: 'Innovation',
    description: 'Exploring the integration of traditional medicine with modern pharmaceutical research and development.',
    thumbnail: 'https://img.youtube.com/vi/bDoaT1ZzP8c/maxresdefault.jpg'
  },
  {
    id: '6',
    youtubeId: 'u4IXchaZuhQ',
    title: 'Global Health Initiatives and Collaboration',
    category: 'International',
    description: 'Dr. Adigwe shares insights on international pharmaceutical collaborations and WHO expert committee work.',
    thumbnail: 'https://img.youtube.com/vi/u4IXchaZuhQ/maxresdefault.jpg'
  }
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videoPlaylist[0]);

  return (
    <div>
      <PageHeader title="Videos" />
      
      {/* Main Video Content - YouTube Style Layout */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Main Video Player - Left Side */}
            <div className="lg:w-2/3">
              <div className="relative">
                {/* Video Player Area */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Video Info */}
                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-black mb-2">
                    {selectedVideo.title}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <a 
                      href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Playlist - Right Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-black">Dr. Adigwe's Video Playlist</h2>
                  <span className="text-sm text-gray-600">{videoPlaylist.length} Videos</span>
                </div>
                
                {/* Playlist Items */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {videoPlaylist.map((video, index) => (
                    <div
                      key={video.id}
                      onClick={() => setSelectedVideo(video)}
                      className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                        selectedVideo.id === video.id 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white opacity-80" fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-medium leading-tight mb-1 line-clamp-2 ${
                          selectedVideo.id === video.id ? 'text-blue-700' : 'text-black'
                        }`}>
                          {video.title}
                        </h3>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}