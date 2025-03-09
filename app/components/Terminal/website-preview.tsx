"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Home,
  ShoppingBag,
  User,
  Menu,
  X,
  Heart,
  ShoppingCart,
  ArrowRight,
  Search,
  Star,
  StarHalf,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"

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

// Componente de estrellas de valoración
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf size={16} className="text-yellow-400 fill-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      ))}
    </div>
  )
}

// Componente de contador animado
const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const totalFrames = Math.min(end, duration * 60)
    const counter = setInterval(() => {
      start += 1
      const progress = start / totalFrames
      setCount(Math.floor(progress * end))

      if (start === totalFrames) {
        clearInterval(counter)
        setCount(end)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [value, duration, isInView])

  return <span ref={nodeRef}>{count.toLocaleString()}</span>
}

export function WebsitePreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"de" | "fr" | "it" | "en">("de")
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const [showNewsletter, setShowNewsletter] = useState(false)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Show newsletter popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Prevent default for all navigation links
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  // Toggle search bar
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev)
  }

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Close newsletter popup
  const closeNewsletter = () => {
    setShowNewsletter(false)
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
      testimonials: "Kundenbewertungen",
      testimonialDesc: "Was unsere Kunden über uns sagen",
      stats: "Alpenmode in Zahlen",
      happyCustomers: "Zufriedene Kunden",

      countries: "Länder",
      storeLocations: "Geschäfte",
      trending: "Trendprodukte",
      trendingDesc: "Entdecken Sie unsere beliebtesten Produkte",
      closeNewsletter: "Schließen",
      getDiscount: "Erhalten Sie 10% Rabatt auf Ihre erste Bestellung",
      sale: "SALE",
      new: "NEU",
      outOfStock: "Ausverkauft",
      addToCart: "In den Warenkorb",
      quickView: "Schnellansicht",
      filter: "Filter",
      sort: "Sortieren",
      priceRange: "Preisbereich",
      color: "Farbe",
      size: "Größe",
      brand: "Marke",
      apply: "Anwenden",
      reset: "Zurücksetzen",
      followUs: "Folgen Sie uns",
      ourInstagram: "Unser Instagram",
      viewInstagram: "Instagram ansehen",
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
      testimonials: "Témoignages clients",
      testimonialDesc: "Ce que nos clients disent de nous",
      stats: "Alpenmode en chiffres",
      happyCustomers: "Clients satisfaits",

      countries: "Pays",
      storeLocations: "Magasins",
      trending: "Produits tendance",
      trendingDesc: "Découvrez nos produits les plus populaires",
      closeNewsletter: "Fermer",
      getDiscount: "Obtenez 10% de réduction sur votre première commande",
      sale: "SOLDES",
      new: "NOUVEAU",
      outOfStock: "Épuisé",
      addToCart: "Ajouter au panier",
      quickView: "Aperçu rapide",
      filter: "Filtrer",
      sort: "Trier",
      priceRange: "Gamme de prix",
      color: "Couleur",
      size: "Taille",
      brand: "Marque",
      apply: "Appliquer",
      reset: "Réinitialiser",
      followUs: "Suivez-nous",
      ourInstagram: "Notre Instagram",
      viewInstagram: "Voir Instagram",
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
      testimonials: "Testimonianze dei clienti",
      testimonialDesc: "Cosa dicono i nostri clienti di noi",
      stats: "Alpenmode in numeri",
      happyCustomers: "Clienti soddisfatti",

      countries: "Paesi",
      storeLocations: "Negozi",
      trending: "Prodotti di tendenza",
      trendingDesc: "Scopri i nostri prodotti più popolari",
      closeNewsletter: "Chiudi",
      getDiscount: "Ottieni il 10% di sconto sul tuo primo ordine",
      sale: "SALDI",
      new: "NUOVO",
      outOfStock: "Esaurito",
      addToCart: "Aggiungi al carrello",
      quickView: "Vista rapida",
      filter: "Filtra",
      sort: "Ordina",
      priceRange: "Fascia di prezzo",
      color: "Colore",
      size: "Taglia",
      brand: "Marca",
      apply: "Applica",
      reset: "Reimposta",
      followUs: "Seguici",
      ourInstagram: "Il nostro Instagram",
      viewInstagram: "Vedi Instagram",
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
      testimonials: "Customer Testimonials",
      testimonialDesc: "What our customers say about us",
      stats: "Alpenmode in Numbers",
      happyCustomers: "Happy Customers",

      countries: "Countries",
      storeLocations: "Store Locations",
      trending: "Trending Products",
      trendingDesc: "Discover our most popular products",
      closeNewsletter: "Close",
      getDiscount: "Get 10% off your first order",
      sale: "SALE",
      new: "NEW",
      outOfStock: "Out of Stock",
      addToCart: "Add to Cart",
      quickView: "Quick View",
      filter: "Filter",
      sort: "Sort",
      priceRange: "Price Range",
      color: "Color",
      size: "Size",
      brand: "Brand",
      apply: "Apply",
      reset: "Reset",
      followUs: "Follow Us",
      ourInstagram: "Our Instagram",
      viewInstagram: "View Instagram",
    },
  }

  const t = texts[language]

  // Datos de testimonios
  const testimonials = [
    {
      id: 1,
      name: "Sophie Müller",
      location: "Zürich, CH",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text:
        language === "de"
          ? "Die Qualität der Kleidung ist außergewöhnlich. Ich habe mehrere Stücke gekauft und sie halten auch nach vielen Wäschen ihre Form und Farbe. Der Kundenservice ist ebenfalls erstklassig!"
          : language === "fr"
            ? "La qualité des vêtements est exceptionnelle. J'ai acheté plusieurs pièces et elles conservent leur forme et leur couleur même après de nombreux lavages. Le service client est également de premier ordre !"
            : language === "it"
              ? "La qualità dei vestiti è eccezionale. Ho acquistato diversi capi e mantengono la loro forma e colore anche dopo numerosi lavaggi. Anche il servizio clienti è di prim'ordine!"
              : "The quality of the clothing is exceptional. I've purchased several pieces and they maintain their shape and color even after many washes. The customer service is also first-class!",
    },
    {
      id: 2,
      name: "Marc Dubois",
      location: "Genève, CH",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rating: 4.5,
      text:
        language === "de"
          ? "Alpenmode bietet eine perfekte Mischung aus Stil und Funktionalität. Ihre Winterkollektion ist besonders beeindruckend - warm, stilvoll und langlebig."
          : language === "fr"
            ? "Alpenmode offre un mélange parfait de style et de fonctionnalité. Leur collection d'hiver est particulièrement impressionnante - chaude, élégante et durable."
            : language === "it"
              ? "Alpenmode offre un perfetto mix di stile e funzionalità. La loro collezione invernale è particolarmente impressionante - calda, elegante e durevole."
              : "Alpenmode offers a perfect blend of style and functionality. Their winter collection is particularly impressive - warm, stylish, and durable.",
    },
    {
      id: 3,
      name: "Elena Rossi",
      location: "Lugano, CH",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text:
        language === "de"
          ? "Die Lieferung war schnell und die Verpackung umweltfreundlich. Das Kleid, das ich gekauft habe, ist genau wie auf den Bildern - elegant und perfekt geschnitten. Werde definitiv wieder hier einkaufen!"
          : language === "fr"
            ? "La livraison était rapide et l'emballage respectueux de l'environnement. La robe que j'ai achetée est exactement comme sur les photos - élégante et parfaitement coupée. Je reviendrai certainement acheter ici !"
            : language === "it"
              ? "La consegna è stata rapida e l'imballaggio ecologico. Il vestito che ho comprato è esattamente come nelle foto - elegante e tagliato perfettamente. Tornerò sicuramente a fare acquisti qui!"
              : "Delivery was fast and the packaging was eco-friendly. The dress I bought is exactly as in the pictures - elegant and perfectly cut. Will definitely shop here again!",
    },
  ]

  // Datos de productos con etiquetas
  const products = [
    {
      id: 1,
      name: t.flowerDress,
      price: "CHF 89.90",
      image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=300&auto=format&fit=crop",
      tag: "new",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: t.denimJacket,
      price: "CHF 129.90",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=300&auto=format&fit=crop",
      tag: "sale",
      oldPrice: "CHF 159.90",
      rating: 4.6,
      reviews: 98,
    },
    {
      id: 3,
      name: t.elegantShoes,
      price: "CHF 159.90",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=300&auto=format&fit=crop",
      rating: 4.9,
      reviews: 56,
    },
    {
      id: 4,
      name: t.leatherBag,
      price: "CHF 199.90",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&auto=format&fit=crop",
      tag: "outOfStock",
      rating: 4.7,
      reviews: 87,
    },
  ]

  // Datos de Instagram
  const instagramPosts = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=200&auto=format&fit=crop",
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="bg-white h-full overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sticky top-0 z-30 transition-all duration-300",
          scrolled ? "shadow-lg" : "",
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-indigo-600 font-bold text-xl">A</div>
            </div>
            <h1 className="text-xl font-bold">Alpenmode</h1>
          </motion.div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 mx-auto">
            {["de", "fr", "it", "en"].map((lang) => (
              <motion.button
                key={lang}
                onClick={() => setLanguage(lang as "de" | "fr" | "it" | "en")}
                className={`px-2 py-1 rounded-md text-xs font-medium ${language === lang ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <motion.a
              href="#"
              className="flex items-center gap-1 hover:text-white/80 transition-colors cursor-pointer"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={16} />
              <span>{t.home}</span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-1 hover:text-white/80 transition-colors cursor-pointer"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={16} />
              <span>{t.products}</span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-1 hover:text-white/80 transition-colors cursor-pointer relative"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={16} />
              <span>{t.cart}</span>
              <motion.span
                className="absolute -top-2 -right-2 bg-white text-indigo-600 text-xs rounded-full h-4 w-4 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
              >
                3
              </motion.span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-1 hover:text-white/80 transition-colors cursor-pointer"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={16} />
              <span>{t.account}</span>
            </motion.a>
            <motion.button
              onClick={toggleSearch}
              className="text-white hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={16} />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-white/80 transition-colors relative z-20"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>

        {/* Search Bar - Animated */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto flex items-center">
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 text-white p-2 rounded-r-md">
                  <Search size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu as Popup/Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-14 right-4 w-64 h-auto max-h-[70vh] bg-gradient-to-r from-purple-600 to-indigo-600 z-50 flex flex-col p-4 rounded-lg shadow-xl overflow-auto md:hidden"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg font-bold">{t.menu}</h2>
              <motion.button
                className="text-white hover:text-white/80 transition-colors"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Mobile Language Selector */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {["de", "fr", "it", "en"].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setLanguage(lang as "de" | "fr" | "it" | "en")}
                  className={`px-2 py-1 rounded-md text-xs font-medium ${language === lang ? "bg-white text-indigo-600" : "bg-transparent text-white"}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang.toUpperCase()}
                </motion.button>
              ))}
            </div>

            <motion.nav className="flex flex-col gap-3" variants={staggerContainer} initial="hidden" animate="visible">
              {[
                { icon: <Home size={18} />, text: t.home },
                { icon: <ShoppingBag size={18} />, text: t.products },
                { icon: <ShoppingCart size={18} />, text: t.cart, badge: 3 },
                { icon: <User size={18} />, text: t.account },
                { icon: <Search size={18} />, text: t.search },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-white/80 transition-colors flex items-center gap-2 relative"
                  onClick={handleLinkClick}
                  variants={slideUp}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                  {item.badge && (
                    <span className="absolute top-0 -right-2 bg-white text-indigo-600 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[500px] overflow-hidden" ref={heroRef}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"
          style={{ opacity: heroOpacity }}
        ></motion.div>
        <motion.div className="absolute inset-0 overflow-hidden" style={{ scale: heroScale }}>
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
            <source
              src="0_Woman_Skateboarding_1280x720.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center p-4 text-white">
          <motion.h2 className="text-3xl md:text-6xl font-bold mb-4" style={{ y: heroTextY }}>
            {t.collection}
          </motion.h2>
          <motion.p
            className="text-base md:text-xl mb-6 max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t.collectionDesc}
          </motion.p>
          <motion.button
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold w-fit flex items-center gap-2 hover:bg-indigo-50 transition-colors"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.shopNow}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-indigo-800"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t.stats}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {[
              {
                value: 25000,
                label: t.happyCustomers,
                icon: <User className="mx-auto mb-2 text-indigo-600" size={24} />,
              },
              {
                value: 1500,
                label: t.products,
                icon: <ShoppingBag className="mx-auto mb-2 text-indigo-600" size={24} />,
              },
              { value: 15, label: t.countries, icon: <MapPin className="mx-auto mb-2 text-indigo-600" size={24} /> },
              { value: 32, label: t.storeLocations, icon: <Home className="mx-auto mb-2 text-indigo-600" size={24} /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-3 md:p-6 bg-white rounded-xl shadow-md"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {stat.icon}
                <h3 className="text-xl md:text-3xl font-bold text-indigo-600 mb-1 md:mb-2">
                  <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.categories}
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
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
            <motion.div
              key={index}
              className="group relative rounded-lg overflow-hidden h-40 md:h-60 cursor-pointer"
              variants={slideUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 z-10"></div>
              <motion.img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.h3
                  className="text-white font-bold text-lg md:text-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {category.name}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t.featuredProducts}
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                variants={slideUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-56 md:h-72 overflow-hidden group">
                  <motion.img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Product tag */}
                  {product.tag && (
                    <div
                      className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                        product.tag === "sale" ? "bg-red-500" : product.tag === "new" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {product.tag === "sale" ? t.sale : product.tag === "new" ? t.new : t.outOfStock}
                    </div>
                  )}

                  {/* Quick actions */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                    <span className="text-sm font-medium">{t.quickView}</span>
                    <motion.button
                      className="bg-white text-indigo-600 p-1.5 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Search size={16} />
                    </motion.button>
                  </div>

                  <motion.button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart size={18} />
                  </motion.button>
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-1 mb-1">
                    <RatingStars rating={product.rating} />
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm mr-2">{product.oldPrice}</span>
                      )}
                      <span className="font-bold text-indigo-600 text-base md:text-lg">{product.price}</span>
                    </div>
                    <motion.button
                      className={`${product.tag === "outOfStock" ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"} text-white p-2 rounded-full transition-colors`}
                      whileHover={product.tag !== "outOfStock" ? { scale: 1.1, rotate: 5 } : {}}
                      whileTap={product.tag !== "outOfStock" ? { scale: 0.9 } : {}}
                      disabled={product.tag === "outOfStock"}
                    >
                      <ShoppingCart size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8 md:mt-12">
            <motion.button
              className="border-2 border-indigo-600 text-indigo-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.viewAll}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.testimonials}</h2>
            <p className="text-gray-600">{t.testimonialDesc}</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIndex}
                className="bg-white p-4 md:p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonials[activeTestimonialIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonialIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-2 flex justify-center md:justify-start">
                      <RatingStars rating={testimonials[activeTestimonialIndex].rating} />
                    </div>
                    <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                      "{testimonials[activeTestimonialIndex].text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-indigo-600">{testimonials[activeTestimonialIndex].name}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[activeTestimonialIndex].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonialIndex ? "bg-indigo-600" : "bg-gray-300"}`}
                  onClick={() => setActiveTestimonialIndex(index)}
                />
              ))}
            </div>

            <motion.button
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-indigo-600"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-indigo-600"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.ourInstagram}</h2>
            <p className="text-gray-600">{t.followUs}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {instagramPosts.map((post, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group"
                variants={scaleUp}
                whileHover={{ scale: 1.03 }}
              >
                <img src={post || "/placeholder.svg"} alt="Instagram post" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-600/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-6 md:mt-8">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              {t.viewInstagram}
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Newsletter with background image */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 z-0"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.newsletter}
          </motion.h2>
          <motion.p
            className="mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.newsletterDesc}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              className="px-4 py-2 md:py-3 rounded-l-full rounded-r-full sm:rounded-r-none flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.button
              className="bg-white text-indigo-600 px-4 md:px-6 py-2 md:py-3 rounded-r-full rounded-l-full sm:rounded-l-none font-semibold hover:bg-indigo-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.subscribe}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={slideUp}>
              <motion.div className="flex items-center gap-2 mb-4" whileHover={{ x: 5 }}>
                <div className="h-8 w-8 md:h-10 md:w-10 bg-white rounded-full flex items-center justify-center">
                  <div className="text-indigo-600 font-bold text-lg md:text-xl">A</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Alpenmode</h3>
              </motion.div>
              <p className="text-gray-400 text-sm md:text-base">{t.quality}</p>

              <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
                {[
                  <Facebook key="fb" size={18} />,
                  <Instagram key="ig" size={18} />,
                  <Twitter key="tw" size={18} />,
                  <Linkedin key="ln" size={18} />,
                ].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-gray-800 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"
                    onClick={handleLinkClick}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">{t.links}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {[t.home, t.products, t.categories, t.newsletter].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideUp}>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">{t.help}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {[t.contact, t.shipping, t.returns, t.faq].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={handleLinkClick}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideUp}>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">{t.contact}</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex items-start gap-2 md:gap-3">
                  <MapPin size={16} className="text-indigo-400 flex-shrink-0 mt-1" />
                  <span>
                    Bahnhofstrasse 42
                    <br />
                    8001 Zürich, Schweiz
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                  <span>info@alpenmode.ch</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                  <span>+41 44 123 45 67</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-6 md:mt-10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400 text-sm md:text-base">{t.copyright}</p>
            <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 text-sm md:text-base">
              {[t.privacy, t.terms, t.cookies].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

