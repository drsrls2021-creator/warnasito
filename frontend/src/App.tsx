// src/App.tsx
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Factory, Package, Ruler, ShieldCheck, Menu, X, Globe, ChevronRight, CheckCircle2, Truck, Home, Building, ArrowRight, Check, Maximize2, Lightbulb, Palette, Thermometer } from 'lucide-react';
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
    productsSubtitle: "La nostra gamma completa di profili PVC",
    productDetailBack: "Torna ai Prodotti",
    featuresTitle: "Caratteristiche Principali",

    productDecco83Title: "Profili PVC Decco 83",
    productDecco83Desc: "Il profilo Decco 83 è un profilo con parametri termici estremi. Una terza guarnizione ed ampi pacchetti di vetri con utilizzo della canalina calda assicurano dei parametri e la prestazione termica che altri profili non sono in grado di soddisfare.",
    decco83Feature1Title: "Sistema a 7-camere", decco83Feature1Desc: "Con profondità di incastro di 81 mm e una terza guarnizione centrale per un isolamento superiore.",
    decco83Feature2Title: "Vetrature Versatili", decco83Feature2Desc: "Possibilità di utilizzare vari tipi di vetrature da 23 mm fino a 54,8 mm.",
    decco83Feature3Title: "Luminosità Ottimale", decco83Feature3Desc: "Altezza ottimale della piegatura del profilo che permette di ottenere fino al 5% di più di luce rispetto ad altri sistemi della sua classe.",
    decco83Feature4Title: "Guarnizioni", decco83Feature4Desc: "Disponibile con guarnizioni di colore grigio o nero.",
    decco83Feature5Title: "Finiture", decco83Feature5Desc: "Una vasta gamma di pellicole di rivestimento per personalizzazioni estetiche.",
    decco83Feature6Title: "Isolamento Termico (Uw)", decco83Feature6Desc: "Uw = 0,59 W/m²K per un infisso di riferimento (1230x1480 mm, vetri 52mm 4/12/4/12/4/12/4 Ug=0.3 W/m²K, distanziatore SWISSPACER ULTIMATE e inserto termico).",
    decco83Feature7Title: "Rigidità e Stabilità", decco83Feature7Desc: "Camere ampliate per rinforzi che aumentano la rigidità degli infissi, permettendo qualsiasi costruzione ben progettata.",
    decco83Feature8Title: "Tecnologia di Produzione", decco83Feature8Desc: "Sviluppata da ingegneri Decco in collaborazione con il leader mondiale Greiner.",
    decco83Feature9Title: "Colori Anima", decco83Feature9Desc: "Disponibile in tre colori dell'anima: bianco, caramello e marrone scuro, abbinata al colore della pellicola decorativa.",
    decco83Feature10Title: "Vetro Legato", decco83Feature10Desc: "Possibilità di utilizzare la tecnologia di vetro legato per creare strutture sovradimensionate.",
    decco83Feature11Title: "Porte Scorrevoli", decco83Feature11Desc: "Include profili per porte traslanti scorrevoli e porte balcone di grandi dimensioni.",
    decco83Feature12Title: "Isolamento Extra", decco83Feature12Desc: "Possibilità di utilizzare un inserto termico in polistirolo.",

    productDecco82Title: "Profili PVC Decco 82",
    productDecco82Desc: "Profilo nel sistema Decco 82 è una scelta ideale per coloro che cercano altissimi parametri di termoisolazione adeguati ai nuovissimi requisiti di costruzione, ed eccellente design ad un prezzo ragionevole.",
    decco82Feature1Title: "Sistema a 6 camere", decco82Feature1Desc: "Con profondità di incastro di 81 mm e un'ottima efficienza.",
    decco82Feature2Title: "Vetrature Flessibili", decco82Feature2Desc: "Possibilità di utilizzare vari tipi di vetrature con spessore da 23 mm fino a 54,8 mm.",
    decco82Feature3Title: "Luminosità Aumentata", decco82Feature3Desc: "Altezza ottimale della piegatura del profilo che permette di ottenere fino al 5% di più di luce.",
    decco82Feature4Title: "Guarnizioni Standard", decco82Feature4Desc: "Disponibile con guarnizioni di colore grigio o nero.",
    decco82Feature5Title: "Ampia Gamma Finiture", decco82Feature5Desc: "Una vasta gamma di pellicole di rivestimento per ogni esigenza estetica.",
    decco82Feature6Title: "Profili Classe B", decco82Feature6Desc: "Realizzati secondo lo standard PN-EN 12608: -1:2016-04.",
    decco82Feature7Title: "Isolamento Termico (Uw)", decco82Feature7Desc: "Uw = 0,77 W/m²K per un infisso di riferimento (1230x1480 mm, vetrate 48mm).",
    decco82Feature8Title: "Rigidità Strutturale", decco82Feature8Desc: "Camere ampliate degli rinforzi che aumentano la rigidità degli infissi e permettono di realizzare qualsiasi costruzione.",
    decco82Feature9Title: "Tecnologia Avanzata", decco82Feature9Desc: "Tecnologia di produzione sviluppata congiuntamente con il leader mondiale Greiner.",
    decco82Feature10Title: "Colori Anima", decco82Feature10Desc: "Disponibile in tre colori dell'anima: bianco, caramello e marrone scuro, sempre abbinato al colore della pellicola.",
    decco82Feature11Title: "Vetro Legato", decco82Feature11Desc: "Con questo sistema è possibile utilizzare la tecnologia di vetro legato che permette di creare strutture sovradimensionate.",
    decco82Feature12Title: "Sistema Completo Porte", decco82Feature12Desc: "Comprende il sistema completo di porte.",
    decco82Feature13Title: "Inserto Termico", decco82Feature13Desc: "Possibilità di utilizzare un inserto termico in polistirolo.",

    galleryTitle: "Galleria Immagini",
    decco83_alt1: "Dettaglio del profilo Decco 83",
    decco83_alt2: "Finestra realizzata con Decco 83",
    decco83_alt3: "Sezione del profilo Decco 83",
    decco83_alt4: "Esempio di installazione Decco 83",
    decco82_alt1: "Angolo di un serramento Decco 82",
    decco82_alt2: "Profilo Decco 82 in esposizione",
    decco82_alt3: "Porta finestra con profili Decco 82",
    decco82_alt4: "Dettaglio guarnizioni Decco 82",

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
    // Le traduzioni in inglese sono state omesse per brevità, ma andrebbero aggiornate
  }
};

