// src/components/Services.jsx
function Services() {
    return (
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Personal Training', desc: 'Work one-on-one with expert trainers.' },
            { title: 'Group Classes', desc: 'Join exciting group fitness sessions.' },
            { title: 'Nutritional Guidance', desc: 'Customized diet plans for optimal results.' },
          ].map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Services;
  
