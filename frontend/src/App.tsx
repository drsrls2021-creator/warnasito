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
    heroDescription: "Fornitura di profili in PVC Decco e servizi di fettamenta GU di alta qualità. Sedi operative in Toscana e Campania.",
    heroButton: "Richiedi Preventivo",
    aboutTitle: "Chi Siamo",
    aboutSubtitle: "Esperti nel settore dei profili PVC e ferramenta",
    aboutText: "Warna Profile S.r.l. è un'azienda dinamica specializzata nella vendita di profili in PVC Decco e servizi di ferramenta GU. Con sede legale a Sansepolcro (AR) e sedi operative in Campania, offriamo prodotti di alta qualità per l'edilizia e l'industria.",
    aboutMission: "La nostra missione è fornire soluzioni personalizzate in PVC e servizi di ferramenta di precisione, garantendo qualità, affidabilità e supporto tecnico specializzato.",
    productsTitle: "I Nostri Prodotti",
    productsSubtitle: "Profili PVC Decco e materiali di alta qualità",
    product1Title: "Profili PVC Decco",
    product1Desc: "Ampia gamma di profili in PVC Decco per serramenti, divisori industriali e applicazioni edili. Disponibili in diverse misure e finiture.",
    product2Title: "Accessori PVC",
    product2Desc: "Componenti complementari per l'installazione e il montaggio dei profili. Guarnizioni, raccordi e sistemi di fissaggio.",
    product3Title: "Materiali Speciali",
    product3Desc: "Prodotti specifici per esigenze particolari. Soluzioni su misura per progetti complessi.",
    product4Title: "Forniture Industriali",
    product4Desc: "Materiali per l'industria e la manutenzione. Qualità certificata e consegne puntuali.",
    servicesTitle: "I Nostri Servizi",
    servicesSubtitle: "Servizi professionali per l'industria",
    service1Title: "Ferramenta GU",
    service1Desc: "Servizi di ferramenta GU di precisione per l'industria. Tagli e lavorazioni su misura secondo specifiche tecniche.",
    service2Title: "Consulenza Tecnica",
    service2Desc: "Supporto tecnico specializzato per la scelta dei profili PVC e soluzioni di ferramenta ottimali.",
    service3Title: "Taglio su Misura",
    service3Desc: "Taglio preciso dei profili secondo le misure richieste. Riduzione degli sprechi e ottimizzazione dei materiali.",
    service4Title: "Logistica e Consegna",
    service4Desc: "Servizio logistico efficiente con consegne programmate in tutta Italia. Gestione ordini personalizzata.",
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
    locationDescription: "Con sedi strategiche in Toscana e Campania, garantiamo una copertura nazionale efficiente per la fornitura di profili PVC Decco e servizi di fettamenta GU.",
    contactTitle: "Contattaci",
    contactSubtitle: "Siamo a tua disposizione per qualsiasi richiesta",
    contactName: "Nome e Cognome",
    contactEmail: "Indirizzo Email",
    contactPhone: "Telefono",
    contactMessage: "Il tuo Messaggio",
    contactSend: "Invia Richiesta",
    contactInfo: "Informazioni di Contatto",
    footerTagline: "Specialisti in profili PVC Decco e fettamenta GU",
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
    heroDescription: "Supply of high-quality PVC Decco profiles and GU ferramenta services. Operational offices in Tuscany and Campania.",
    heroButton: "Request Quote",
    aboutTitle: "About Us",
    aboutSubtitle: "Experts in PVC profiles and industrial ferramenta",
    aboutText: "Warna Profile S.r.l. is a dynamic company specialized in the sale of PVC Decco profiles and GU ferramenta services. With registered office in Sansepolcro (AR) and operational offices in Campania, we offer high-quality products for construction and industry.",
    aboutMission: "Our mission is to provide customized PVC solutions and precision ferramenta services, ensuring quality, reliability and specialized technical support.",
    productsTitle: "Our Products",
    productsSubtitle: "PVC Decco profiles and high-quality materials",
    product1Title: "PVC Decco Profiles",
    product1Desc: "Wide range of PVC Decco profiles for windows, industrial partitions and construction applications. Available in different sizes and finishes.",
    product2Title: "PVC Accessories",
    product2Desc: "Complementary components for profile installation and assembly. Gaskets, fittings and fastening systems.",
    product3Title: "Special Materials",
    product3Desc: "Specific products for particular needs. Custom solutions for complex projects.",
    product4Title: "Industrial Supplies",
    product4Desc: "Materials for industry and maintenance. Certified quality and timely deliveries.",
    servicesTitle: "Our Services",
    servicesSubtitle: "Professional services for industry",
    service1Title: "GU Fettamenta",
    service1Desc: "Precision GU fettamenta services for industry. Custom cuts and processing according to technical specifications.",
    service2Title: "Technical Consulting",
    service2Desc: "Specialized technical support for PVC profile selection and optimal fettamenta solutions.",
    service3Title: "Custom Cutting",
    service3Desc: "Precise cutting of profiles according to required measurements. Waste reduction and material optimization.",
    service4Title: "Logistics and Delivery",
    service4Desc: "Efficient logistics service with scheduled deliveries throughout Italy. Customized order management.",
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
    locationDescription: "With strategic offices in Tuscany and Campania, we guarantee efficient national coverage for the supply of PVC Decco profiles and GU fettamenta services.",
    contactTitle: "Contact Us",
    contactSubtitle: "We are at your disposal",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone",
    contactMessage: "Your Message",
    contactSend: "Send Request",
    contactInfo: "Contact Information",
    footerTagline: "Specialists in PVC Decco profiles and GU fettamenta",
    footerCopyright: "© 2025 Warna Profile S.r.l. - All rights reserved",
    footerVat: "VAT ID 02517830515 - Tax Code 02517830515",
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
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', message: '' });
  const [scrolled, setScrolled] = useState(false);

  // Gestione scroll per navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section logic
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactData.name || !contactData.email || !contactData.message) {
      alert('Per favore compila tutti i campi obbligatori');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(result.message || 'Grazie! Il tuo messaggio è stato inviato.');
        setContactData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Errore nell\'invio del messaggio: ' + (result.error || 'Riprova più tardi'));
      }
    } catch (error) {
      alert('Grazie per la tua richiesta! Ti contatteremo presto.');
      setContactData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Modificato qui */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/logo.png" alt="Warna Profile Logo" className="h-12 w-auto object-contain" />
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

            {/* Actions (Lang + Mobile Toggle) */}
            <div className="flex items-center gap-4">
              
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium text-slate-700 transition-colors"
                >
                  <Globe size={18} />
                  <span>{language.toUpperCase()}</span>
                </button>
                
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-100 py-1 animate-in fade-in slide-in-from-top-2">
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

              {/* Mobile Menu Button */}
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
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left text-lg font-medium py-2 px-2 rounded-lg ${activeSection === item ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {t(`nav${item.charAt(0).toUpperCase() + item.slice(1)}`)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        {/* Background Pattern */}
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

      {/* --- PRODUCTS SECTION --- */}
      <section id="products" className="py-20 md:py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('productsTitle')} subtitle={t('productsSubtitle')} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Package, titleKey: 'product1Title', descKey: 'product1Desc' },
              { icon: Factory, titleKey: 'product2Title', descKey: 'product2Desc' },
              { icon: ShieldCheck, titleKey: 'product3Title', descKey: 'product3Desc' },
              { icon: Truck, titleKey: 'product4Title', descKey: 'product4Desc' }
            ].map((product, idx) => (
              <Card key={idx} className="p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <product.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{t(product.titleKey)}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {t(product.descKey)}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:underline">
                  Dettagli <ChevronRight size={16} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 md:py-32">
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
            {/* Info Column */}
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

              {/* Quick checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['Consegne Nazionali', 'Supporto Tecnico', 'Preventivi Gratuiti', 'Materiali Certificati'].map((item, i) => (
                   <div key={i} className="flex items-center space-x-2 text-slate-600">
                     <CheckCircle2 size={18} className="text-green-500" />
                     <span className="text-sm font-medium">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[400px] lg:h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative group">
              {/* This mimics a map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 opacity-50 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mx-4">
                <div className="mb-6">
                  <MapPin size={48} className="mx-auto text-blue-600 mb-4 animate-bounce" />
                  <p className="font-bold text-xl text-blue-900 mb-2">Warna Profile S.R.L.</p>
                  <p className="text-slate-600">Copertura Nazionale</p>
                </div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-slate-800">Sede Legale</p>
                      <p className="text-sm text-slate-600">Sansepolcro (AR)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-slate-800">Sede Operativa 1</p>
                      <p className="text-sm text-slate-600">Villa Literno (CE)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mt-1.5"></div>
                    <div>
                      <p className="font-semibold text-slate-800">Sede Operativa 2</p>
                      <p className="text-sm text-slate-600">Mondragone (CE)</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md">
                  Visualizza Mappa
                </button>
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
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">{t('contactName')} *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="Mario Rossi"
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">{t('contactEmail')} *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="mario@email.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactPhone')}</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="+39 333 1234567"
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{t('contactMessage')} *</label>
                    <textarea 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none min-h-[150px] resize-y"
                      placeholder="Descrivi la tua richiesta..."
                      value={contactData.message}
                      onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                    {t('contactSend')}
                  </button>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-blue-900 text-white p-8 rounded-xl shadow-xl">
                 <h3 className="text-2xl font-bold mb-8 border-b border-blue-700 pb-4">{t('contactInfo')}</h3>
                 <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Mail size={20} />
                     </div>
                     <div>
                       <span className="text-blue-100 hover:text-white transition-colors block">warnaprofile@gmail.com</span>
                       <span className="text-sm text-blue-300">Email principale</span>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <Phone size={20} />
                     </div>
                     <div>
                       <span className="text-blue-100 block">+39 353 3881267</span>
                       <span className="text-sm text-blue-300">Ufficio commerciale</span>
                     </div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-800 p-3 rounded-lg">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <span className="text-blue-100 block">Sansepolcro (AR)</span>
                       <span className="text-sm text-blue-300">Sede Legale</span>
                     </div>
                   </div>
                 </div>

                 {/* Orari */}
                 <div className="mt-12">
                   <h4 className="font-bold text-lg mb-4 text-blue-200">Orari di Apertura</h4>
                   <div className="space-y-2 text-sm text-blue-100">
                     <div className="flex justify-between">
                       <span>Lun - Ven</span>
                       <span>08:30 - 18:30</span>
                     </div>
                     <div className="flex justify-between">
                       <span>Sabato</span>
                       <span>09:00 - 13:00</span>
                     </div>
                   </div>
                 </div>

                 {/* Partita IVA */}
                 <div className="mt-8 pt-6 border-t border-blue-800 text-sm text-blue-300">
                   <p>P.IVA: 02517830515</p>
                   <p>C.F.: 02517830515</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
            <div>
              {/* Logo Modificato qui nel Footer */}
              <img src="/logo.png" alt="Warna Profile Logo" className="h-10 w-auto object-contain mb-4 mx-auto md:mx-0" />
              <p className="text-slate-500 text-sm">{t('footerTagline')}</p>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 text-sm">
              <p>{t('footerCopyright')}</p>
              <p className="text-slate-500">{t('footerVat')}</p>
              <p className="text-slate-500 text-[11px]">{t('footerAddress')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}