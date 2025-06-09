import { Button } from "./ui/shadcn-button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Creating <span className="text-teal-500">Lasting Change</span>
          <br />
          <span className="text-teal-500">Together</span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us in transforming communities through innovative solutions, sustainable development, and meaningful partnerships that create lasting impact.
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="default"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-base font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 