import React from 'react';

const MainContent = () => {
  return (
    <main className="min-h-[70vh] bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#4D7298] mb-6">
          Welcome to Aashraya
        </h1>
        <p className="text-lg text-[#77A6B6] mb-8 max-w-3xl">
          Aashraya is dedicated to creating positive change in our community through compassion, 
          dedication, and collective action. We believe in the power of unity and the impact 
          that each individual can make when we work together.
        </p>
        
        {/* Scrollable area for testing */}
        <div className="h-[1000px] bg-[#9DC3C2] rounded-lg shadow-md p-8" style={{ boxShadow: '0 4px 8px rgba(77,114,152,0.2)' }}>
          <h2 className="text-2xl font-semibold text-[#4D7298] mb-4">
            Our Mission
          </h2>
          <p className="text-[#77A6B6] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-[#77A6B6] mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-[#77A6B6]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent; 