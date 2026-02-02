import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Factory, Package, Ruler, ShieldCheck, Menu, X, Globe, ChevronRight, CheckCircle2, Truck, Home, Building } from 'lucide-react';

// --- TRADUZIONI ---
const translations = {
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
    heroButton: "Richiedi Preventivo",
    aboutTitle: "Chi Siamo",
    aboutSubtitle: "Esperti nel settore dei profili PVC e ferramenta",
    aboutText: "Warna Profile S.r.l. è un'azienda dinamica specializzata nella vendita di profili in PVC Decco e servizi di ferramenta GU. Con sede legale a Sansepolcro (AR) e sedi operative in Campania, offriamo prodotti di alta qualità per l'edilizia e l'industria.",
    aboutMission: "La nostra missione è fornire soluzioni personalizzate in PVC e servizi di ferramenta di precisione, garantendo qualità, affidabilità e supporto tecnico specializzato.",
    productsTitle: "I Nostri Prodotti",
    productsSubtitle: "Profili PVC Decco e materiali di alta qualità",
    product1Title: "Profili PVC Decco",
    product1Desc: "Gamma Decco 83: profili ad alte prestazioni termiche per serramenti moderni e divisori industriali.",
    product2Title: "Accessori PVC",
    product2Desc: "Componenti complementari per l'installazione: guarnizioni, raccordi e sistemi di fissaggio.",
    product3Title: "Materiali Speciali",
    product3Desc: "Soluzioni su misura per progetti complessi e applicazioni industriali specifiche.",
    product4Title: "Forniture Industriali",
    product4Desc: "Materiali certificati per l'industria con gestione logistica dedicata.",
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
    locationOp2: "Mondragone (CE)",
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
    heroSubtitle: "Specialists in PVC Decco Profiles and GU Ferramenta",
    heroDescription: "Supply of high-quality PVC Decco profiles and GU ferramenta services.",
    heroButton: "Request Quote",
    aboutTitle: "About Us",
    aboutSubtitle: "Experts in PVC profiles and industrial ferramenta",
    aboutText: "Warna Profile S.r.l. specializes in PVC Decco profiles and GU ferramenta services with offices in Tuscany and Campania.",
    aboutMission: "To provide customized PVC solutions ensuring quality and specialized support.",
    productsTitle: "Our Products",
    productsSubtitle: "PVC Decco profiles and high-quality materials",
    product1Title: "PVC Decco Profiles",
    product1Desc: "Decco 83 range: high thermal performance profiles for modern windows.",
    product2Title: "PVC Accessories",
    product2Desc: "Gaskets, fittings and fastening systems for profile installation.",
    product3Title: "Special Materials",
    product3Desc: "Custom solutions for complex projects and industrial needs.",
    product4Title: "Industrial Supplies",
    product4Desc: "Certified materials with dedicated logistics management.",
    servicesTitle: "Our Services",
    servicesSubtitle: "Professional services for industry",
    service1Title: "GU Ferramenta",
    service1Desc: "Precision hardware systems for the window industry.",
    service2Title: "Technical Consulting",
    service2Desc: "Specialized support for profile selection and technical optimization.",
    service3Title: "Custom Cutting",
    service3Desc: "Precise profile cutting to reduce waste and speed up assembly.",
    service4Title: "Logistics and Delivery",
    service4Desc: "Scheduled deliveries throughout Italy from our strategic hubs.",
    valuesTitle: "Our Values",
    value1: "Quality",
    value2: "Precision",
    value3: "Reliability",
    value4: "Support",
    locationTitle: "Our Offices",
    locationSubtitle: "National coverage with offices in Tuscany and Campania",
    locationLegal: "Registered Office",
    locationCity: "Sansepolcro (Arezzo)",
    locationRegion: "Tuscany, Italy",
    locationOperational: "Operational Offices",
    locationOp1: "Villa Literno (CE)",
    locationOp2: "Mondragone (CE)",
    locationDescription: "Efficient national coverage for PVC Decco profiles and GU ferramenta.",
    contactTitle: "Contact Us",
    contactSubtitle: "We are at your disposal",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone",
    contactMessage: "Your Message",
    contactSend: "Send Request",
    contactInfo: "Contact Information",
    footerTagline: "Specialists in PVC Decco profiles and GU ferramenta",
    footerCopyright: "© 2025 Warna Profile S.r.l. - All rights reserved",
    footerVat: "VAT ID 02517830515",
    footerAddress: "Registered Office: VIA DEI LORENA 25, 52037 SANSEPOLCRO (AR)",
  }
};

