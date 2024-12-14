// src/components/Contact.jsx
function Contact() {
    return (
      <div className="bg-gray-900 text-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            rows="4"
          ></textarea>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
            Send
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  
