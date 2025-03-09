"use client"

import type React from "react"

import { useState } from "react"
import { Home, ShoppingBag, User, Menu, X, Search, Heart, ShoppingCart, ArrowRight } from "lucide-react"

// Implementación local de la función cn para combinar clases condicionales
function cn(...inputs: any[]): string {
  return inputs
    .flatMap((input) => {
      if (typeof input === "string") return input
      if (!input) return ""
      if (typeof input !== "object") return ""

      return Object.entries(input)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)
    })
    .filter(Boolean)
    .join(" ")
}

export function WebsitePreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent default for all navigation links
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className="bg-white h-full overflow-auto">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-indigo-600 font-bold text-xl">E</div>
            </div>
            <h1 className="text-xl font-bold">Eleganz</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white/20 rounded-full px-3 py-1 w-1/3">
            <Search size={16} className="text-white/70" />
            <input
              type="text"
              placeholder="Produkte suchen..."
              className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full px-2"
              disabled
            />
          </div>

          {/* Desktop Navigation - Non-clickable */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <Home size={16} />
              <span>Startseite</span>
            </a>
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <ShoppingBag size={16} />
              <span>Produkte</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 opacity-70 cursor-not-allowed relative"
              onClick={handleLinkClick}
            >
              <ShoppingCart size={16} />
              <span>Warenkorb</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </a>
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <User size={16} />
              <span>Konto</span>
            </a>
          </nav>

          {/* Mobile Menu Button - Now clickable */}
          <button
            className="md:hidden text-white hover:text-white/80 transition-colors relative z-20"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileMenu}></div>}

      {/* Mobile Menu as Popup/Modal - Positioned lower */}
      <div
        className={cn(
          "fixed top-14 right-4 w-64 h-auto max-h-[70vh] bg-gradient-to-r from-purple-600 to-indigo-600 z-50 flex flex-col p-4 transition-all duration-300 rounded-lg shadow-xl overflow-auto md:hidden",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-bold">Menü</h2>
          {/* Close button - Now clickable */}
          <button className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>
            <X size={20} />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="flex items-center bg-white/20 rounded-full px-3 py-2 mb-4">
          <Search size={16} className="text-white/70" />
          <input
            type="text"
            placeholder="Produkte suchen..."
            className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full px-2 text-sm"
            disabled
          />
        </div>

        <nav className="flex flex-col gap-3">
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <Home size={18} />
            <span>Startseite</span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <ShoppingBag size={18} />
            <span>Produkte</span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2 relative"
            onClick={handleLinkClick}
          >
            <ShoppingCart size={18} />
            <span>Warenkorb</span>
            <span className="absolute top-0 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <User size={18} />
            <span>Konto</span>
          </a>
        </nav>
      </div>

      {/* El resto del componente permanece igual */}
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop')",
          }}
        ></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center p-4 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frühjahrskollektion 2025</h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            Entdecken Sie die neuesten Trends in Mode und Accessoires mit unserer neuen exklusiven Kollektion.
          </p>
          <button
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold w-fit flex items-center gap-2 opacity-70 cursor-not-allowed"
            disabled
          >
            Jetzt einkaufen
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Ausgewählte Kategorien</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Kleidung",
              image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: "Schuhe",
              image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: "Accessoires",
              image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: "Schmuck",
              image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=300&auto=format&fit=crop",
            },
          ].map((category, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden h-40 cursor-not-allowed opacity-90">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white font-bold text-xl">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Ausgewählte Produkte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Blumenkleid",
                price: "€49.99",
                image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Jeansjacke",
                price: "€79.99",
                image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Elegante Schuhe",
                price: "€89.99",
                image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: "Ledertasche",
                price: "€129.99",
                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&auto=format&fit=crop",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full text-red-500 opacity-70 cursor-not-allowed"
                    disabled
                  >
                    <Heart size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-600">{product.price}</span>
                    <button
                      className="bg-indigo-600 text-white p-2 rounded-full opacity-70 cursor-not-allowed"
                      disabled
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              className="border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-full font-semibold opacity-70 cursor-not-allowed"
              disabled
            >
              Alle Produkte anzeigen
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter with background image */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop')",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Abonnieren Sie unseren Newsletter</h2>
          <p className="mb-6 max-w-lg mx-auto">
            Erhalten Sie die neuesten Nachrichten, exklusive Angebote und Sonderrabatte direkt in Ihrem Posteingang.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="px-4 py-2 rounded-l-full rounded-r-full sm:rounded-r-none flex-grow text-gray-800 cursor-not-allowed"
              disabled
            />
            <button
              className="bg-white text-indigo-600 px-6 py-2 rounded-r-full rounded-l-full sm:rounded-l-none font-semibold opacity-70 cursor-not-allowed"
              disabled
            >
              Abonnieren
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                  <div className="text-indigo-600 font-bold text-xl">E</div>
                </div>
                <h3 className="text-xl font-bold">Eleganz</h3>
              </div>
              <p className="text-gray-400">Ihr Ziel für exklusive Mode und Qualität.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Startseite
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Produkte
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Kategorien
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Angebote
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Hilfe</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Versand
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    Rücksendungen
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontakt</h4>
              <address className="text-gray-400 not-italic">
                <p>Hauptstraße 123</p>
                <p>10115 Berlin, Deutschland</p>
                <p className="mt-2">info@eleganz.com</p>
                <p>+49 30 1234567</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Eleganz. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                AGB
              </a>
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

