"use client";
import { motion } from 'framer-motion';
import { Clock, MapPin, Brain, Shield, Globe, ExternalLink, ShoppingCart, Camera, Share2, DollarSign, ChefHat, Scan, BookOpen, Sparkles, Dog, Navigation, AlertTriangle, Store, MessageCircle, GraduationCap, Search } from 'lucide-react';

export default function VixTimeShowcase() {
  return (
    <div className="w-full text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meine Apps
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovative Mobile Apps entwickelt mit Leidenschaft und modernster Technologie
          </p>
        </motion.div>

        {/* Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* VixTime App */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-2xl">
                      <Clock className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      VixTime
                    </h3>
                  </div>

                  <p className="text-xl text-gray-200 mb-6 font-medium">
                    Die intelligente Zeiterfassungs-App mit automatischer Geolokalisierung
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Arbeitszeiten mühelos verfolgen. Organisiert bleiben und Produktivität steigern mit automatischer Geofencing-Technologie und KI-Assistent.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-gray-400">Verfügbar ab Oktober 2025</span>
                  </div>

                  <a
                    href="https://vixtime.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mehr erfahren
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Geofencing</h4>
                    <p className="text-xs text-gray-400">Automatische Arbeitszeiterkennung</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    <Brain className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">KI-Assistent</h4>
                    <p className="text-xs text-gray-400">Analysiert Arbeitsverträge</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    <Shield className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Datenschutz</h4>
                    <p className="text-xs text-gray-400">Funktioniert komplett offline</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                  >
                    <Globe className="w-6 h-6 text-purple-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Mehrsprachig</h4>
                    <p className="text-xs text-gray-400">5 Sprachen verfügbar</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BuyVoice App */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-3xl p-8 border border-emerald-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl">
                      <ShoppingCart className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      BuyVoice
                    </h3>
                  </div>

                  <p className="text-xl text-gray-200 mb-6 font-medium">
                    Schreibst Du Deine Einkaufslisten noch von Hand?
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Mit BuyVoice sprichst Du einfach – und die Liste erstellt sich von selbst.
                  </p>

                  <a
                    href="https://www.buyvoice.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mehr erfahren
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  >
                    <Brain className="w-6 h-6 text-emerald-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Spracherkennung</h4>
                    <p className="text-xs text-gray-400">KI versteht natürliche Sprache</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  >
                    <Camera className="w-6 h-6 text-emerald-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Foto-Scan</h4>
                    <p className="text-xs text-gray-400">Digitalisiere Papierlisten</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  >
                    <Share2 className="w-6 h-6 text-emerald-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Teilen</h4>
                    <p className="text-xs text-gray-400">Mit Familie synchron</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                  >
                    <DollarSign className="w-6 h-6 text-emerald-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Preisschätzung</h4>
                    <p className="text-xs text-gray-400">Budget effektiv planen</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FoodScan AI App */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-3xl p-8 border border-orange-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-500/20 rounded-2xl">
                      <Scan className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      FoodScan AI
                    </h3>
                  </div>

                  <p className="text-xl text-gray-200 mb-6 font-medium">
                    Verwandle deinen Kühlschrank in Rezepte!
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Dein persönlicher Küchenassistent mit künstlicher Intelligenz. Scanne Zutaten und erhalte sofort personalisierte Rezepte.
                  </p>

                  <a
                    href="https://www.foodscan-ai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full hover:from-orange-500 hover:to-red-500 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mehr erfahren
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 146, 60, 0.5)' }}
                  >
                    <ChefHat className="w-6 h-6 text-orange-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Personalisiert</h4>
                    <p className="text-xs text-gray-400">An deinen Geschmack angepasst</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 146, 60, 0.5)' }}
                  >
                    <BookOpen className="w-6 h-6 text-orange-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Anleitungen</h4>
                    <p className="text-xs text-gray-400">Schritt-für-Schritt Rezepte</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 146, 60, 0.5)' }}
                  >
                    <Brain className="w-6 h-6 text-orange-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">KI-Power</h4>
                    <p className="text-xs text-gray-400">Einzigartige Gerichte</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 146, 60, 0.5)' }}
                  >
                    <Sparkles className="w-6 h-6 text-orange-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Kreativ</h4>
                    <p className="text-xs text-gray-400">Neue Geschmackserlebnisse</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hundezonen App */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-3xl p-8 border border-amber-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-500/20 rounded-2xl">
                      <Dog className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      Hundezonen
                    </h3>
                  </div>

                  <p className="text-xl text-gray-200 mb-6 font-medium">
                    Die App für dich und deinen Hund 🐾
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Entdecke und teile Hunderouten in der Schweiz, Deutschland und Österreich. Mit Warnungen vor Giftködern, Services und KI-Chatbot.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-gray-400">Verfügbar für iOS & Android</span>
                  </div>

                  <a
                    href="https://www.hundezonen.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 font-medium mb-6"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mehr erfahren
                  </a>

                  <p className="text-xs text-amber-200 italic">
                    Ein Tool mit Liebe ❤️ gemacht für Dich und Deinen Hund von einem hundeliebenden Freelancer.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                  >
                    <Navigation className="w-6 h-6 text-amber-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Routen entdecken</h4>
                    <p className="text-xs text-gray-400">Finde die besten Spaziergänge</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                  >
                    <AlertTriangle className="w-6 h-6 text-amber-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Giftköder-Radar</h4>
                    <p className="text-xs text-gray-400">Warnungen in Echtzeit</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                  >
                    <Store className="w-6 h-6 text-amber-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Hunde-Services</h4>
                    <p className="text-xs text-gray-400">Tierärzte, Trainer & mehr</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                  >
                    <MessageCircle className="w-6 h-6 text-amber-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">KI-Chatbot</h4>
                    <p className="text-xs text-gray-400">Frag alles über deinen Hund</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DOG-MENTOR App */}
          <div>
            <motion.div
              className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-3xl p-8 border border-rose-500/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-rose-500/20 rounded-2xl">
                      <Dog className="w-8 h-8 text-rose-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                      DOG-MENTOR
                    </h3>
                  </div>

                  <p className="text-xl text-gray-200 mb-6 font-medium">
                    Easy, Good, and Beautiful App
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Everything you need to know about dogs! Entdecke die Welt deines Hundes mit Rezepten, Clicker Training, Rassenidentifikation und KI-Chat powered by ChatGPT-4.
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-gray-400">Verfügbar für iOS</span>
                  </div>

                  <a
                    href="https://dog-mentor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mehr erfahren
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 113, 133, 0.5)' }}
                  >
                    <ChefHat className="w-6 h-6 text-rose-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Dog Recipes</h4>
                    <p className="text-xs text-gray-400">Leckere und nahrhafte Gerichte</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 113, 133, 0.5)' }}
                  >
                    <GraduationCap className="w-6 h-6 text-rose-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Clicker Training</h4>
                    <p className="text-xs text-gray-400">Positives Training lernen</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 113, 133, 0.5)' }}
                  >
                    <Search className="w-6 h-6 text-rose-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">Breed Identifier</h4>
                    <p className="text-xs text-gray-400">Rasse erkennen mit KI</p>
                  </motion.div>

                  <motion.div
                    className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, borderColor: 'rgba(251, 113, 133, 0.5)' }}
                  >
                    <MessageCircle className="w-6 h-6 text-rose-400 mb-2" />
                    <h4 className="font-semibold mb-1 text-white">AI Chat GPT-4</h4>
                    <p className="text-xs text-gray-400">Sofortige Antworten erhalten</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
