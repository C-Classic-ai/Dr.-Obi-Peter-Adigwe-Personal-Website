import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OrganizationCardProps {
  image: string;
  title: string;
  role?: string;
  description: string;
  imageAlt?: string;
}

export default function OrganizationCard({ 
  image, 
  title, 
  role, 
  description, 
  imageAlt 
}: OrganizationCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Image Section */}
      <figure className="relative h-48 overflow-hidden bg-gray-50">

        <ImageWithFallback
          src={image}
          alt={imageAlt || title}
          className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-105 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-xs font-medium text-center">
                <div>{title.split(' ').slice(0, 2).join(' ')}</div>
                {title.split(' ').length > 2 && (
                  <div>{title.split(' ').slice(2).join(' ')}</div>
                )}
              </div>
            </div>
          </div>
        )}
      </figure>

      {/* Content Section */}
      <div className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-200 leading-tight text-center">
            {title}
          </h3>
          

          

        </div>
      </div>

      {/* Subtle bottom accent */}
      <div className="h-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 group-hover:from-gray-200 group-hover:via-gray-300 group-hover:to-gray-200 transition-all duration-300" />
    </div>
  );
}