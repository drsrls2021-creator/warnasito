// src/App.tsx
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Factory, Package, Ruler, ShieldCheck, Menu, X, Globe, ChevronRight, CheckCircle2, Truck, Home, Building, ArrowRight, Check, Maximize2, Lightbulb, Palette, Thermometer, Layers, Wind, Lock } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';

// --- TRADUZIONI ---
export const translations = {
  it: {
    navHome: "Home",
    navAbout: "Chi Siamo",
    navProducts: "Prodotti",
    navServices: "Servizi",
    navLocation: "Dove Siamo",
    navContact: "Contatti",
    heroTitle: "WARNA PROFILE S.R.L.",
    heroSubtitle: "Specialisti in Profili PVC Decco e Ferramenta GU",
    heroDescription: "Fornitura di profili in PVC Decco e servizi di ferramenta GU di alta qualità. Sedi operative in Toscana e Campania.",
    heroButton: "contattaci",
    aboutTitle: "Chi Siamo",
    aboutSubtitle: "Esperti nel settore dei profili PVC e ferramenta",
    aboutText: "Warna Profile S.r.l. è un'azienda dinamica specializzata nella vendita di profili in PVC Decco e servizi di ferramenta GU. Con sede legale a Sansepolcro (AR) e sedi operative in Campania, offriamo prodotti di alta qualità per l'edilizia e l'industria.",
    aboutMission: "La nostra missione è fornire soluzioni personalizzate in PVC e servizi di ferramenta di precisione, garantendo qualità, affidabilità e supporto tecnico specializzato.",
    homeProductsTitle: "Prodotti in Evidenza",
    homeProductsSubtitle: "Scopri le nostre soluzioni di punta per serramenti",
    discoverMore: "Scopri di più",
    productsTitle: "I Nostri Prodotti",
    productsSubtitle: "La nostra gamma completa di profili PVC ad alte prestazioni",
    productDetailBack: "Torna ai Prodotti",
    featuresTitle: "Caratteristiche Principali",
    backToProducts: "Torna ai Prodotti",

    // DECCO 83
    productDecco83Title: "Decco 83",
    productDecco83Desc: "Il profilo Decco 83 rappresenta l'eccellenza nei parametri termici. Grazie alla terza guarnizione centrale e alla possibilità di utilizzare vetrate ampie con distanziatori a canalina calda, garantisce prestazioni termiche superiori che altri profili non possono offrire.",
    
    decco83Feature1Title: "Sistema a 7 Camere",
    decco83Feature1Desc: "Profondità di installazione di 81 mm con tre guarnizioni, inclusa una centrale, per un isolamento termico eccezionale.",
    
    decco83Feature2Title: "Versatilità delle Vetrate",
    decco83Feature2Desc: "Compatibilità con molteplici tipologie di vetrate con spessori da 23 mm fino a 54,8 mm.",
    
    decco83Feature3Title: "Massima Luminosità",
    decco83Feature3Desc: "Altezza ottimale di assemblaggio dei profili che garantisce fino al 5% di luce in più rispetto ad altri sistemi della stessa classe (finestre a due ante da 1465x1435 mm).",
    
    decco83Feature4Title: "Guarnizioni di Qualità",
    decco83Feature4Desc: "Disponibili in grigio o nero per un'estetica perfetta.",
    
    decco83Feature5Title: "Ampia Gamma di Finiture",
    decco83Feature5Desc: "Vasta scelta di pellicole decorative per personalizzare l'aspetto dei serramenti.",
    
    decco83Feature6Title: "Isolamento Termico Superiore",
    decco83Feature6Desc: "Coefficiente Uw = 0,59 W/m²K (finestra di riferimento 1230x1480 mm con vetrata 4/12/4/12/4/12/4 cripton, Ug=0,3 W/m²K e distanziatore SWISSPACER V Ultimate).",
    
    decco83Feature7Title: "Camere di Rinforzo Estese",
    decco83Feature7Desc: "Aumentano la rigidità delle finestre e consentono la produzione di tutte le strutture correttamente progettate.",
    
    decco83Feature8Title: "Quattro Colori dell'Anima",
    decco83Feature8Desc: "Disponibile in bianco, antracite, caramello e marrone scuro.",
    
    decco83Feature9Title: "Profili per Grandi Aperture",
    decco83Feature9Desc: "Include profili di transizione per grandi porte scorrevoli e porte-finestre.",
    
    decco83Feature10Title: "Profili Classe A e B",
    decco83Feature10Desc: "Conformi alla norma PN-EN 12608-1+A1 per la massima qualità.",
    
    decco83Feature11Title: "Tecnologia del Vetro Incollato",
    decco83Feature11Desc: "Possibilità di utilizzare la tecnologia del vetro incollato per aumentare la stabilità e realizzare costruzioni di grandi dimensioni.",
    
    decco83Feature12Title: "Utilizzo di Inserti Termici",
    decco83Feature12Desc: "Possibilità di impiego di inserti termici per migliorare ulteriormente le prestazioni energetiche.",

    // DECCO 82
    productDecco82Title: "Decco 82",
    productDecco82Desc: "Il profilo Decco 82 rappresenta le ultime tendenze nel settore dei serramenti. Il design moderno ed essenziale conferisce alle finestre un carattere unico. Dotato di proprietà universali, consente l'applicazione di un'ampia gamma di vetrate - dalle standard alle più spesse, dalle basiche a quelle speciali: calde, insonorizzanti e di sicurezza. Il profilo si distingue per larghezza e stabilità.",
    
    decco82Feature1Title: "Sistema a 6 Camere",
    decco82Feature1Desc: "Profondità di installazione di 81 mm per prestazioni termiche elevate.",
    
    decco82Feature2Title: "Ampie Opzioni di Vetratura",
    decco82Feature2Desc: "Possibilità di applicazione di numerosi tipi di vetrate con spessori da 23 mm a 54,8 mm.",
    
    decco82Feature3Title: "Guarnizioni Standard",
    decco82Feature3Desc: "Disponibili in grigio o nero.",
    
    decco82Feature4Title: "Vasta Gamma di Pellicole Decorative",
    decco82Feature4Desc: "Ampia scelta di rivestimenti per ogni esigenza estetica.",
    
    decco82Feature5Title: "Camere di Rinforzo Ampliate",
    decco82Feature5Desc: "Aumentano la rigidità delle finestre e permettono la realizzazione di tutte le strutture correttamente progettate.",
    
    decco82Feature6Title: "Quattro Colori dell'Anima",
    decco82Feature6Desc: "Disponibile in bianco, caramello, antracite e marrone scuro.",
    
    decco82Feature7Title: "Sistema Porte Completo",
    decco82Feature7Desc: "Include un sistema completo per porte.",
    
    decco82Feature8Title: "Maggiore Luminosità",
    decco82Feature8Desc: "Altezza ottimale di assemblaggio che fornisce fino al 5% di luce in più rispetto ad altri sistemi della stessa classe (finestre a due ante 1465x1435 mm).",
    
    decco82Feature9Title: "Profili Classe B",
    decco82Feature9Desc: "Conformi alla norma PN-EN 12608-1+A1.",
    
    decco82Feature10Title: "Tecnologia del Vetro Incollato",
    decco82Feature10Desc: "Possibilità di utilizzare la tecnologia del vetro incollato per strutture di grandi dimensioni.",
    
    decco82Feature11Title: "Isolamento Termico Ottimale",
    decco82Feature11Desc: "Coefficiente Uw = 0,76 W/m²K (finestra di riferimento 1230x1480 mm con vetrata 4/18/4/18/4, Ug=0,5 W/m²K e distanziatore Swisspacer V).",
    
    decco82Feature12Title: "Ampia Scelta di Finiture",
    decco82Feature12Desc: "Profili disponibili in un'ampia gamma di colori e rivestimenti effetto legno. Colori fedeli all'originale grazie alla tecnologia di stampa.",

    // Galleria Immagini
    galleryTitle: "Galleria Immagini",
    
    // Decco 82 Alt Text
    decco82_alt1: "Profilo Decco 82 - Vista 1",
    decco82_alt2: "Profilo Decco 82 - Vista 2",
    decco82_alt3: "Profilo Decco 82 - Vista 3",
    decco82_alt4: "Profilo Decco 82 - Dettaglio",
    
    // Decco 83 Alt Text
    decco83_alt1: "Profilo Decco 83 - Vista 1",
    decco83_alt2: "Profilo Decco 83 - Vista 2",
    decco83_alt3: "Profilo Decco 83 - Vista 3",
    decco83_alt4: "Profilo Decco 83 - Dettaglio",

    servicesTitle: "I Nostri Servizi",
    servicesSubtitle: "Servizi professionali per l'industria",
    service1Title: "Ferramenta GU",
    service1Desc: "Sistemi di ferramenta di precisione per l'industria del serramento.",
    service2Title: "Consulenza Tecnica",
    service2Desc: "Supporto specializzato per la scelta dei profili e ottimizzazione tecnica.",
    service3Title: "Taglio su Misura",
    service3Desc: "Taglio preciso dei profili per ridurre gli sprechi e velocizzare il montaggio.",
    service4Title: "Logistica e Consegna",
    service4Desc: "Consegne programmate in tutta Italia dalle nostre sedi strategiche.",
    valuesTitle: "I Nostri Valori",
    value1: "Qualità",
    value2: "Precisione",
    value3: "Affidabilità",
    value4: "Assistenza",
    locationTitle: "Le Nostre Sedi",
    locationSubtitle: "Copertura nazionale con sedi in Toscana e Campania",
    locationLegal: "Sede Legale",
    locationCity: "Sansepolcro (Arezzo)",
    locationRegion: "Toscana, Italia",
    locationOperational: "Sedi Operative",
    locationOp1: "Villa Literno (CE)",
    locationOp2: "Mondragone (CE) - Via Consortile Savone 1",
    locationDescription: "Garantiamo una copertura nazionale efficiente per la fornitura di profili PVC Decco e servizi di ferramenta GU.",
    contactTitle: "Contattaci",
    contactSubtitle: "Siamo a tua disposizione per qualsiasi richiesta",
    contactName: "Nome e Cognome",
    contactEmail: "Indirizzo Email",
    contactPhone: "Telefono",
    contactMessage: "Il tuo Messaggio",
    contactSend: "Invia Richiesta",
    contactInfo: "Informazioni di Contatto",
    footerTagline: "Specialisti in profili PVC Decco e ferramenta GU",
    footerCopyright: "© 2025 Warna Profile S.r.l. - Tutti i diritti riservati",
    footerVat: "P.IVA 02517830515 - C.F. 02517830515",
    footerAddress: "Sede Legale: VIA DEI LORENA 25, 52037 SANSEPOLCRO (AR)",
  },
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navServices: "Services",
    navLocation: "Location",
    navContact: "Contact",
    heroTitle: "WARNA PROFILE S.R.L.",
    heroSubtitle: "Specialists in PVC Decco Profiles and GU Hardware",
    heroDescription: "Supply of high-quality PVC Decco profiles and GU hardware services. Operating offices in Tuscany and Campania.",
    heroButton: "contact us",
    aboutTitle: "About Us",
    aboutSubtitle: "Experts in PVC profiles and hardware",
    aboutText: "Warna Profile S.r.l. is a dynamic company specialized in the sale of PVC Decco profiles and GU hardware services. With headquarters in Sansepolcro (AR) and operational offices in Campania, we offer high-quality products for construction and industry.",
    aboutMission: "Our mission is to provide customized PVC solutions and precision hardware services, ensuring quality, reliability, and specialized technical support.",
    homeProductsTitle: "Featured Products",
    homeProductsSubtitle: "Discover our top solutions for windows and doors",
    discoverMore: "Learn more",
    productsTitle: "Our Products",
    productsSubtitle: "Our complete range of high-performance PVC profiles",
    productDetailBack: "Back to Products",
    featuresTitle: "Main Features",
    backToProducts: "Back to Products",

    // DECCO 83
    productDecco83Title: "Decco 83",
    productDecco83Desc: "The Decco 83 profile represents excellence in thermal parameters. Thanks to the third central gasket and the ability to use wide glazing units with warm edge spacers, it guarantees superior thermal performance that other profiles cannot offer.",
    
    decco83Feature1Title: "7-Chamber System",
    decco83Feature1Desc: "81 mm installation depth with three gaskets, including a central one, for exceptional thermal insulation.",
    
    decco83Feature2Title: "Glazing Versatility",
    decco83Feature2Desc: "Compatibility with multiple types of glazing units with thicknesses from 23 mm to 54.8 mm.",
    
    decco83Feature3Title: "Maximum Brightness",
    decco83Feature3Desc: "Optimal assembly height of profiles providing up to 5% more light compared to other systems in the same class (two-sash windows 1465x1435 mm).",
    
    decco83Feature4Title: "Quality Gaskets",
    decco83Feature4Desc: "Available in grey or black for perfect aesthetics.",
    
    decco83Feature5Title: "Wide Range of Finishes",
    decco83Feature5Desc: "Wide selection of decorative films to customize the appearance of the windows.",
    
    decco83Feature6Title: "Superior Thermal Insulation",
    decco83Feature6Desc: "Uw coefficient = 0.59 W/m²K (reference window 1230x1480 mm with 4/12/4/12/4/12/4 krypton glazing, Ug=0.3 W/m²K and SWISSPACER V Ultimate spacer).",
    
    decco83Feature7Title: "Extended Reinforcement Chambers",
    decco83Feature7Desc: "Increase window rigidity and allow production of all properly designed structures.",
    
    decco83Feature8Title: "Four Core Colors",
    decco83Feature8Desc: "Available in white, anthracite, caramel, and dark brown.",
    
    decco83Feature9Title: "Profiles for Large Openings",
    decco83Feature9Desc: "Includes transition profiles for large sliding doors and balcony doors.",
    
    decco83Feature10Title: "Class A and B Profiles",
    decco83Feature10Desc: "Compliant with PN-EN 12608-1+A1 standard for maximum quality.",
    
    decco83Feature11Title: "Glued Glazing Technology",
    decco83Feature11Desc: "Possibility to use glued glazing technology to increase stability and create large-scale constructions.",
    
    decco83Feature12Title: "Use of Thermal Pads",
    decco83Feature12Desc: "Possibility of using thermal pads to further improve energy performance.",

    // DECCO 82
    productDecco82Title: "Decco 82",
    productDecco82Desc: "The Decco 82 profile represents the latest trends in the window industry. Modern minimalist design gives windows a unique character. Equipped with universal properties, it allows the application of a wide range of glazing - from standard to thickest, from basic to special: warm, soundproof, and safe. The profile stands out for its width and stability.",
    
    decco82Feature1Title: "6-Chamber System",
    decco82Feature1Desc: "81 mm installation depth for high thermal performance.",
    
    decco82Feature2Title: "Wide Glazing Options",
    decco82Feature2Desc: "Possibility of applying many types of glazing with thicknesses from 23 mm to 54.8 mm.",
    
    decco82Feature3Title: "Standard Gaskets",
    decco82Feature3Desc: "Available in grey or black.",
    
    decco82Feature4Title: "Wide Range of Decorative Films",
    decco82Feature4Desc: "Wide choice of coatings for every aesthetic need.",
    
    decco82Feature5Title: "Extended Reinforcement Chambers",
    decco82Feature5Desc: "Increase window rigidity and allow the realization of all properly designed structures.",
    
    decco82Feature6Title: "Four Core Colors",
    decco82Feature6Desc: "Available in white, caramel, anthracite, and dark brown.",
    
    decco82Feature7Title: "Complete Door System",
    decco82Feature7Desc: "Includes a complete system for doors.",
    
    decco82Feature8Title: "Greater Brightness",
    decco82Feature8Desc: "Optimal assembly height providing up to 5% more light compared to other systems in the same class (two-sash windows 1465x1435 mm).",
    
    decco82Feature9Title: "Class B Profiles",
    decco82Feature9Desc: "Compliant with PN-EN 12608-1+A1 standard.",
    
    decco82Feature10Title: "Glued Glazing Technology",
    decco82Feature10Desc: "Possibility to use glued glazing technology for large-scale structures.",
    
    decco82Feature11Title: "Optimal Thermal Insulation",
    decco82Feature11Desc: "Uw coefficient = 0.76 W/m²K (reference window 1230x1480 mm with 4/18/4/18/4 glazing, Ug=0.5 W/m²K and Swisspacer V spacer).",
    
    decco82Feature12Title: "Wide Choice of Finishes",
    decco82Feature12Desc: "Profiles available in a wide range of colors and wood-effect coatings. Colors true to original thanks to printing technology.",

    // Gallery Images
    galleryTitle: "Image Gallery",
    
    // Decco 82 Alt Text
    decco82_alt1: "Decco 82 Profile - View 1",
    decco82_alt2: "Decco 82 Profile - View 2",
    decco82_alt3: "Decco 82 Profile - View 3",
    decco82_alt4: "Decco 82 Profile - Detail",
    
    // Decco 83 Alt Text
    decco83_alt1: "Decco 83 Profile - View 1",
    decco83_alt2: "Decco 83 Profile - View 2",
    decco83_alt3: "Decco 83 Profile - View 3",
    decco83_alt4: "Decco 83 Profile - Detail",

    servicesTitle: "Our Services",
    servicesSubtitle: "Professional services for the industry",
    service1Title: "GU Hardware",
    service1Desc: "Precision hardware systems for the window industry.",
    service2Title: "Technical Consulting",
    service2Desc: "Specialized support for profile selection and technical optimization.",
    service3Title: "Custom Cutting",
    service3Desc: "Precise profile cutting to reduce waste and speed up assembly.",
    service4Title: "Logistics and Delivery",
    service4Desc: "Scheduled deliveries throughout Italy from our strategic locations.",
    valuesTitle: "Our Values",
    value1: "Quality",
    value2: "Precision",
    value3: "Reliability",
    value4: "Assistance",
    locationTitle: "Our Locations",
    locationSubtitle: "National coverage with offices in Tuscany and Campania",
    locationLegal: "Headquarters",
    locationCity: "Sansepolcro (Arezzo)",
    locationRegion: "Tuscany, Italy",
    locationOperational: "Operational Offices",
    locationOp1: "Villa Literno (CE)",
    locationOp2: "Mondragone (CE) - Via Consortile Savone 1",
    locationDescription: "We guarantee efficient national coverage for the supply of PVC Decco profiles and GU hardware services.",
    contactTitle: "Contact Us",
    contactSubtitle: "We are at your disposal for any request",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone",
    contactMessage: "Your Message",
    contactSend: "Send Request",
    contactInfo: "Contact Information",
    footerTagline: "Specialists in PVC Decco profiles and GU hardware",
    footerCopyright: "© 2025 Warna Profile S.r.l. - All rights reserved",
    footerVat: "VAT 02517830515 - Tax Code 02517830515",
    footerAddress: "Headquarters: VIA DEI LORENA 25, 52037 SANSEPOLCRO (AR)",
  }
};

