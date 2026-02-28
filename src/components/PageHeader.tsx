import image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6 from 'figma:asset/8bb762d8c6f92920e2791ab71b68c0b3aa042bf6.png';

interface PageHeaderProps {
  title: string;
  showImage?: boolean;
}

export default function PageHeader({ title, showImage = true }: PageHeaderProps) {
  return (
    <section className="min-h-[40vh] bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Page Title */}
          <div>
            <h1 className="text-[64px] font-bold text-white">
              {title}
            </h1>
          </div>
          
          {/* Profile Image */}
          {showImage && (
            <div className="hidden md:block">
              <div 
                className="w-72 h-72 lg:w-96 lg:h-96 bg-cover bg-center bg-no-repeat rounded-full"
                style={{ backgroundImage: `url(${image_8bb762d8c6f92920e2791ab71b68c0b3aa042bf6})` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}