// --- DATI PRODOTTI ---
export const productsData = [
  {
    id: 'decco83',
    titleKey: 'productDecco83Title',
    descriptionKey: 'productDecco83Desc',
    previewImage: '/products/decco83-1.webp',
    mainImage: '/products/decco83-main.webp',
    features: [
      { icon: Maximize2, titleKey: 'decco83Feature1Title', descKey: 'decco83Feature1Desc' },
      { icon: Ruler, titleKey: 'decco83Feature2Title', descKey: 'decco83Feature2Desc' },
      { icon: Lightbulb, titleKey: 'decco83Feature3Title', descKey: 'decco83Feature3Desc' },
      { icon: ShieldCheck, titleKey: 'decco83Feature4Title', descKey: 'decco83Feature4Desc' },
      { icon: Palette, titleKey: 'decco83Feature5Title', descKey: 'decco83Feature5Desc' },
      { icon: Thermometer, titleKey: 'decco83Feature6Title', descKey: 'decco83Feature6Desc' },
      { icon: Building, titleKey: 'decco83Feature7Title', descKey: 'decco83Feature7Desc' },
      { icon: Factory, titleKey: 'decco83Feature8Title', descKey: 'decco83Feature8Desc' },
      { icon: Palette, titleKey: 'decco83Feature9Title', descKey: 'decco83Feature9Desc' },
      { icon: Package, titleKey: 'decco83Feature10Title', descKey: 'decco83Feature10Desc' },
      { icon: Truck, titleKey: 'decco83Feature11Title', descKey: 'decco83Feature11Desc' },
      { icon: Check, titleKey: 'decco83Feature12Title', descKey: 'decco83Feature12Desc' },
    ],
    images: [
      { src: '/products/decco83-1.webp', altKey: 'decco83_alt1' },
      { src: '/products/decco83-2.webp', altKey: 'decco83_alt2' },
      { src: '/products/decco83-3.webp', altKey: 'decco83_alt3' },
      { src: '/products/decco83-4.webp', altKey: 'decco83_alt4' },
    ]
  },
  {
    id: 'decco82',
    titleKey: 'productDecco82Title',
    descriptionKey: 'productDecco82Desc',
    previewImage: '/products/decco82-1.webp',
    mainImage: '/products/decco82-main.webp',
    features: [
      { icon: Maximize2, titleKey: 'decco82Feature1Title', descKey: 'decco82Feature1Desc' },
      { icon: Ruler, titleKey: 'decco82Feature2Title', descKey: 'decco82Feature2Desc' },
      { icon: Lightbulb, titleKey: 'decco82Feature3Title', descKey: 'decco82Feature3Desc' },
      { icon: ShieldCheck, titleKey: 'decco82Feature4Title', descKey: 'decco82Feature4Desc' },
      { icon: Palette, titleKey: 'decco82Feature5Title', descKey: 'decco82Feature5Desc' },
      { icon: CheckCircle2, titleKey: 'decco82Feature6Title', descKey: 'decco82Feature6Desc' },
      { icon: Thermometer, titleKey: 'decco82Feature7Title', descKey: 'decco82Feature7Desc' },
      { icon: Building, titleKey: 'decco82Feature8Title', descKey: 'decco82Feature8Desc' },
      { icon: Factory, titleKey: 'decco82Feature9Title', descKey: 'decco82Feature9Desc' },
      { icon: Palette, titleKey: 'decco82Feature10Title', descKey: 'decco82Feature10Desc' },
      { icon: Package, titleKey: 'decco82Feature11Title', descKey: 'decco82Feature11Desc' },
      { icon: Home, titleKey: 'decco82Feature12Title', descKey: 'decco82Feature12Desc' },
      { icon: Check, titleKey: 'decco82Feature13Title', descKey: 'decco82Feature13Desc' },
    ],
    images: [
      { src: '/products/decco82-1.webp', altKey: 'decco82_alt1' },
      { src: '/products/decco82-2.webp', altKey: 'decco82_alt2' },
      { src: '/products/decco82-3.webp', altKey: 'decco82_alt3' },
      { src: '/products/decco82-4.webp', altKey: 'decco82_alt4' },
    ]
  },
];

