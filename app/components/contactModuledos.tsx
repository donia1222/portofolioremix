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
    <section className="  bg-gray-900 text-white  ">

      {/* Footer Section */}
      <footer className="mt-16 bg-gray-800 py-8">
  <div className="max-w-screen-md mx-auto px-4 md:px-12 lg:px-24 text-center text-white space-y-4">
    <div>
      <h3 className="text-2xl font-semibold">LWEB Schweiz</h3>
      <p className="text-blue-200">Kontaktinformationen</p>
    </div>
    <div className="space-y-2">
      <p>
        <strong>Adresse: </strong>Bahnhofstrasse 9, 9475 Sevelen, Schweiz 🇨🇭
      </p>
      <p>
        <strong>Telefon: </strong>
        <a href="tel:+41817501911" className="text-blue-400 hover:text-blue-600">
          081 750 1911
        </a>
      </p>
      <p>
        <strong>E-Mail: </strong>
        <a href="mailto:info@lweb.ch" className="text-blue-400 hover:text-blue-600">
          info@lweb.ch
        </a>
      </p>
    </div>
    {/* Sección adicional para mencionar Remix */}
    <div className="mt-8">
      <p className="text-sl text-blue-200">Github<span className="font-semibold"></span></p>
      <a href="https://github.com/donia1222" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" 
          alt="Remix Logo"
          className="mx-auto mt-2 w-16 h-16"
        />
      </a>
    </div>
  </div>
</footer>

    </section>
  );
}
