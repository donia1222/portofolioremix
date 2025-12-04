"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Idiomas disponibles
export type Language = "de" | "en" | "es" | "it" | "fr"

// Traducciones
export const translations = {
  de: {
    // Header / Menu
    home: "Home",
    projects: "Projekte",
    aiSolutions: "KI-Lösungen",
    aboutMe: "Über mich",
    // General
    language: "Sprache",
    switzerland: "Schweiz",
    // Hero
    heroWord1: "DIGITALE",
    heroWord2: "INNOVATION",
    // Deliver Block
    pixelPerfect: "Pixel Perfect Design",
    deliverTitle1: "Modernität in",
    deliverTitle2: "jedem Pixel",
    deliverDesc: "Ich fusioniere modernes Design mit fesselnden Animationen, um Websites zu kreieren, die in jedem Detail herausstechen. Jedes Pixel wird sorgfältig ausgearbeitet, um Interaktivität und Ästhetik zu bieten.",
    statProjects: "Projekte",
    statSatisfaction: "Zufriedenheit",
    statSupport: "Support",
    // Freelance Availability
    oneProject: "Ein Projekt zur Zeit",
    oneProjectDesc: "Ich widme mich ausschließlich einem Projekt, um maximale Qualität und Aufmerksamkeit zu gewährleisten.",
    fullDedication: "Volle Hingabe",
    fullDedicationDesc: "Jedes Projekt erhält während der gesamten Entwicklung meine volle Aufmerksamkeit.",
    advancePlanning: "Vorausplanung",
    advancePlanningDesc: "Ich empfehle, frühzeitig zu buchen, um einen Platz in meinem Kalender zu sichern.",
    qualityTime: "Qualitätszeit",
    qualityTimeDesc: "Ich nehme mir lieber die nötige Zeit, um außergewöhnliche Ergebnisse zu liefern.",
    urgentProject: "Haben Sie ein dringendes Projekt? Kontaktieren Sie mich, um besondere Optionen zu besprechen.",
    // Contact
    contactTitle: "Kontaktieren Sie LWEB Schweiz",
    contactSubtitle: "Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen",
    address: "Adresse",
    phone: "Telefon",
    email: "E-Mail",
    name: "Name",
    message: "Nachricht",
    sendMessage: "Nachricht senden",
    businessCard: "Visitenkarte",
    imprint: "Impressum",
    privacy: "Datenschutz",
    close: "Schließen",
    allRightsReserved: "Alle Rechte vorbehalten",
    whatsappMessage: "Hallo! Ich interessiere mich für Ihre Dienstleistungen im Bereich Webseiten und App-Entwicklung. Können wir darüber sprechen?",
    // AI Solutions Page
    aiHeroTitle: "Stärken Sie Ihr Unternehmen mit KI",
    aiHeroDesc: "Künstliche Intelligenz verändert die Art und Weise, wie Unternehmen arbeiten. Optimieren Sie Prozesse, verbessern Sie den Kundenservice und treffen Sie intelligentere Entscheidungen.",
    aiDiscoverFuture: "Entdecken Sie die Zukunft",
    aiCustomSolutions: "Maßgeschneiderte KI Lösungen",
    aiCustomSolutionsDesc: "Jedes Unternehmen ist einzigartig, und die KI, die Sie verwenden, sollte es auch sein. Modelle, die wie Ihr Team reagieren, abgestimmt auf Ihre Unternehmensvision.",
    aiPersonalizedTraining: "Personalisiertes Training",
    aiPersonalizedTrainingDesc: "Entwicklung von KI-Modellen, die die spezifischen Bedürfnisse Ihres Unternehmens verstehen.",
    aiAdvancedFineTuning: "Fortschrittliches Fine-Tuning",
    aiAdvancedFineTuningDesc: "Anpassung der Modelle für präzise Antworten, die die Essenz Ihres Unternehmens widerspiegeln.",
    aiEasyImplementation: "Einfache Implementierung",
    aiEasyImplementationDesc: "Integration der KI in Ihr digitales Ökosystem ohne technische Komplikationen.",
    // About Me Page
    aboutRole: "Full-Stack Developer & Digital Innovation Specialist",
    mobileApps: "Mobile Apps",
    mobileAppsSubtitle: "iOS & Android",
    mobileAppsDesc: "Entwicklung nativer und plattformübergreifender mobiler Anwendungen mit modernsten Technologien.",
    webDevelopment: "Web Development",
    webDevSubtitle: "Modern & Responsive",
    webDevDesc: "Responsive Webseiten und Web-Apps mit optimaler Performance und SEO.",
    aiIntegration: "AI Integration",
    aiIntegrationSubtitle: "ChatGPT & More",
    aiIntegrationDesc: "Integration von KI-Technologien zur Automatisierung und Verbesserung von Geschäftsprozessen.",
    techConsulting: "Tech Consulting",
    techConsultingSubtitle: "Strategic Solutions",
    techConsultingDesc: "Strategische Beratung für digitale Transformation und Technologie-Implementierung.",
    // Portfolio
    portfolioTitle: "Ausgewählte",
    portfolioTitleHighlight: "Projekte",
    portfolioSubtitle: "Eine kuratierte Sammlung meiner besten Arbeiten – von mobilen Apps bis hin zu modernen Webapplikationen",
    websites: "Websites",
    apps: "Apps",
    allProjects: "Alle Projekte",
    viewProject: "Projekt ansehen",
    loadMore: "Mehr Projekte laden",
    // Tech Stack
    techTitle: "Technologien die ich",
    techTitleHighlight: "verwende",
    techSubtitle: "Moderne Frameworks und Tools für erstklassige Webanwendungen",
    // Core Principles
    coreTitle: "Meine",
    coreTitleHighlight: "Kernkompetenzen",
    coreSubtitle: "Spezialisiert auf moderne Webtechnologien und innovative Lösungen für Ihr digitales Wachstum",
    appDev: "App-Entwicklung",
    appDevDesc: "Native & Cross-Platform Apps mit React Native und modernen Frameworks für iOS und Android.",
    aiTitle: "KI-Lösungen",
    aiDesc: "Intelligente Automatisierung mit OpenAI, Machine Learning und Custom AI Integration.",
    webTitle: "Webseiten",
    webDesc: "Performante Websites mit Next.js, Remix und modernsten Web-Technologien.",
    innovation: "Innovation",
    innovationDesc: "Kreative Lösungen die Ihr Business transformieren und neue Möglichkeiten eröffnen.",
    cleanCode: "Clean Code",
    cleanCodeDesc: "Sauberer, wartbarer Code nach Best Practices für langfristige Skalierbarkeit.",
    security: "Sicherheit",
    securityDesc: "Robuste Security-Standards und Datenschutz nach DSGVO-Richtlinien.",
  },
  en: {
    // Header / Menu
    home: "Home",
    projects: "Projects",
    aiSolutions: "AI Solutions",
    aboutMe: "About me",
    // General
    language: "Language",
    switzerland: "Switzerland",
    // Hero
    heroWord1: "DIGITAL",
    heroWord2: "INNOVATION",
    // Deliver Block
    pixelPerfect: "Pixel Perfect Design",
    deliverTitle1: "Modernity in",
    deliverTitle2: "every Pixel",
    deliverDesc: "I fuse modern design with captivating animations to create websites that stand out in every detail. Every pixel is carefully crafted to offer interactivity and aesthetics.",
    statProjects: "Projects",
    statSatisfaction: "Satisfaction",
    statSupport: "Support",
    // Freelance Availability
    oneProject: "One Project at a Time",
    oneProjectDesc: "I dedicate myself exclusively to one project to ensure maximum quality and attention.",
    fullDedication: "Full Dedication",
    fullDedicationDesc: "Every project receives my full attention throughout the entire development process.",
    advancePlanning: "Advance Planning",
    advancePlanningDesc: "I recommend booking early to secure a spot in my calendar.",
    qualityTime: "Quality Time",
    qualityTimeDesc: "I prefer to take the necessary time to deliver exceptional results.",
    urgentProject: "Have an urgent project? Contact me to discuss special options.",
    // Contact
    contactTitle: "Contact LWEB Switzerland",
    contactSubtitle: "Let's bring your digital vision to life together",
    address: "Address",
    phone: "Phone",
    email: "Email",
    name: "Name",
    message: "Message",
    sendMessage: "Send message",
    businessCard: "Business Card",
    imprint: "Imprint",
    privacy: "Privacy",
    close: "Close",
    allRightsReserved: "All rights reserved",
    whatsappMessage: "Hello! I'm interested in your web and app development services. Can we talk about it?",
    // AI Solutions Page
    aiHeroTitle: "Empower Your Business with AI",
    aiHeroDesc: "Artificial intelligence is transforming how businesses operate. Optimize processes, improve customer service, and make smarter decisions.",
    aiDiscoverFuture: "Discover the Future",
    aiCustomSolutions: "Custom AI Solutions",
    aiCustomSolutionsDesc: "Every business is unique, and the AI you use should be too. Models that respond like your team, aligned with your company vision.",
    aiPersonalizedTraining: "Personalized Training",
    aiPersonalizedTrainingDesc: "Development of AI models that understand the specific needs of your business.",
    aiAdvancedFineTuning: "Advanced Fine-Tuning",
    aiAdvancedFineTuningDesc: "Adaptation of models for precise responses that reflect the essence of your business.",
    aiEasyImplementation: "Easy Implementation",
    aiEasyImplementationDesc: "Integration of AI into your digital ecosystem without technical complications.",
    // About Me Page
    aboutRole: "Full-Stack Developer & Digital Innovation Specialist",
    mobileApps: "Mobile Apps",
    mobileAppsSubtitle: "iOS & Android",
    mobileAppsDesc: "Development of native and cross-platform mobile applications with cutting-edge technologies.",
    webDevelopment: "Web Development",
    webDevSubtitle: "Modern & Responsive",
    webDevDesc: "Responsive websites and web apps with optimal performance and SEO.",
    aiIntegration: "AI Integration",
    aiIntegrationSubtitle: "ChatGPT & More",
    aiIntegrationDesc: "Integration of AI technologies to automate and improve business processes.",
    techConsulting: "Tech Consulting",
    techConsultingSubtitle: "Strategic Solutions",
    techConsultingDesc: "Strategic consulting for digital transformation and technology implementation.",
    // Portfolio
    portfolioTitle: "Selected",
    portfolioTitleHighlight: "Projects",
    portfolioSubtitle: "A curated collection of my best work – from mobile apps to modern web applications",
    websites: "Websites",
    apps: "Apps",
    allProjects: "All Projects",
    viewProject: "View Project",
    loadMore: "Load more projects",
    // Tech Stack
    techTitle: "Technologies I",
    techTitleHighlight: "use",
    techSubtitle: "Modern frameworks and tools for first-class web applications",
    // Core Principles
    coreTitle: "My",
    coreTitleHighlight: "Core Skills",
    coreSubtitle: "Specialized in modern web technologies and innovative solutions for your digital growth",
    appDev: "App Development",
    appDevDesc: "Native & Cross-Platform Apps with React Native and modern frameworks for iOS and Android.",
    aiTitle: "AI Solutions",
    aiDesc: "Intelligent automation with OpenAI, Machine Learning and Custom AI Integration.",
    webTitle: "Websites",
    webDesc: "High-performance websites with Next.js, Remix and cutting-edge web technologies.",
    innovation: "Innovation",
    innovationDesc: "Creative solutions that transform your business and open new opportunities.",
    cleanCode: "Clean Code",
    cleanCodeDesc: "Clean, maintainable code following best practices for long-term scalability.",
    security: "Security",
    securityDesc: "Robust security standards and data protection according to GDPR guidelines.",
  },
  es: {
    // Header / Menu
    home: "Inicio",
    projects: "Proyectos",
    aiSolutions: "Soluciones IA",
    aboutMe: "Sobre mí",
    // General
    language: "Idioma",
    switzerland: "Suiza",
    // Hero
    heroWord1: "INNOVACIÓN",
    heroWord2: "DIGITAL",
    // Deliver Block
    pixelPerfect: "Diseño Pixel Perfect",
    deliverTitle1: "Modernidad en",
    deliverTitle2: "cada Pixel",
    deliverDesc: "Fusiono diseño moderno con animaciones cautivadoras para crear sitios web que destacan en cada detalle. Cada pixel está cuidadosamente elaborado para ofrecer interactividad y estética.",
    statProjects: "Proyectos",
    statSatisfaction: "Satisfacción",
    statSupport: "Soporte",
    // Freelance Availability
    oneProject: "Un Proyecto a la Vez",
    oneProjectDesc: "Me dedico exclusivamente a un proyecto para garantizar la máxima calidad y atención.",
    fullDedication: "Dedicación Total",
    fullDedicationDesc: "Cada proyecto recibe mi atención completa durante todo el proceso de desarrollo.",
    advancePlanning: "Planificación Anticipada",
    advancePlanningDesc: "Recomiendo reservar con anticipación para asegurar un lugar en mi calendario.",
    qualityTime: "Tiempo de Calidad",
    qualityTimeDesc: "Prefiero tomarme el tiempo necesario para entregar resultados excepcionales.",
    urgentProject: "¿Tienes un proyecto urgente? Contáctame para discutir opciones especiales.",
    // Contact
    contactTitle: "Contacta con LWEB Suiza",
    contactSubtitle: "Hagamos realidad tu visión digital juntos",
    address: "Dirección",
    phone: "Teléfono",
    email: "Correo",
    name: "Nombre",
    message: "Mensaje",
    sendMessage: "Enviar mensaje",
    businessCard: "Tarjeta de visita",
    imprint: "Aviso legal",
    privacy: "Privacidad",
    close: "Cerrar",
    allRightsReserved: "Todos los derechos reservados",
    whatsappMessage: "¡Hola! Estoy interesado en sus servicios de desarrollo web y de aplicaciones. ¿Podemos hablar de ello?",
    // AI Solutions Page
    aiHeroTitle: "Potencia tu Negocio con IA",
    aiHeroDesc: "La inteligencia artificial está transformando la forma en que operan las empresas. Optimiza procesos, mejora el servicio al cliente y toma decisiones más inteligentes.",
    aiDiscoverFuture: "Descubre el Futuro",
    aiCustomSolutions: "Soluciones de IA Personalizadas",
    aiCustomSolutionsDesc: "Cada empresa es única, y la IA que uses también debería serlo. Modelos que responden como tu equipo, alineados con la visión de tu empresa.",
    aiPersonalizedTraining: "Entrenamiento Personalizado",
    aiPersonalizedTrainingDesc: "Desarrollo de modelos de IA que entienden las necesidades específicas de tu negocio.",
    aiAdvancedFineTuning: "Fine-Tuning Avanzado",
    aiAdvancedFineTuningDesc: "Adaptación de modelos para respuestas precisas que reflejan la esencia de tu negocio.",
    aiEasyImplementation: "Implementación Sencilla",
    aiEasyImplementationDesc: "Integración de IA en tu ecosistema digital sin complicaciones técnicas.",
    // About Me Page
    aboutRole: "Full-Stack Developer & Especialista en Innovación Digital",
    mobileApps: "Apps Móviles",
    mobileAppsSubtitle: "iOS & Android",
    mobileAppsDesc: "Desarrollo de aplicaciones móviles nativas y multiplataforma con tecnologías de vanguardia.",
    webDevelopment: "Desarrollo Web",
    webDevSubtitle: "Moderno & Responsive",
    webDevDesc: "Sitios web y aplicaciones web responsivas con rendimiento y SEO óptimos.",
    aiIntegration: "Integración IA",
    aiIntegrationSubtitle: "ChatGPT & Más",
    aiIntegrationDesc: "Integración de tecnologías de IA para automatizar y mejorar procesos empresariales.",
    techConsulting: "Consultoría Tech",
    techConsultingSubtitle: "Soluciones Estratégicas",
    techConsultingDesc: "Consultoría estratégica para transformación digital e implementación tecnológica.",
    // Portfolio
    portfolioTitle: "Proyectos",
    portfolioTitleHighlight: "Seleccionados",
    portfolioSubtitle: "Una colección curada de mis mejores trabajos – desde apps móviles hasta aplicaciones web modernas",
    websites: "Sitios Web",
    apps: "Apps",
    allProjects: "Todos los Proyectos",
    viewProject: "Ver Proyecto",
    loadMore: "Cargar más proyectos",
    // Tech Stack
    techTitle: "Tecnologías que",
    techTitleHighlight: "utilizo",
    techSubtitle: "Frameworks modernos y herramientas para aplicaciones web de primera clase",
    // Core Principles
    coreTitle: "Mis",
    coreTitleHighlight: "Competencias",
    coreSubtitle: "Especializado en tecnologías web modernas y soluciones innovadoras para tu crecimiento digital",
    appDev: "Desarrollo de Apps",
    appDevDesc: "Apps nativas y multiplataforma con React Native y frameworks modernos para iOS y Android.",
    aiTitle: "Soluciones IA",
    aiDesc: "Automatización inteligente con OpenAI, Machine Learning e integración de IA personalizada.",
    webTitle: "Sitios Web",
    webDesc: "Sitios web de alto rendimiento con Next.js, Remix y las últimas tecnologías web.",
    innovation: "Innovación",
    innovationDesc: "Soluciones creativas que transforman tu negocio y abren nuevas oportunidades.",
    cleanCode: "Código Limpio",
    cleanCodeDesc: "Código limpio y mantenible siguiendo mejores prácticas para escalabilidad a largo plazo.",
    security: "Seguridad",
    securityDesc: "Estándares de seguridad robustos y protección de datos según las directrices RGPD.",
  },
  it: {
    // Header / Menu
    home: "Home",
    projects: "Progetti",
    aiSolutions: "Soluzioni IA",
    aboutMe: "Chi sono",
    // General
    language: "Lingua",
    switzerland: "Svizzera",
    // Hero
    heroWord1: "INNOVAZIONE",
    heroWord2: "DIGITALE",
    // Deliver Block
    pixelPerfect: "Design Pixel Perfect",
    deliverTitle1: "Modernità in",
    deliverTitle2: "ogni Pixel",
    deliverDesc: "Unisco design moderno con animazioni accattivanti per creare siti web che si distinguono in ogni dettaglio. Ogni pixel è accuratamente elaborato per offrire interattività ed estetica.",
    statProjects: "Progetti",
    statSatisfaction: "Soddisfazione",
    statSupport: "Supporto",
    // Freelance Availability
    oneProject: "Un Progetto alla Volta",
    oneProjectDesc: "Mi dedico esclusivamente a un progetto per garantire la massima qualità e attenzione.",
    fullDedication: "Dedizione Totale",
    fullDedicationDesc: "Ogni progetto riceve la mia piena attenzione durante l'intero processo di sviluppo.",
    advancePlanning: "Pianificazione Anticipata",
    advancePlanningDesc: "Consiglio di prenotare in anticipo per assicurarsi un posto nel mio calendario.",
    qualityTime: "Tempo di Qualità",
    qualityTimeDesc: "Preferisco prendermi il tempo necessario per fornire risultati eccezionali.",
    urgentProject: "Hai un progetto urgente? Contattami per discutere opzioni speciali.",
    // Contact
    contactTitle: "Contatta LWEB Svizzera",
    contactSubtitle: "Realizziamo insieme la tua visione digitale",
    address: "Indirizzo",
    phone: "Telefono",
    email: "Email",
    name: "Nome",
    message: "Messaggio",
    sendMessage: "Invia messaggio",
    businessCard: "Biglietto da visita",
    imprint: "Impronta",
    privacy: "Privacy",
    close: "Chiudi",
    allRightsReserved: "Tutti i diritti riservati",
    whatsappMessage: "Ciao! Sono interessato ai vostri servizi di sviluppo web e app. Possiamo parlarne?",
    // AI Solutions Page
    aiHeroTitle: "Potenzia la Tua Azienda con l'IA",
    aiHeroDesc: "L'intelligenza artificiale sta trasformando il modo in cui le aziende operano. Ottimizza i processi, migliora il servizio clienti e prendi decisioni più intelligenti.",
    aiDiscoverFuture: "Scopri il Futuro",
    aiCustomSolutions: "Soluzioni IA Personalizzate",
    aiCustomSolutionsDesc: "Ogni azienda è unica, e l'IA che usi dovrebbe esserlo anche. Modelli che rispondono come il tuo team, allineati alla visione della tua azienda.",
    aiPersonalizedTraining: "Formazione Personalizzata",
    aiPersonalizedTrainingDesc: "Sviluppo di modelli IA che comprendono le esigenze specifiche della tua azienda.",
    aiAdvancedFineTuning: "Fine-Tuning Avanzato",
    aiAdvancedFineTuningDesc: "Adattamento dei modelli per risposte precise che riflettono l'essenza della tua azienda.",
    aiEasyImplementation: "Implementazione Semplice",
    aiEasyImplementationDesc: "Integrazione dell'IA nel tuo ecosistema digitale senza complicazioni tecniche.",
    // About Me Page
    aboutRole: "Full-Stack Developer & Specialista in Innovazione Digitale",
    mobileApps: "App Mobile",
    mobileAppsSubtitle: "iOS & Android",
    mobileAppsDesc: "Sviluppo di applicazioni mobile native e multipiattaforma con tecnologie all'avanguardia.",
    webDevelopment: "Sviluppo Web",
    webDevSubtitle: "Moderno & Responsive",
    webDevDesc: "Siti web e app web responsive con prestazioni e SEO ottimali.",
    aiIntegration: "Integrazione IA",
    aiIntegrationSubtitle: "ChatGPT & Altro",
    aiIntegrationDesc: "Integrazione di tecnologie IA per automatizzare e migliorare i processi aziendali.",
    techConsulting: "Consulenza Tech",
    techConsultingSubtitle: "Soluzioni Strategiche",
    techConsultingDesc: "Consulenza strategica per la trasformazione digitale e l'implementazione tecnologica.",
    // Portfolio
    portfolioTitle: "Progetti",
    portfolioTitleHighlight: "Selezionati",
    portfolioSubtitle: "Una collezione curata dei miei migliori lavori – dalle app mobili alle moderne applicazioni web",
    websites: "Siti Web",
    apps: "App",
    allProjects: "Tutti i Progetti",
    viewProject: "Vedi Progetto",
    loadMore: "Carica altri progetti",
    // Tech Stack
    techTitle: "Tecnologie che",
    techTitleHighlight: "utilizzo",
    techSubtitle: "Framework moderni e strumenti per applicazioni web di prima classe",
    // Core Principles
    coreTitle: "Le mie",
    coreTitleHighlight: "Competenze",
    coreSubtitle: "Specializzato in tecnologie web moderne e soluzioni innovative per la tua crescita digitale",
    appDev: "Sviluppo App",
    appDevDesc: "App native e multipiattaforma con React Native e framework moderni per iOS e Android.",
    aiTitle: "Soluzioni IA",
    aiDesc: "Automazione intelligente con OpenAI, Machine Learning e integrazione IA personalizzata.",
    webTitle: "Siti Web",
    webDesc: "Siti web ad alte prestazioni con Next.js, Remix e tecnologie web all'avanguardia.",
    innovation: "Innovazione",
    innovationDesc: "Soluzioni creative che trasformano il tuo business e aprono nuove opportunità.",
    cleanCode: "Codice Pulito",
    cleanCodeDesc: "Codice pulito e manutenibile seguendo le best practice per la scalabilità a lungo termine.",
    security: "Sicurezza",
    securityDesc: "Standard di sicurezza robusti e protezione dei dati secondo le linee guida GDPR.",
  },
  fr: {
    // Header / Menu
    home: "Accueil",
    projects: "Projets",
    aiSolutions: "Solutions IA",
    aboutMe: "À propos",
    // General
    language: "Langue",
    switzerland: "Suisse",
    // Hero
    heroWord1: "INNOVATION",
    heroWord2: "DIGITALE",
    // Deliver Block
    pixelPerfect: "Design Pixel Perfect",
    deliverTitle1: "Modernité dans",
    deliverTitle2: "chaque Pixel",
    deliverDesc: "Je fusionne le design moderne avec des animations captivantes pour créer des sites web qui se démarquent dans chaque détail. Chaque pixel est soigneusement élaboré pour offrir interactivité et esthétique.",
    statProjects: "Projets",
    statSatisfaction: "Satisfaction",
    statSupport: "Support",
    // Freelance Availability
    oneProject: "Un Projet à la Fois",
    oneProjectDesc: "Je me consacre exclusivement à un projet pour garantir une qualité et une attention maximales.",
    fullDedication: "Dévouement Total",
    fullDedicationDesc: "Chaque projet reçoit toute mon attention tout au long du processus de développement.",
    advancePlanning: "Planification Anticipée",
    advancePlanningDesc: "Je recommande de réserver à l'avance pour garantir une place dans mon calendrier.",
    qualityTime: "Temps de Qualité",
    qualityTimeDesc: "Je préfère prendre le temps nécessaire pour livrer des résultats exceptionnels.",
    urgentProject: "Vous avez un projet urgent ? Contactez-moi pour discuter des options spéciales.",
    // Contact
    contactTitle: "Contactez LWEB Suisse",
    contactSubtitle: "Réalisons ensemble votre vision digitale",
    address: "Adresse",
    phone: "Téléphone",
    email: "Email",
    name: "Nom",
    message: "Message",
    sendMessage: "Envoyer le message",
    businessCard: "Carte de visite",
    imprint: "Mentions légales",
    privacy: "Confidentialité",
    close: "Fermer",
    allRightsReserved: "Tous droits réservés",
    whatsappMessage: "Bonjour ! Je suis intéressé par vos services de développement web et d'applications. Pouvons-nous en discuter ?",
    // AI Solutions Page
    aiHeroTitle: "Renforcez Votre Entreprise avec l'IA",
    aiHeroDesc: "L'intelligence artificielle transforme la façon dont les entreprises fonctionnent. Optimisez les processus, améliorez le service client et prenez des décisions plus intelligentes.",
    aiDiscoverFuture: "Découvrez le Futur",
    aiCustomSolutions: "Solutions IA Sur Mesure",
    aiCustomSolutionsDesc: "Chaque entreprise est unique, et l'IA que vous utilisez devrait l'être aussi. Des modèles qui répondent comme votre équipe, alignés sur la vision de votre entreprise.",
    aiPersonalizedTraining: "Formation Personnalisée",
    aiPersonalizedTrainingDesc: "Développement de modèles IA qui comprennent les besoins spécifiques de votre entreprise.",
    aiAdvancedFineTuning: "Fine-Tuning Avancé",
    aiAdvancedFineTuningDesc: "Adaptation des modèles pour des réponses précises qui reflètent l'essence de votre entreprise.",
    aiEasyImplementation: "Implémentation Facile",
    aiEasyImplementationDesc: "Intégration de l'IA dans votre écosystème numérique sans complications techniques.",
    // About Me Page
    aboutRole: "Full-Stack Developer & Spécialiste en Innovation Digitale",
    mobileApps: "Apps Mobiles",
    mobileAppsSubtitle: "iOS & Android",
    mobileAppsDesc: "Développement d'applications mobiles natives et multiplateformes avec des technologies de pointe.",
    webDevelopment: "Développement Web",
    webDevSubtitle: "Moderne & Responsive",
    webDevDesc: "Sites web et applications web responsives avec performances et SEO optimaux.",
    aiIntegration: "Intégration IA",
    aiIntegrationSubtitle: "ChatGPT & Plus",
    aiIntegrationDesc: "Intégration de technologies IA pour automatiser et améliorer les processus métier.",
    techConsulting: "Conseil Tech",
    techConsultingSubtitle: "Solutions Stratégiques",
    techConsultingDesc: "Conseil stratégique pour la transformation digitale et l'implémentation technologique.",
    // Portfolio
    portfolioTitle: "Projets",
    portfolioTitleHighlight: "Sélectionnés",
    portfolioSubtitle: "Une collection organisée de mes meilleurs travaux – des applications mobiles aux applications web modernes",
    websites: "Sites Web",
    apps: "Apps",
    allProjects: "Tous les Projets",
    viewProject: "Voir le Projet",
    loadMore: "Charger plus de projets",
    // Tech Stack
    techTitle: "Technologies que",
    techTitleHighlight: "j'utilise",
    techSubtitle: "Frameworks modernes et outils pour des applications web de première classe",
    // Core Principles
    coreTitle: "Mes",
    coreTitleHighlight: "Compétences",
    coreSubtitle: "Spécialisé dans les technologies web modernes et les solutions innovantes pour votre croissance digitale",
    appDev: "Développement d'Apps",
    appDevDesc: "Apps natives et multiplateformes avec React Native et frameworks modernes pour iOS et Android.",
    aiTitle: "Solutions IA",
    aiDesc: "Automatisation intelligente avec OpenAI, Machine Learning et intégration IA personnalisée.",
    webTitle: "Sites Web",
    webDesc: "Sites web haute performance avec Next.js, Remix et technologies web de pointe.",
    innovation: "Innovation",
    innovationDesc: "Solutions créatives qui transforment votre entreprise et ouvrent de nouvelles opportunités.",
    cleanCode: "Code Propre",
    cleanCodeDesc: "Code propre et maintenable suivant les meilleures pratiques pour une évolutivité à long terme.",
    security: "Sécurité",
    securityDesc: "Standards de sécurité robustes et protection des données selon les directives RGPD.",
  },
}

// Banderas para el selector
export const languageFlags: Record<Language, { flag: string; name: string }> = {
  de: { flag: "🇩🇪", name: "Deutsch" },
  en: { flag: "🇬🇧", name: "English" },
  es: { flag: "🇪🇸", name: "Español" },
  it: { flag: "🇮🇹", name: "Italiano" },
  fr: { flag: "🇫🇷", name: "Français" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.de) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")

  // Cargar idioma guardado
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && translations[saved]) {
      setLanguage(saved)
    }
  }, [])

  // Guardar idioma
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // Función de traducción
  const t = (key: keyof typeof translations.de): string => {
    return translations[language][key] || translations.de[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