// --- COMPONENTI UI ---
export const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-12 md:mb-16 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">{title}</h2>
    <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-4 rounded-full"></div>
    <p className="text-slate-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 ${className}`}>
    {children}
  </div>
);

// --- COMPONENTE HOMEPAGE ---
interface HomePageProps {
  t: (key: string) => string;
  language: 'it' | 'en';
  scrollToSection: (sectionId: string) => void;
  navigateToProductDetail: (productId: string) => void;
  activeSection: string;
  handleContactSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ t, language, scrollToSection, navigateToProductDetail, activeSection, handleContactSubmit, isSubmitting }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight animate-in slide-in-from-bottom-4 duration-700">
            {t('heroTitle')}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-blue-100 max-w-3xl mx-auto animate-in slide-in-from-bottom-6 duration-700 delay-100">
            {t('heroSubtitle')}
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
            {t('heroDescription')}
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-in zoom-in duration-500 delay-300 flex items-center gap-2 mx-auto"
          >
            {t('heroButton')}
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-slate-600 leading-relaxed text-justify">
                {t('aboutText')}
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <p className="font-medium text-blue-900 italic">"{t('aboutMission')}"</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: 'value1' },
                { icon: Ruler, label: 'value2' },
                { icon: Package, label: 'value3' },
                { icon: Factory, label: 'value4' }
              ].map((val, idx) => (
                <Card key={idx} className="p-6 flex flex-col items-center justify-center text-center group hover:border-blue-200">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <val.icon size={28} />
                  </div>
                  <h3 className="font-semibold text-slate-800">{t(val.label)}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* --- NUOVA SEZIONE PRODOTTI IN HOME --- */}
      <section id="home-products" className="py-20 md:py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('homeProductsTitle')} subtitle={t('homeProductsSubtitle')} />
          <div className="grid md:grid-cols-2 gap-8">
            {productsData.map((product) => (
              <div key={`preview-${product.id}`} onClick={() => navigateToProductDetail(product.id)} className="cursor-pointer group">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="overflow-hidden h-64 flex items-center justify-center bg-slate-50"> 
                    <img 
                      src={product.previewImage} 
                      alt={`Anteprima ${t(product.titleKey)}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{t(product.titleKey)}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4 flex-grow">
                      {t(product.descriptionKey).substring(0, 120)}...
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <span className="flex items-center text-blue-600 font-bold group-hover:underline">
                        {t('discoverMore')}
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 md:py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('servicesTitle')} subtitle={t('servicesSubtitle')} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Ruler, titleKey: 'service1Title', descKey: 'service1Desc' },
              { icon: Factory, titleKey: 'service2Title', descKey: 'service2Desc' },
              { icon: Package, titleKey: 'service3Title', descKey: 'service3Desc' },
              { icon: Truck, titleKey: 'service4Title', descKey: 'service4Desc' }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {t(service.descKey)}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:underline">
                  Info <ChevronRight size={16} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- LOCATION SECTION --- */}
      <section id="location" className="py-20 md:py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('locationTitle')} subtitle={t('locationSubtitle')} />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{t('locationLegal')}</h3>
                    <p className="text-lg text-slate-700">{t('locationCity')}</p>
                    <p className="text-slate-500">{t('locationRegion')}</p>
                    <p className="text-sm text-slate-400 mt-1">VIA DEI LORENA 25, 52037</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">{t('locationOperational')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <Building size={20} className="text-blue-600" />
                      <span className="text-slate-700">{t('locationOp1')}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <Building size={20} className="text-blue-600" />
                      <span className="text-slate-700">{t('locationOp2')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-100">
                   <p className="text-slate-600 leading-relaxed italic">
                     "{t('locationDescription')}"
                   </p>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   language === 'it' ? 'Consegne Nazionali' : 'National Deliveries',
                   language === 'it' ? 'Supporto Tecnico' : 'Technical Support',
                   language === 'it' ? 'Preventivi Gratuiti' : 'Free Quotes',
                   language === 'it' ? 'Materiali Certificati' : 'Certified Materials'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-2 text-slate-600">
                     <CheckCircle2 size={18} className="text-green-500" />
                     <span className="text-sm font-medium">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.1400%2C43.5700%2C12.1500%2C43.5800&layer=mapnik&marker=43.575%2C12.145"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Warna Profile Location Map"
                className="rounded-2xl"
              />
              <div className="mt-4 text-center">
                <a 
                  href="https://www.openstreetmap.org/?mlat=43.575&mlon=12.145#map=16/43.575/12.145" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {language === 'it' ? 'Visualizza mappa ingrandita' : 'View larger map'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title={t('contactTitle')} subtitle={t('contactSubtitle')} />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10">
                <form 
                  onSubmit={handleContactSubmit}
                  action="https://formspree.io/f/TUO_ID_QUI" 
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">{t('contactName')} *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder={language === 'it' ? "Mario Rossi" : "John Smith"}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">{t('contactEmail')} *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactPhone')}</label>
                    <input 
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder={language === 'it' ? "+39 333 1234567" : "+1 234 567 8900"}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactMessage')} *</label>
                    <textarea 
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none min-h-[150px] resize-y"
                      placeholder={language === 'it' ? "Descrivi la tua richiesta..." : "Describe your request..."}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (language === 'it' ? 'Invio in corso...' : 'Sending...') 
                      : t('contactSend')
                    }
                  </button>
                  
                  <p className="text-sm text-slate-500 text-center">
                    {language === 'it' 
                      ? 'Ti risponderemo entro 24 ore lavorative.' 
                      : 'We will respond within 24 business hours.'
                    }
                  </p>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
               <div className="bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                 <h3 className="text-2xl font-bold mb-8 border-b border-blue-700 pb-4">{t('contactInfo')}</h3>
                 <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Mail size={20} />
                     </div>
                     <div>
                       <a href="mailto:warnaprofile@gmail.com" className="text-blue-100 hover:text-white transition-colors block">
                         warnaprofile@gmail.com
                       </a>
                       <span className="text-sm text-blue-300">
                         {language === 'it' ? 'Email principale' : 'Main email'}
                       </span>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Phone size={20} />
                     </div>
                     <div>
                       <a href="tel:+393533881267" className="text-blue-100 hover:text-white transition-colors block">
                         +39 353 3881267
                       </a>
                       <span className="text-sm text-blue-300">
                         {language === 'it' ? 'Ufficio commerciale' : 'Sales office'}
                       </span>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Phone size={20} />
                     </div>
                     <div>
                       <a href="tel:+393938799433" className="text-blue-100 hover:text-white transition-colors block">
                         +39 393 8799433
                       </a>
                       <span className="text-sm text-blue-300">
                         Antonio Diomaiuto
                       </span>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Phone size={20} />
                     </div>
                     <div>
                       <a href="tel:+39335269718" className="text-blue-100 hover:text-white transition-colors block">
                         +39 335 269718
                       </a>
                       <span className="text-sm text-blue-300">
                         Vincenzo Bocchino
                       </span>
                     </div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <span className="text-blue-100 block">{t('locationCity')}</span>
                       <span className="text-sm text-blue-300">
                         {language === 'it' ? 'Sede Legale' : 'Registered Office'}
                       </span>
                     </div>
                   </div>
                 </div>

                 <div className="mt-12">
                   <h4 className="font-bold text-lg mb-4 text-blue-200">
                     {language === 'it' ? 'Orari di Apertura' : 'Opening Hours'}
                   </h4>
                   <div className="space-y-2 text-sm text-blue-100">
                     <div className="flex justify-between">
                       <span>{language === 'it' ? 'Lun - Ven' : 'Mon - Fri'}</span>
                       <span>08:30 - 18:30</span>
                     </div>
                     <div className="flex justify-between">
                       <span>{language === 'it' ? 'Sabato' : 'Saturday'}</span>
                       <span>09:00 - 13:00</span>
                     </div>
                   </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-blue-800 text-sm text-blue-300">
                   <p>P.IVA / VAT: 02517830515</p>
                   <p>C.F. / Tax Code: 02517830515</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --- APP PRINCIPALE CHE GESTISCE IL ROUTING ---
export default function App() {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'home-products', 'services', 'location', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      } else {
        if (location.pathname.startsWith('/products')) {
          setActiveSection('products');
        } else {
          setActiveSection('');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const t = (key: string) => (translations[language] as any)[key] || key;
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const navigateToProductDetail = (productId: string) => {
    setIsMenuOpen(false);
    navigate(`/products/${productId}`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    const formspreeAction = form.getAttribute('action');
    if (!formspreeAction || formspreeAction.includes('TUO_ID_QUI')) {
      const subject = language === 'it' ? 'Richiesta Preventivo da Sito Web' : 'Quote Request from Website';
      const body = `${message}\n\n---\nNome/Name: ${name}\nEmail: ${email}\nTelefono/Phone: ${phone}`;
      
      window.location.href = `mailto:warnaprofile@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      form.reset();
    } else {
      form.submit();
    }
    
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <Link to="/" onClick={() => scrollToSection('home')} className="h-12 md:h-16 w-auto flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Warna Profile Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base hidden">
                  WARNA PROFILE
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
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
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item ? 'text-blue-700 font-semibold' : 'text-slate-600'}`}
                >
                  {t(`nav${item.charAt(0).toUpperCase() + item.slice(1)}`)}
                </Link>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors"
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