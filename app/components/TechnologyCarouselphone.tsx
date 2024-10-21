import { useState, useEffect, useRef } from 'react'
import { Calendar, MapPin, Clock, Star, ShoppingBag, Menu, Activity, CreditCard, Wallet, PiggyBank, Dumbbell, Apple, Music, Code, Utensils, ShoppingCart } from 'lucide-react'

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
}

interface Product {
  id: number
  name: string
  price: string
  image: string
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
}

const events: Event[] = [
  { id: 1, name: "Sommer Musikfestival", date: "15 JUL", time: "14:00 - 22:00 Uhr", location: "Zentralpark", image: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night_637285-559.jpg?w=1380&t=st=1697664204~exp=1697664804~hmac=dc69c8b1871ce0c0b16484a4a23b5d8a9e4d5b7eb71a7c87bf6dbb5d0c5f2c2e", icon: Music, color: "bg-pink-500" },
  { id: 2, name: "Tech-Konferenz 2024", date: "22 AUG", time: "09:00 - 17:00 Uhr", location: "Kongresszentrum", image: "https://img.freepik.com/free-photo/audience-watching-presentation-seminar-auditorium_637285-10149.jpg?w=1380&t=st=1697664243~exp=1697664843~hmac=1a40e8f5f8a1d8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9", icon: Code, color: "bg-blue-500" },
  { id: 3, name: "Essen & Wein Expo", date: "10 SEP", time: "11:00 - 20:00 Uhr", location: "Rathaus", image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=1380&t=st=1697664275~exp=1697664875~hmac=1a40e8f5f8a1d8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9f8f9", icon: Utensils, color: "bg-green-500" },
]

const menuItems: MenuItem[] = [
  { id: 1, name: "Margherita Pizza", price: "12,99 €", description: "Klassisch mit Tomaten und Mozzarella", image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=1380&t=st=1697645972~exp=1697646572~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
  { id: 2, name: "Gegrillter Lachs", price: "18,99 €", description: "Mit Zitronenbutter-Sauce", image: "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-garlic_2829-18739.jpg?w=1380&t=st=1697646047~exp=1697646647~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
  { id: 3, name: "Caesar Salat", price: "9,99 €", description: "Römersalat, Croutons, Parmesan", image: "https://img.freepik.com/free-photo/caesar-salad-with-chicken-breast-plate_140725-6998.jpg?w=1380&t=st=1697646085~exp=1697646685~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
]

const products: Product[] = [
  { id: 1, name: "Kabellose Ohrhörer", price: "79,99 €", image: "https://lweb.ch/images/2024/07/30/app-icon-1024x10241x-copia13.png" },
  { id: 2, name: "Smartwatch", price: "129,99 €", image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?uid=R88092278&ga=GA1.1.308254377.1728506310&semt=ais_hybrid" },
  { id: 3, name: "Tragbares Ladegerät", price: "39,99 €", image: "https://img.freepik.com/free-photo/powerbank-cellphone-wooden-table_1387-513.jpg?uid=R88092278&ga=GA1.1.308254377.1728506310&semt=ais_hybrid" },
]

const workoutSessions: WorkoutSession[] = [
  { id: 1, name: "Morgenlauf", duration: "30 Min", caloriesBurned: 300, image: "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=1380&t=st=1697647433~exp=1697648033~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
  { id: 2, name: "Yoga-Sitzung", duration: "45 Min", caloriesBurned: 180, image: "https://img.freepik.com/free-photo/young-woman-practicing-yoga-home_1303-20706.jpg?w=1380&t=st=1697647475~exp=1697648075~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
  { id: 3, name: "Krafttraining", duration: "60 Min", caloriesBurned: 400, image: "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=1380&t=st=1697647505~exp=1697648105~hmac=be045e9f5e7a0b1e4c5e5b7d8e0e4c1e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8" },
]

const savingsGoals: SavingsGoal[] = [
  { id: 1, name: "Notfallfonds", currentAmount: 2500, targetAmount: 5000, icon: Wallet },
  { id: 2, name: "Urlaub", currentAmount: 1200, targetAmount: 3000, icon: PiggyBank },
  { id: 3, name: "Neues Auto", currentAmount: 5000, targetAmount: 20000, icon: CreditCard },
]

export default function EnhancedResponsiveAppSwitcher() {
  const [currentApp, setCurrentApp] = useState<'events' | 'restaurant' | 'store' | 'fitness' | 'savings'>('events')
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
      phoneContent.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (phoneContent) {
        phoneContent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    const mainContent = mainContentRef.current
    if (mainContent) {
      if (isPhoneScrolled) {
        mainContent.style.overflowY = 'auto'
      } else {
        mainContent.style.overflowY = 'hidden'
      }
    }
  }, [isPhoneScrolled])

  const EventsApp = () => (
    <div className="h-full bg-gradient-to-b from-blue-50 to-purple-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md ">
        <h1 className="text-2xl font-bold">Kommende Veranstaltungen</h1>
      </div>
      <div className="p-4 space-y-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <div className="relative h-48">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
              <div className={`absolute top-0 right-0 ${event.color} text-white px-3 py-1 rounded-bl-lg`}>
                {event.date}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <event.icon className={`w-6 h-6 ${event.color} text-white rounded-full p-1 mr-2`} />
                <h2 className="text-xl font-semibold text-gray-700">{event.name}</h2>
              </div>
              <div className="text-gray-600 space-y-1">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const RestaurantApp = () => (
    <div className="h-full bg-gradient-to-b from-amber-50 to-orange-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 shadow-md ">
        <h1 className="text-2xl font-bold">Gourmet-Genüsse</h1>
      </div>
      <div className="p-4 space-y-4">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 transform transition-all hover:scale-105">
            <div className="flex items-center mb-2">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-600 ">{item.name}</h2>
                <div className="text-amber-600 font-bold text-lg">{item.price}</div>
              </div>
            </div>
            <p className="text-gray-600">{item.description}</p>
            <div className="mt-2 flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : ''}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const StoreApp = () => (
    <div className="h-full bg-gradient-to-b from-indigo-50 to-blue-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">TechShop</h1>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div  key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col transform transition-all hover:scale-105">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold text-indigo-900 mb-2">{product.name}</h2>
            <div className="text-indigo-600 font-bold text-xl mt-auto mb-2">{product.price}</div>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors">
              <ShoppingCart className="w-5 h-5 mx-auto" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const FitnessApp = () => (
    <div className="h-full bg-gradient-to-b from-green-50 to-teal-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 shadow-md ">
        <h1 className="text-2xl font-bold">Fitness-Tracker</h1>
      </div>
      <div className="p-4 space-y-4">
        {workoutSessions.map((session) => (
          <div key={session.id} className="bg-white rounded-lg shadow-md p-4 flex items-center transform  transition-all hover:scale-105">
            <img src={session.image} alt={session.name} className="w-24 h-24 object-cover rounded-md mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">{session.name}</h2>
              <div className="text-gray-600">Dauer: {session.duration}</div>
              <div className="text-green-600 font-bold">Kalorien: {session.caloriesBurned}</div>
            </div>
          </div>
        ))}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Tägliche Zusammenfassung</h3>
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <Dumbbell className="w-6 h-6 mr-2 text-green-600" />
              <span className="text-lg text-gray-600">Workouts gesamt: 3</span>
            </div>
            <div className="flex items-center">
              <Activity className="w-6 h-6 mr-2 text-green-600" />
              <span className="text-lg text-gray-600">Verbrannte Kalorien: 880</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SavingsApp = () => (
    <div className="h-full bg-gradient-to-b from-purple-50 to-pink-50 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 shadow-md ">
        <h1 className="text-2xl font-bold">Sparziele-Tracker</h1>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-600">Gesamtersparnis</h2>
          <div className="text-4xl font-bold text-purple-600">8.700 €</div>
        </div>
        {savingsGoals.map((goal) => (
          <div key={goal.id} className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <goal.icon className="w-8 h-8 mr-3 text-purple-500" />
                <h2 className="text-xl font-semibold text-gray-700">{goal.name}</h2>
              </div>
              <div className="text-purple-600 font-bold text-lg">
                {goal.currentAmount} € / {goal.targetAmount} €
              </div>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                style={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
          Neues Sparziel hinzufügen
        </button>
      </div>
    </div>
  )

  const renderApp = () => {
    switch (currentApp) {
      case 'events':
        return <EventsApp />
      case 'restaurant':
        return <RestaurantApp />
      case 'store':
        return <StoreApp />
      case 'fitness':
        return <FitnessApp />
      case 'savings':
        return <SavingsApp />
    }
  }

  return (
    <div className="mb-20" ref={mainContentRef}>
      <div className="max-w-7xl mx-auto bg-gradient-to-br bg-[#73738a59] rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-white mt-20 text-center mb-10">Content-Management-Apps</h2>
            <div className="space-y-4">
              <button 
                onClick={() => setCurrentApp('events')}
                className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  currentApp === 'events' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-white text-blue-500 hover:bg-blue-50'
                }`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Veranstaltungen
              </button>
              <button 
                onClick={() => setCurrentApp('restaurant')}
                className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  currentApp === 'restaurant' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'bg-white text-amber-600 hover:bg-amber-50'
                }`}
              >
                <Menu className="w-5 h-5 mr-2" />
                Restaurant
              </button>
              <button 
                onClick={() => setCurrentApp('store')}
                className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  currentApp === 'store' ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Online-Shop
              </button>
              <button 
                onClick={() => setCurrentApp('fitness')}
                className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  currentApp === 'fitness' ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' : 'bg-white text-green-600 hover:bg-green-50'
                }`}
              >
                <Activity className="w-5 h-5 mr-2" />
                Fitness
              </button>
              <button 
                onClick={() => setCurrentApp('savings')}
                className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  currentApp === 'savings' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'
                }`}
              >
                <PiggyBank className="w-5 h-5 mr-2" />
                Sparziele
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="relative border-[14px] border-gray-900 rounded-[3rem] overflow-hidden shadow-xl bg-gray-900" 
                 style={{ height: '600px', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl"></div>
              <div className="h-full w-full bg-white overflow-hidden rounded-[2.3rem]">
                <div ref={phoneContentRef} className="h-full overflow-y-auto">
                  {renderApp()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}