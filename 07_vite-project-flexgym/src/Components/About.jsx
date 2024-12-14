// src/components/About.jsx
function About() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 leading-7">
          Flex GYM is a state-of-the-art gym facility offering the best equipment and professional trainers to help you achieve your fitness goals. Our mission is to promote health and wellness through personalized programs and community engagement.
        </p>
        {/* Image Section */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/16513604/pexels-photo-16513604/free-photo-of-dumbbells-fr-body-building.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym Accessory 1"
              className="w-100 h-100 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-md text-gray-800 text-sm hidden group-hover:block">
              Accessory 1
            </p>
          </div>
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym Accessory 2"
              className="w-100 h-100 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-md text-gray-800 text-sm hidden group-hover:block">
              Accessory 2
            </p>
          </div>
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/841125/pexels-photo-841125.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym Accessory 3"
              className="w-150 h-150 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 px-2 py-1 rounded-md text-gray-800 text-sm hidden group-hover:block">
              Accessory 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