// --- DATI PRODOTTI ---
export const productsData = [
  {
    id: 'decco82',
    titleKey: 'productDecco82Title',
    descriptionKey: 'productDecco82Desc',
    previewImage: '/products/decco82-1.webp',
    images: [
      { src: '/products/decco82-1.webp', altKey: 'decco82_alt1' },
      { src: '/products/decco82-2.webp', altKey: 'decco82_alt2' },
      { src: '/products/decco82-3.webp', altKey: 'decco82_alt3' },
      { src: '/products/decco.webp', altKey: 'decco82_alt4' },
    ],
    features: [
      { icon: Layers, titleKey: 'decco82Feature1Title', descKey: 'decco82Feature1Desc' },
      { icon: Maximize2, titleKey: 'decco82Feature2Title', descKey: 'decco82Feature2Desc' },
      { icon: ShieldCheck, titleKey: 'decco82Feature3Title', descKey: 'decco82Feature3Desc' },
      { icon: Palette, titleKey: 'decco82Feature4Title', descKey: 'decco82Feature4Desc' },
      { icon: Lock, titleKey: 'decco82Feature5Title', descKey: 'decco82Feature5Desc' },
      { icon: Palette, titleKey: 'decco82Feature6Title', descKey: 'decco82Feature6Desc' },
      { icon: Building, titleKey: 'decco82Feature7Title', descKey: 'decco82Feature7Desc' },
      { icon: Lightbulb, titleKey: 'decco82Feature8Title', descKey: 'decco82Feature8Desc' },
      { icon: CheckCircle2, titleKey: 'decco82Feature9Title', descKey: 'decco82Feature9Desc' },
      { icon: Ruler, titleKey: 'decco82Feature10Title', descKey: 'decco82Feature10Desc' },
      { icon: Thermometer, titleKey: 'decco82Feature11Title', descKey: 'decco82Feature11Desc' },
      { icon: Palette, titleKey: 'decco82Feature12Title', descKey: 'decco82Feature12Desc' },
    ],
  },
  {
    id: 'decco83',
    titleKey: 'productDecco83Title',
    descriptionKey: 'productDecco83Desc',
    previewImage: '/products/decco83-1.webp',
    images: [
      { src: '/products/decco83-1.webp', altKey: 'decco83_alt1' },
      { src: '/products/decco83-2.webp', altKey: 'decco83_alt2' },
      { src: '/products/decco83-3.webp', altKey: 'decco83_alt3' },
      { src: '/products/decco83.webp', altKey: 'decco83_alt4' },
    ],
    features: [
      { icon: Layers, titleKey: 'decco83Feature1Title', descKey: 'decco83Feature1Desc' },
      { icon: Maximize2, titleKey: 'decco83Feature2Title', descKey: 'decco83Feature2Desc' },
      { icon: Lightbulb, titleKey: 'decco83Feature3Title', descKey: 'decco83Feature3Desc' },
      { icon: ShieldCheck, titleKey: 'decco83Feature4Title', descKey: 'decco83Feature4Desc' },
      { icon: Palette, titleKey: 'decco83Feature5Title', descKey: 'decco83Feature5Desc' },
      { icon: Thermometer, titleKey: 'decco83Feature6Title', descKey: 'decco83Feature6Desc' },
      { icon: Lock, titleKey: 'decco83Feature7Title', descKey: 'decco83Feature7Desc' },
      { icon: Palette, titleKey: 'decco83Feature8Title', descKey: 'decco83Feature8Desc' },
      { icon: Building, titleKey: 'decco83Feature9Title', descKey: 'decco83Feature9Desc' },
      { icon: CheckCircle2, titleKey: 'decco83Feature10Title', descKey: 'decco83Feature10Desc' },
      { icon: Ruler, titleKey: 'decco83Feature11Title', descKey: 'decco83Feature11Desc' },
      { icon: Wind, titleKey: 'decco83Feature12Title', descKey: 'decco83Feature12Desc' },
    ],
  },
];

