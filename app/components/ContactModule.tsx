// components/ContactModule.tsx
export default function ContactModule() {
    return (
      <section className="w-full py-24 bg-gray-900 text-white  pb-40  pt-40">
        <div className="max-w-screen-md mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch 👋
          </h2>
          <p className="text-lg text-blue-200 mb-12">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
  
          <form className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-blue-200">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-blue-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-blue-200">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Write your message here"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  