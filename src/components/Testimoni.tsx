import type React from "react";

const Testimoni: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
          What Coffee Lovers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Sarah J." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-amber-800">Sarah J.</h4>
                <p className="text-sm text-amber-600">Coffee Connoisseur</p>
              </div>
            </div>
            <div className="text-amber-900 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">★</span>
              ))}
            </div>
            <p className="text-gray-700 italic">
              "The Ethiopian Yirgacheffe here is divine! Bright acidity with floral notes that dance on your palate. 
              It's my daily morning ritual now. Best coffee I've had in years!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Michael T." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-amber-800">Michael T.</h4>
                <p className="text-sm text-amber-600">Espresso Enthusiast</p>
              </div>
            </div>
            <div className="text-amber-900 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">★</span>
              ))}
            </div>
            <p className="text-gray-700 italic">
              "As a barista for 10 years, I'm picky about my espresso. Their signature blend has the perfect 
              balance - rich crema, chocolatey undertones, and a smooth finish. Absolute perfection in a cup!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                  alt="Emma L." 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-amber-800">Emma L.</h4>
                <p className="text-sm text-amber-600">Cold Brew Lover</p>
              </div>
            </div>
            <div className="text-amber-900 mb-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-amber-400">★</span>
              ))}
              <span className="text-amber-300">★</span>
            </div>
            <p className="text-gray-700 italic">
              "Their cold brew is a game-changer! Smooth, not bitter, with subtle caramel notes. I love that they 
              nitro-brew it for that creamy texture. The only reason I didn't give 5 stars is because I wish the 
              servings were bigger!"
            </p>
          </div>
        </div>

        {/* Decorative coffee elements */}
        <div className="flex justify-center mt-12 space-x-4">
          <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
          <div className="w-8 h-8 bg-amber-300 rounded-full"></div>
          <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;