// --- COMPONENTI UI CONDIVISI ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
    {children}
  </div>
);

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

// --- HOMEPAGE COMPONENT ---
interface HomePageProps {
  t: (key: string) => string;
  language: 'it' | 'en';
  scrollToSection: (section: string) => void;
  navigateToProductDetail: (productId: string) => void;
  activeSection: string;
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ t, language, scrollToSection, navigateToProductDetail, activeSection, handleContactSubmit, isSubmitting }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 pt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-down">
            <img 
              src="/logo.png" 
              alt="Warna Profile Logo" 
              className="h-24 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-2xl inline-block shadow-2xl border border-white/20 hidden">
              WARNA PROFILE
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            {t('heroTitle')}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-semibold animate-fade-in-up animation-delay-200">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
            {t('heroDescription')}
          </p>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600 flex items-center gap-3 mx-auto uppercase"
          >
            {t('heroButton')} 
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* --- CHI SIAMO SECTION --- */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 md:p-10">
              <Factory size={48} className="text-blue-600 mb-6" />
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                {t('aboutText')}
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-slate-800 font-semibold italic">
                  {t('aboutMission')}
                </p>
              </div>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, titleKey: 'value1' },
                { icon: Ruler, titleKey: 'value2' },
                { icon: ShieldCheck, titleKey: 'value3' },
                { icon: Phone, titleKey: 'value4' },
              ].map((value, index) => (
                <Card key={index} className="p-6 text-center group hover:bg-blue-50 transition-colors">
                  <value.icon size={40} className="mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-800">{t(value.titleKey)}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODOTTI IN EVIDENZA (HOMEPAGE) --- */}
      <section id="home-products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('homeProductsTitle')} subtitle={t('homeProductsSubtitle')} />
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {productsData.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img 
                    src={product.previewImage} 
                    alt={t(product.titleKey)}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{t(product.titleKey)}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {t(product.descriptionKey)}
                  </p>
                  <button 
                    onClick={() => navigateToProductDetail(product.id)}
                    className="group/btn text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
                  >
                    {t('discoverMore')} 
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/products')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              {t('productsTitle')} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVIZI SECTION --- */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('servicesTitle')} subtitle={t('servicesSubtitle')} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, titleKey: 'service1Title', descKey: 'service1Desc' },
              { icon: CheckCircle2, titleKey: 'service2Title', descKey: 'service2Desc' },
              { icon: Ruler, titleKey: 'service3Title', descKey: 'service3Desc' },
              { icon: Truck, titleKey: 'service4Title', descKey: 'service4Desc' },
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-2xl transition-all">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <service.icon size={36} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-600">{t(service.descKey)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- DOVE SIAMO SECTION --- */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('locationTitle')} subtitle={t('locationSubtitle')} />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center border-t-4 border-blue-600">
              <Home size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t('locationLegal')}</h3>
              <p className="text-slate-700 font-semibold mb-2">{t('locationCity')}</p>
              <p className="text-slate-600 text-sm">{t('locationRegion')}</p>
            </Card>
            
            <Card className="md:col-span-2 p-8 bg-blue-50 border-t-4 border-blue-600">
              <Building size={48} className="mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">{t('locationOperational')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="font-semibold">{t('locationOp1')}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="font-semibold">{t('locationOp2')}</span>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-white">
            <p className="text-center text-slate-700 text-lg">
              {t('locationDescription')}
            </p>
          </Card>
        </div>
      </section>

      {/* --- CONTATTI SECTION --- */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('contactTitle')} subtitle={t('contactSubtitle')} />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('contactInfo')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{t('locationLegal')}</p>
                    <p className="text-slate-600 text-sm">VIA DEI LORENA 25</p>
                    <p className="text-slate-600 text-sm">52037 SANSEPOLCRO (AR)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Antonio Diomaiuto</p>
                    <a href="tel:+393938799433" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +39 393 8799433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Vincenzo Bocchino</p>
                    <a href="tel:+39335269718" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +39 335 269718
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Email</p>
                    <a href="mailto:info@warnaprofile.it" className="text-blue-600 hover:text-blue-800 transition-colors">
                      info@warnaprofile.it
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 md:p-10">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contactName')} *
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contactEmail')} *
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="mario.rossi@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contactPhone')}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="+39 123 4567890"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contactMessage')} *
                  </label>
                  <textarea 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder={language === 'it' 
                      ? "Scrivi qui il tuo messaggio..." 
                      : "Write your message here..."
                    }
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {language === 'it' ? 'Invio in corso...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {t('contactSend')} <ChevronRight size={20} />
                    </>
                  )}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const t = (key: string) => (translations[language] as any)[key] || key;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'services', 'location', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      setTimeout(() => {
        scrollToSection((location.state as any).scrollTo);
      }, 100);
    }
  }, [location]);

  const navigateToProductDetail = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(language === 'it' 
      ? 'Grazie per il tuo messaggio! Ti risponderemo al più presto.' 
      : 'Thank you for your message! We will reply as soon as possible.'
    );
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* --- NAVBAR (GLOBAL) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Warna Profile Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm hidden">
                WARNA PROFILE
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {['home', 'about', 'products', 'services', 'location', 'contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'home' ? '/' : (item === 'products' ? '/products' : `/#${item}`)}
                  onClick={(e) => {
                    if (item === 'products') {
                      // Lascio che Link gestisca la navigazione
                    } else {
                      e.preventDefault();
                      scrollToSection(item);
                    }
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === item 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {t(`nav${item.charAt(0).toUpperCase() + item.slice(1)}`)}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                >
                  <Globe size={18} />
                  <span>{language.toUpperCase()}</span>
                </button>
                
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-100 py-1 animate-in fade-in slide-in-from-top-2 z-50">
                    <button 
                      onClick={() => { setLanguage('it'); setLangDropdownOpen(false); }} 
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'it' ? 'text-blue-600 font-bold bg-blue-50' : 'text-slate-700'}`}
                    >
                      Italiano
                    </button>
                    <button 
                      onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }} 
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'en' ? 'text-blue-600 font-bold bg-blue-50' : 'text-slate-700'}`}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              <button 
                className="md:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {['home', 'about', 'products', 'services', 'location', 'contact'].map((item) => (
              <Link
                key={item}
                to={item === 'home' ? '/' : (item === 'products' ? '/products' : `/#${item}`)}
                onClick={(e) => {
                  if (item === 'products') {
                    setIsMenuOpen(false);
                  } else {
                    e.preventDefault();
                    scrollToSection(item);
                  }
                }}
                className={`text-left text-lg font-medium py-2 px-2 rounded-lg ${activeSection === item ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t(`nav${item.charAt(0).toUpperCase() + item.slice(1)}`)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA (ROUTES) --- */}
      <Routes>
        <Route 
          path="/" 
          element={<HomePage {...{t, language, scrollToSection, navigateToProductDetail, activeSection, handleContactSubmit, isSubmitting}} />} 
        />
        <Route path="/products" element={<ProductsPage {...{language}} />} />
        <Route path="/products/:productId" element={<ProductDetailPage {...{language}} />} />
      </Routes>

      {/* --- FOOTER (GLOBAL) --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
            <div>
              <img 
                src="/logo.png" 
                alt="Warna Profile Logo" 
                className="h-14 w-auto object-contain mb-4 mx-auto md:mx-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg mb-4 inline-block hidden">
                WARNA PROFILE
              </div>
              <p className="text-slate-500 text-sm max-w-md">
                {t('footerTagline')}
              </p>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 text-sm">
              <p>{t('footerCopyright')}</p>
              <p className="text-slate-500">{t('footerVat')}</p>
              <p className="text-slate-500 text-[11px] max-w-xs">{t('footerAddress')}</p>
              
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-1.5">
                <p className="text-slate-400 text-xs font-semibold mb-1">
                  {language === 'it' ? 'Contatti' : 'Contacts'}
                </p>
                <p className="text-slate-500 text-xs">
                  Antonio Diomaiuto: <a href="tel:+393938799433" className="text-blue-400 hover:text-blue-300">+39 393 8799433</a>
                </p>
                <p className="text-slate-500 text-xs">
                  Vincenzo Bocchino: <a href="tel:+39335269718" className="text-blue-400 hover:text-blue-300">+39 335 269718</a>
                </p>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <p className="text-slate-400 text-xs font-semibold mb-1">
                  {language === 'it' ? 'Sedi Operative' : 'Operational Offices'}
                </p>
                <p className="text-slate-500 text-[11px]">Mondragone (CE) - Via Consortile Savone 1</p>
                <p className="text-slate-500 text-[11px]">Villa Literno (CE)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
            <p>
              {language === 'it' 
                ? 'Specialisti in profili PVC Decco e sistemi di ferramenta GU per applicazioni industriali e residenziali.'
                : 'Specialists in PVC Decco profiles and GU hardware systems for industrial and residential applications.'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}