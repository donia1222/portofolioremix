"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Smartphone, Brain, Shield, Globe, Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function VixTimeShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Automatisches Geofencing",
      description: "Intelligente Arbeitszeiterkennung basierend auf Ihrem Standort",
      details: "Konfigurierbare Bereiche von 50-500m mit verzögerter Aktivierung"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "KI-Assistent",
      description: "Analysiert Arbeitsverträge und extrahiert automatisch Arbeitszeiten",
      details: "Unterstützt PDFs, Bilder und 10+ internationale Arbeitsgesetze"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Datenschutz First",
      description: "Funktioniert komplett offline - Ihre Daten bleiben bei Ihnen",
      details: "Keine Cloud-Synchronisation erforderlich, lokale Datenspeicherung"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Mehrsprachig",
      description: "Vollständig lokalisiert in 5 Sprachen",
      details: "Deutsche, englische, spanische, französische und italienische Unterstützung"
    }
  ];

  const competitiveAdvantages = [
    "Einzige App mit KI-Dokumentenanalyse",
    "Funktioniert ohne GPS-Berechtigung",
    "Native iOS Widget mit Mini-Kalender",
    "Live Activities für Dynamic Island",
    "Freemium-Modell vs. teure Konkurrenz"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

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
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30">
            <Clock className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Freelance-Projekt</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            VixTime
          </h1>
          
          <p className="text-xl md:text-1xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Die intelligente Zeiterfassungs-App mit automatischer Geolokalisierung
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-full border border-green-500/30">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-200 text-sm">React Native</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-sm">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-600/20 rounded-full border border-orange-500/30">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-200 text-sm">OpenAI Integration</span>
            </div>
          </div>
        </motion.div>

        {/* App Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/calendar.webp" 
                    alt="VixTime App Interface"
                    className="rounded-2xl shadow-2xl w-full max-w-[400px] mx-auto"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4 text-purple-200">
                    Verfügbar ab November 2025
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Arbeitszeiten mühelos verfolgen. Organisiert bleiben und Produktivität steigern mit automatischer Geofencing-Technologie.
                  </p>
                  <a 
                    href="https://vixtime.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Website besuchen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Innovative Funktionen
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-purple-400/50 transform scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ y: -5 }}
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {feature.description}
                </p>
                <p className="text-purple-200 text-xs">
                  {feature.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" />
              Wettbewerbsvorteile
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Technische Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-b from-purple-600/20 to-transparent rounded-2xl border border-purple-500/30">
              <Smartphone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">React Native 0.76.9</h3>
              <p className="text-gray-300 text-sm">
                30+ modulare Komponenten mit vollständiger TypeScript-Integration
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-b from-blue-600/20 to-transparent rounded-2xl border border-blue-500/30">
              <Brain className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">KI-Integration</h3>
              <p className="text-gray-300 text-sm">
                OpenAI GPT-4 Vision und Google Gemini für Dokumentenanalyse
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-b from-green-600/20 to-transparent rounded-2xl border border-green-500/30">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Internationalisierung</h3>
              <p className="text-gray-300 text-sm">
                5 Sprachen mit lokalisierter Arbeitsgesetzgebung
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}