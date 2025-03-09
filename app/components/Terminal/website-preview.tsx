"use client"

import type React from "react"

import { useState } from "react"
import { Home, ShoppingBag, User, Menu, X, Heart, ShoppingCart, ArrowRight } from "lucide-react"

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
  const [language, setLanguage] = useState<"de" | "fr" | "it" | "en">("de")

  // Prevent default for all navigation links
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  // Textos multilingües para Suiza
  const texts = {
    de: {
      home: "Startseite",
      products: "Produkte",
      cart: "Warenkorb",
      account: "Konto",
      search: "Produkte suchen...",
      menu: "Menü",
      collection: "Frühlingskollektion 2025",
      collectionDesc:
        "Entdecken Sie die neuesten Trends in Mode und Accessoires mit unserer neuen exklusiven Kollektion.",
      shopNow: "Jetzt einkaufen",
      categories: "Ausgewählte Kategorien",
      clothing: "Kleidung",
      shoes: "Schuhe",
      accessories: "Accessoires",
      jewelry: "Schmuck",
      featuredProducts: "Ausgewählte Produkte",
      flowerDress: "Blumenkleid",
      denimJacket: "Jeansjacke",
      elegantShoes: "Elegante Schuhe",
      leatherBag: "Ledertasche",
      viewAll: "Alle Produkte anzeigen",
      newsletter: "Abonnieren Sie unseren Newsletter",
      newsletterDesc:
        "Erhalten Sie die neuesten Nachrichten, exklusive Angebote und Sonderrabatte direkt in Ihrem Posteingang.",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      subscribe: "Abonnieren",
      links: "Links",
      help: "Hilfe",
      contact: "Kontakt",
      shipping: "Versand",
      returns: "Rücksendungen",
      faq: "FAQ",
      privacy: "Datenschutz",
      terms: "AGB",
      cookies: "Cookies",
      copyright: "© 2025 Alpenmode. Alle Rechte vorbehalten.",
      quality: "Ihr Ziel für exklusive Schweizer Mode und Qualität.",
    },
    fr: {
      home: "Accueil",
      products: "Produits",
      cart: "Panier",
      account: "Compte",
      search: "Rechercher des produits...",
      menu: "Menu",
      collection: "Collection Printemps 2025",
      collectionDesc:
        "Découvrez les dernières tendances en mode et accessoires avec notre nouvelle collection exclusive.",
      shopNow: "Acheter maintenant",
      categories: "Catégories sélectionnées",
      clothing: "Vêtements",
      shoes: "Chaussures",
      accessories: "Accessoires",
      jewelry: "Bijoux",
      featuredProducts: "Produits en vedette",
      flowerDress: "Robe à fleurs",
      denimJacket: "Veste en jean",
      elegantShoes: "Chaussures élégantes",
      leatherBag: "Sac en cuir",
      viewAll: "Voir tous les produits",
      newsletter: "Abonnez-vous à notre newsletter",
      newsletterDesc:
        "Recevez les dernières nouvelles, offres exclusives et remises spéciales directement dans votre boîte de réception.",
      emailPlaceholder: "Votre adresse e-mail",
      subscribe: "S'abonner",
      links: "Liens",
      help: "Aide",
      contact: "Contact",
      shipping: "Expédition",
      returns: "Retours",
      faq: "FAQ",
      privacy: "Confidentialité",
      terms: "CGV",
      cookies: "Cookies",
      copyright: "© 2025 Alpenmode. Tous droits réservés.",
      quality: "Votre destination pour la mode suisse exclusive et de qualité.",
    },
    it: {
      home: "Home",
      products: "Prodotti",
      cart: "Carrello",
      account: "Account",
      search: "Cerca prodotti...",
      menu: "Menu",
      collection: "Collezione Primavera 2025",
      collectionDesc: "Scopri le ultime tendenze in moda e accessori con la nostra nuova collezione esclusiva.",
      shopNow: "Acquista ora",
      categories: "Categorie selezionate",
      clothing: "Abbigliamento",
      shoes: "Scarpe",
      accessories: "Accessori",
      jewelry: "Gioielli",
      featuredProducts: "Prodotti in evidenza",
      flowerDress: "Abito floreale",
      denimJacket: "Giacca di jeans",
      elegantShoes: "Scarpe eleganti",
      leatherBag: "Borsa in pelle",
      viewAll: "Visualizza tutti i prodotti",
      newsletter: "Iscriviti alla nostra newsletter",
      newsletterDesc:
        "Ricevi le ultime notizie, offerte esclusive e sconti speciali direttamente nella tua casella di posta.",
      emailPlaceholder: "Il tuo indirizzo email",
      subscribe: "Iscriviti",
      links: "Collegamenti",
      help: "Aiuto",
      contact: "Contatto",
      shipping: "Spedizione",
      returns: "Resi",
      faq: "FAQ",
      privacy: "Privacy",
      terms: "Termini",
      cookies: "Cookie",
      copyright: "© 2025 Alpenmode. Tutti i diritti riservati.",
      quality: "La tua destinazione per moda svizzera esclusiva e di qualità.",
    },
    en: {
      home: "Home",
      products: "Products",
      cart: "Cart",
      account: "Account",
      search: "Search products...",
      menu: "Menu",
      collection: "Spring Collection 2025",
      collectionDesc: "Discover the latest trends in fashion and accessories with our new exclusive collection.",
      shopNow: "Shop Now",
      categories: "Featured Categories",
      clothing: "Clothing",
      shoes: "Shoes",
      accessories: "Accessories",
      jewelry: "Jewelry",
      featuredProducts: "Featured Products",
      flowerDress: "Floral Dress",
      denimJacket: "Denim Jacket",
      elegantShoes: "Elegant Shoes",
      leatherBag: "Leather Bag",
      viewAll: "View All Products",
      newsletter: "Subscribe to our Newsletter",
      newsletterDesc: "Receive the latest news, exclusive offers and special discounts directly to your inbox.",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      links: "Links",
      help: "Help",
      contact: "Contact",
      shipping: "Shipping",
      returns: "Returns",
      faq: "FAQ",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      copyright: "© 2025 Alpenmode. All rights reserved.",
      quality: "Your destination for exclusive Swiss fashion and quality.",
    },
  }

  const t = texts[language]

  return (
    <div className="bg-white h-full overflow-auto">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-indigo-600 font-bold text-xl">A</div>
            </div>
            <h1 className="text-xl font-bold">Alpenmode</h1>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 mx-auto">
            <button
              onClick={() => setLanguage("de")}
              className={`px-2 py-1 rounded-md text-xs font-medium ${language === "de" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 rounded-md text-xs font-medium ${language === "fr" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("it")}
              className={`px-2 py-1 rounded-md text-xs font-medium ${language === "it" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
            >
              IT
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-md text-xs font-medium ${language === "en" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
            >
              EN
            </button>
          </div>

          {/* Desktop Navigation - Non-clickable */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <Home size={16} />
              <span>{t.home}</span>
            </a>
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <ShoppingBag size={16} />
              <span>{t.products}</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 opacity-70 cursor-not-allowed relative"
              onClick={handleLinkClick}
            >
              <ShoppingCart size={16} />
              <span>{t.cart}</span>
              <span className="absolute -top-2 -right-2 bg-white text-indigo-600 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </a>
            <a href="#" className="flex items-center gap-1 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
              <User size={16} />
              <span>{t.account}</span>
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
          <h2 className="text-white text-lg font-bold">{t.menu}</h2>
          {/* Close button - Now clickable */}
          <button className="text-white hover:text-white/80 transition-colors" onClick={toggleMobileMenu}>
            <X size={20} />
          </button>
        </div>

        {/* Mobile Language Selector */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setLanguage("de")}
            className={`px-2 py-1 rounded-md text-xs font-medium ${language === "de" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
          >
            DE
          </button>
          <button
            onClick={() => setLanguage("fr")}
            className={`px-2 py-1 rounded-md text-xs font-medium ${language === "fr" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage("it")}
            className={`px-2 py-1 rounded-md text-xs font-medium ${language === "it" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
          >
            IT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 rounded-md text-xs font-medium ${language === "en" ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
          >
            EN
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <Home size={18} />
            <span>{t.home}</span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <ShoppingBag size={18} />
            <span>{t.products}</span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2 relative"
            onClick={handleLinkClick}
          >
            <ShoppingCart size={18} />
            <span>{t.cart}</span>
            <span className="absolute top-0 -right-2 bg-white text-indigo-600 text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </a>
          <a
            href="#"
            className="text-white opacity-70 cursor-not-allowed flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <User size={18} />
            <span>{t.account}</span>
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop')",
          }}
        ></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center p-4 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.collection}</h2>
          <p className="text-lg md:text-xl mb-6 max-w-lg">{t.collectionDesc}</p>
          <button
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold w-fit flex items-center gap-2 opacity-70 cursor-not-allowed"
            disabled
          >
            {t.shopNow}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">{t.categories}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: t.clothing,
              image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: t.shoes,
              image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: t.accessories,
              image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
            },
            {
              name: t.jewelry,
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
          <h2 className="text-2xl font-bold mb-8 text-center">{t.featuredProducts}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: t.flowerDress,
                price: "CHF 89.90",
                image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: t.denimJacket,
                price: "CHF 129.90",
                image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: t.elegantShoes,
                price: "CHF 159.90",
                image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=300&auto=format&fit=crop",
              },
              {
                name: t.leatherBag,
                price: "CHF 199.90",
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
              {t.viewAll}
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
              "url('https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop')",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl font-bold mb-4">{t.newsletter}</h2>
          <p className="mb-6 max-w-lg mx-auto">{t.newsletterDesc}</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="px-4 py-2 rounded-l-full rounded-r-full sm:rounded-r-none flex-grow text-gray-800 cursor-not-allowed"
              disabled
            />
            <button
              className="bg-white text-indigo-600 px-6 py-2 rounded-r-full rounded-l-full sm:rounded-l-none font-semibold opacity-70 cursor-not-allowed"
              disabled
            >
              {t.subscribe}
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
                  <div className="text-indigo-600 font-bold text-xl">A</div>
                </div>
                <h3 className="text-xl font-bold">Alpenmode</h3>
              </div>
              <p className="text-gray-400">{t.quality}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.links}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.home}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.products}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.categories}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.newsletter}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.help}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.shipping}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.returns}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                    {t.faq}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
              <address className="text-gray-400 not-italic">
                <p>Bahnhofstrasse 42</p>
                <p>8001 Zürich, Schweiz</p>
                <p className="mt-2">info@alpenmode.ch</p>
                <p>+41 44 123 45 67</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{t.copyright}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                {t.privacy}
              </a>
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                {t.terms}
              </a>
              <a href="#" className="text-gray-400 opacity-70 cursor-not-allowed" onClick={handleLinkClick}>
                {t.cookies}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