// --- COMPONENTI UI ---

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-12 md:mb-16 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">{title}</h2>
    <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-4 rounded-full"></div>
    <p className="text-slate-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 ${className}`}>
    {children}
  </div>
);

// --- APP PRINCIPALE ---

export default function App() {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'products', 'services', 'location', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: string) => (translations[language] as any)[key] || key;
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/logo.png" alt="Warna Profile Logo" className="h-10 md:h-12 w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'products', 'services', 'location', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item ? 'text-blue-700 font-semibold' : 'text-slate-600'}`}
                >
                  {t(`nav${item.charAt(0).toUpperCase() + item.slice(1)}`)}
                </button>
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
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-100 py-1">
                    <button onClick={() => { setLanguage('it'); setLangDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50">Italiano</button>
                    <button onClick={() => { setLanguage('en'); setLangDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50">English</button>
                  </div>
                )}
              </div>

              <button className="md:hidden p-2 text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-in slide-in-from-bottom-4">{t('heroTitle')}</h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-100">{t('heroSubtitle')}</h2>
          <button onClick={() => scrollToSection('contact')} className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2 mx-auto">
            {t('heroButton')} <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section id="products" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title={t('productsTitle')} subtitle={t('productsSubtitle')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Con Foto Decco */}
            <Card className="p-6 flex flex-col items-center">
               <div className="w-full h-40 flex items-center justify-center mb-6 overflow-hidden bg-white rounded-lg">
                  <img src="/decco83.webp" alt="Decco 83" className="max-h-full object-contain hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-xl font-bold text-blue-900 mb-2">{t('product1Title')}</h3>
               <p className="text-slate-600 text-sm text-center">{t('product1Desc')}</p>
            </Card>

            {/* Altre Card */}
            {[
              { icon: Factory, titleKey: 'product2Title', descKey: 'product2Desc' },
              { icon: ShieldCheck, titleKey: 'product3Title', descKey: 'product3Desc' },
              { icon: Truck, titleKey: 'product4Title', descKey: 'product4Desc' }
            ].map((product, idx) => (
              <Card key={idx} className="p-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6"><product.icon size={28} /></div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{t(product.titleKey)}</h3>
                <p className="text-slate-600 text-sm">{t(product.descKey)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Senza Backend) --- */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title={t('contactTitle')} subtitle={t('contactSubtitle')} />
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              {/* SOSTITUISCI IL LINK SOTTO CON IL TUO ID FORMSPREE */}
              <form action="https://formspree.io/f/TUO_ID_QUI" method="POST" className="space-y-4">
                <input type="text" name="name" required placeholder={t('contactName')} className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" name="email" required placeholder={t('contactEmail')} className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea name="message" required placeholder={t('contactMessage')} className="w-full p-3 h-32 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all">{t('contactSend')}</button>
              </form>
            </Card>
            
            <div className="bg-blue-900 text-white p-8 rounded-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">{t('contactInfo')}</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3"><Mail /> warnaprofile@gmail.com</p>
                <p className="flex items-center gap-3"><Phone /> +39 353 3881267</p>
                <p className="flex items-center gap-3"><MapPin /> Sansepolcro (AR)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <img src="/logo.png" alt="Warna Logo" className="h-10 mx-auto mb-4 opacity-80" />
           <p className="text-sm">{t('footerCopyright')}</p>
           <p className="text-xs mt-2">{t('footerVat')}</p>
        </div>
      </footer>
    </div>
  );
}