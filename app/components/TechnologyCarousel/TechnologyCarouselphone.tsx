"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Calendar,
  MapPin,
  Clock,
  Star,
  Menu,
  Activity,
  CreditCard,
  Wallet,
  PiggyBank,
  Music,
  Code,
  Utensils,
  ShoppingCart,
  Sparkles,
  Zap,
  ArrowRight,
  Heart,
  Award,
  Smartphone,
  Shirt,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Event {
  id: number
  name: string
  date: string
  time: string
  location: string
  image: string
  icon: React.ElementType
  color: string
}

interface MenuItem {
  id: number
  name: string
  price: string
  description: string
  image: string
  rating: number
}

interface Product {
  id: number
  name: string
  price: string
  image: string
  discount?: string
  category: string
  colors: string[]
}

interface WorkoutSession {
  id: number
  name: string
  duration: string
  caloriesBurned: number
  image: string
}

interface SavingsGoal {
  id: number
  name: string
  currentAmount: number
  targetAmount: number
  icon: React.ElementType
  color: string
}

const events: Event[] = [
  {
    id: 1,
    name: "Sommer Musikfestival",
    date: "15 JUL",
    time: "14:00 - 22:00 Uhr",
    location: "Zentralpark",
    image: "/placeholder-8np22.png",
    icon: Music,
    color: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    id: 2,
    name: "Tech-Konferenz 2024",
    date: "22 AUG",
    time: "09:00 - 17:00 Uhr",
    location: "Kongresszentrum",
    image: "/placeholder-8db1r.png",
    icon: Code,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Essen & Wein Expo",
    date: "10 SEP",
    time: "11:00 - 20:00 Uhr",
    location: "Rathaus",
    image: "/gourmet-food-wine-festival.png",
    icon: Utensils,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
]

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "12,99 €",
    description: "Klassisch mit Tomaten und Mozzarella",
    image: "/gourmet-margherita.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Gegrillter Lachs",
    price: "18,99 €",
    description: "Mit Zitronenbutter-Sauce",
    image: "/grilled-salmon-lemon-asparagus.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Caesar Salat",
    price: "9,99 €",
    description: "Römersalat, Croutons, Parmesan",
    image: "/caesar-salad-chicken.png",
    rating: 4,
  },
]

const fashionProducts: Product[] = [
  {
    id: 1,
    name: "Elegantes Sommerkleid",
    price: "49,99 €",
    discount: "69,99 €",
    image: "/summer-dress.png",
    category: "Kleider",
    colors: ["#F8B195", "#355C7D", "#000000"],
  },
  {
    id: 2,
    name: "Lässige Jeansjacke",
    price: "59,99 €",
    image: "/denim-jacket.png",
    category: "Jacken",
    colors: ["#5D8CAE", "#1E3A5F", "#000000"],
  },
  {
    id: 3,
    name: "Stilvolle Sonnenbrille",
    price: "29,99 €",
    discount: "39,99 €",
    image: "/stylish-sunglasses.png",
    category: "Accessoires",
    colors: ["#000000", "#6D4C41", "#B71C1C"],
  },
  {
    id: 4,
    name: "Leder Sneakers",
    price: "79,99 €",
    image: "/leather-sneakers.png",
    category: "Schuhe",
    colors: ["#FFFFFF", "#000000", "#795548"],
  },
]

const workoutSessions: WorkoutSession[] = [
  {
    id: 1,
    name: "Morgenlauf",
    duration: "30 Min",
    caloriesBurned: 300,
    image: "/athletic-runner-sunrise.png",
  },
  {
    id: 2,
    name: "Yoga-Sitzung",
    duration: "45 Min",
    caloriesBurned: 180,
    image: "/yoga-studio.png",
  },
  {
    id: 3,
    name: "Krafttraining",
    duration: "60 Min",
    caloriesBurned: 400,
    image: "/gym-weightlifting.png",
  },
]

const savingsGoals: SavingsGoal[] = [
  {
    id: 1,
    name: "Notfallfonds",
    currentAmount: 2500,
    targetAmount: 5000,
    icon: Wallet,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Urlaub",
    currentAmount: 1200,
    targetAmount: 3000,
    icon: PiggyBank,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    name: "Neues Auto",
    currentAmount: 5000,
    targetAmount: 20000,
    icon: CreditCard,
    color: "from-purple-500 to-pink-500",
  },
]

