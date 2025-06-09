const ImpactSection = () => {
  const impactStats = [
    {
      number: "50,000+",
      label: "Lives Impacted",
      description: "Individuals who have directly benefited from our programs and initiatives"
    },
    {
      number: "150+", 
      label: "Communities Served",
      description: "Rural and urban communities across multiple regions"
    },
    {
      number: "25+",
      label: "Active Projects",
      description: "Ongoing initiatives in education, healthcare, and environmental sustainability"
    }
  ];

  const approaches = [
    {
      icon: "📋",
      title: "Strategic Planning",
      description: "We work closely with local partners to identify needs and develop targeted solutions that address root causes."
    },
    {
      icon: "🤝", 
      title: "Community Partnership",
      description: "Our approach emphasizes collaboration with local leaders and communities to ensure sustainable impact."
    },
    {
      icon: "📈",
      title: "Measurable Impact", 
      description: "We track progress through data-driven monitoring and evaluation to ensure accountability and effectiveness."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Impact Statistics */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-teal-500">Impact</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
            Through dedication and strategic partnerships, we've created meaningful change across communities worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-3">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-teal-500">Approach</span>
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We believe in sustainable solutions that empower communities and create lasting positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-6">{approach.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {approach.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us in Making a Difference
            </h3>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
              Together, we can create sustainable change and build stronger communities for future generations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors duration-300">
                Get Involved
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 