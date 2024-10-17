import { useState } from "react";

export default function ContactModule() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const mailtoLink = `mailto:info@lweb.ch?subject=Kontakt%20von%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANachricht:%20${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full py-24 bg-gray-900 text-white pb-40 pt-40">
      <div className="max-w-screen-md mx-auto px-4 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Get in Touch 👋
        </h2>
        <p className="text-lg text-blue-200 mb-12">
          Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Melden Sie sich gerne bei uns!
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-blue-200">
              Vor- und Nachname
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Geben Sie Ihren Namen ein"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-blue-200">
              Email Addresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Geben Sie Ihre E-Mail-Adresse ein"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-blue-200">
              Ihre Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Schreiben Sie hier Ihre Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transition-all"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