export default function EnhancedAppSwitcher() {
  const [currentApp, setCurrentApp] = useState<"events" | "restaurant" | "store" | "fitness" | "savings">("events")
  const phoneContentRef = useRef<HTMLDivElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const [isPhoneScrolled, setIsPhoneScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (phoneContentRef.current && mainContentRef.current) {
        const phoneContent = phoneContentRef.current
        const phoneScrollTop = phoneContent.scrollTop
        const phoneScrollHeight = phoneContent.scrollHeight
        const phoneClientHeight = phoneContent.clientHeight

        if (phoneScrollTop + phoneClientHeight >= phoneScrollHeight - 1) {
          setIsPhoneScrolled(true)
        } else {
          setIsPhoneScrolled(false)
        }
      }
    }

    const phoneContent = phoneContentRef.current
    if (phoneContent) {
      phoneContent.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (phoneContent) {
        phoneContent.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    const mainContent = mainContentRef.current
    if (mainContent) {
      if (isPhoneScrolled) {
        mainContent.style.overflowY = "auto"
      } else {
        mainContent.style.overflowY = "hidden"
      }
    }
  }, [isPhoneScrolled])

  const EventsApp = () => (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Veranstaltungen</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Sparkles className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-102 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48">
              <img src={event.image || "/placeholder.svg"} alt={event.name} className="w-full h-full object-cover" />
              <div className={`absolute top-0 right-0 ${event.color} text-white px-4 py-2 rounded-bl-xl font-medium`}>
                {event.date}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center mb-3">
                <div className={`${event.color} p-2 rounded-lg mr-3`}>
                  <event.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
              </div>
              <div className="text-gray-600 space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              <button className="mt-4 w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const RestaurantApp = () => (
    <div className="h-full bg-gradient-to-b from-amber-50 to-orange-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-6 px-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Gourmet-Genüsse</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-5">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-4 transform transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-start space-x-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <div className="inline-block bg-amber-100 text-amber-600 font-medium text-sm px-2 py-1 rounded-md mt-1">
                  {item.price}
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="mt-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{item.rating}.0</span>
                </div>
              </div>
            </div>
            <button className="mt-3 w-12 h-12 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const FashionStoreApp = () => (
    <div className="h-full bg-gradient-to-b from-rose-50 to-pink-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-6 px-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">ModeBoutique</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          <button className="bg-rose-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">Alle</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Kleider
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Jacken
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Accessoires
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Schuhe
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {fashionProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative">
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Sale
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full">
                  <Heart className="w-4 h-4 text-rose-500" />
                </div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                <h2 className="text-sm font-bold text-gray-800 mb-1 line-clamp-1">{product.name}</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-rose-600 font-bold text-sm">{product.price}</div>
                    {product.discount && (
                      <div className="ml-2 text-xs text-gray-400 line-through">{product.discount}</div>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex space-x-1">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <button className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
          <h3 className="text-base font-bold text-gray-800 mb-3">Empfohlen für dich</h3>
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            <div className="flex-shrink-0 w-36">
              <img
                src="/fashion-recommendation-1.png"
                alt="Empfehlung"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <div className="text-xs font-medium">Sommer Kollektion</div>
              <div className="text-xs text-gray-500">Neue Styles</div>
            </div>
            <div className="flex-shrink-0 w-36">
              <img
                src="/fashion-recommendation-2.png"
                alt="Empfehlung"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <div className="text-xs font-medium">Bestseller</div>
              <div className="text-xs text-gray-500">Top Produkte</div>
            </div>
            <div className="flex-shrink-0 w-36">
              <img
                src="/fashion-recommendation-3.png"
                alt="Empfehlung"
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <div className="text-xs font-medium">Sale</div>
              <div className="text-xs text-gray-500">Bis zu 50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FitnessApp = () => (
    <div className="h-full bg-gradient-to-b from-green-50 to-teal-50 overflow-y-auto">
      <div className="sticky top-0 bg-green-500 text-white py-6 px-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Fitness-Tracker</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Award className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <Activity className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-5">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-base font-bold mb-4 text-gray-800">Tägliche Aktivität</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-xs text-gray-500">Schritte</div>
                <div className="text-lg font-bold text-gray-800">8,742</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <div className="text-xs text-gray-500">Kalorien</div>
                <div className="text-lg font-bold text-gray-800">880</div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <div className="text-right text-sm text-gray-500">75% des Tagesziels</div>
        </motion.div>

        <h3 className="text-base font-bold mt-6 mb-3 text-gray-800 px-1">Letzte Workouts</h3>

        {workoutSessions.map((session, index) => (
          <motion.div
            key={session.id}
            className="bg-white rounded-xl shadow-lg p-4 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <img
              src={session.image || "/placeholder.svg"}
              alt={session.name}
              className="w-16 h-16 object-cover rounded-xl mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">{session.name}</h2>
              <div className="flex items-center mt-1 space-x-4">
                <div className="flex items-center text-gray-600 text-xs">
                  <Clock className="w-3 h-3 mr-1 text-green-500" />
                  {session.duration}
                </div>
                <div className="flex items-center text-gray-600 text-xs">
                  <Zap className="w-3 h-3 mr-1 text-green-500" />
                  {session.caloriesBurned} kcal
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <button className="mt-4 w-12 h-12 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  const SavingsApp = () => (
    <div className="h-full bg-gradient-to-b from-purple-50 to-pink-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Sparziele</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <PiggyBank className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <CreditCard className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-5">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base font-bold text-gray-800">Gesamtersparnis</h2>
            <div className="text-sm text-gray-500">Diesen Monat</div>
          </div>
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            8.700 €
          </div>
          <div className="mt-3 flex items-center text-green-500 text-sm">
            <Sparkles className="w-4 h-4 mr-1" />
            <span>+450 € seit letztem Monat</span>
          </div>
        </motion.div>

        <h3 className="text-base font-bold mt-6 mb-3 text-gray-800 px-1">Meine Ziele</h3>

        {savingsGoals.map((goal, index) => (
          <motion.div
            key={goal.id}
            className="bg-white rounded-xl shadow-lg p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${goal.color} flex items-center justify-center`}>
                  <goal.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="ml-3 text-lg font-bold text-gray-800">{goal.name}</h2>
              </div>
              <div className="text-purple-600 font-medium text-sm bg-purple-100 px-2 py-1 rounded-full">
                {Math.round((goal.currentAmount / goal.targetAmount) * 100)}%
              </div>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray-500">Aktuell</span>
              <span className="text-gray-500">Ziel</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-sm text-gray-800">{goal.currentAmount} €</span>
              <span className="font-medium text-sm text-gray-800">{goal.targetAmount} €</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className={`bg-gradient-to-r ${goal.color} h-3 rounded-full`}
                style={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
              ></div>
            </div>
          </motion.div>
        ))}

        <button className="mt-4 w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  const renderApp = () => {
    switch (currentApp) {
      case "events":
        return <EventsApp />
      case "restaurant":
        return <RestaurantApp />
      case "store":
        return <FashionStoreApp />
      case "fitness":
        return <FitnessApp />
      case "savings":
        return <SavingsApp />
    }
  }

  const appIcons = {
    events: Calendar,
    restaurant: Menu,
    store: Shirt,
    fitness: Activity,
    savings: PiggyBank,
  }

  const appColors = {
    events: "from-blue-500 to-purple-600",
    restaurant: "from-amber-500 to-orange-500",
    store: "from-rose-500 to-pink-500",
    fitness: "from-green-500 to-teal-500",
    savings: "from-purple-600 to-pink-600",
  }

  const appNames = {
    events: "Veranstaltungen",
    restaurant: "Restaurant",
    store: "ModeBoutique",
    fitness: "Fitness",
    savings: "Sparziele",
  }

  return (
    <div className="mb-20" ref={mainContentRef}>
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-6 lg:p-8 bg-gradient-to-br from-gray-800 to-gray-900">
            <motion.h2
              className="text-3xl font-bold text-white mt-10 text-center mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Content-Management-Apps
              </span>
            </motion.h2>

            <div className="space-y-4">
              {(Object.keys(appNames) as Array<keyof typeof appNames>).map((app, index) => (
                <motion.button
                  key={app}
                  onClick={() => setCurrentApp(app)}
                  className={`w-full px-6 py-4 rounded-xl shadow-lg flex items-center justify-between transition-all duration-300 ${
                    currentApp === app
                      ? `bg-gradient-to-r ${appColors[app]} text-white`
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    {React.createElement(appIcons[app], { className: "w-5 h-5 mr-3" })}
                    <span className="font-medium">{appNames[app]}</span>
                  </div>
                  {currentApp === app && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </motion.button>
              ))}
            </div>


          </div>

          <div className="lg:w-2/3 p-6 lg:p-8 flex items-center justify-center">
            <motion.div
              className="relative border-[14px] border-gray-900 rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900"
              style={{ height: "600px", width: "100%", maxWidth: "320px", margin: "0 auto" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
              <div className="h-full w-full bg-white overflow-hidden rounded-[2.3rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentApp}
                    ref={phoneContentRef}
                    className="h-full overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderApp()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
