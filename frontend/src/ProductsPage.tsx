// src/ProductsPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

// Importa i dati e i componenti comuni da App.tsx
import { translations, productsData, SectionHeader, Card } from './App';

interface ProductsPageProps {
  language: 'it' | 'en';
}

const ProductsPage: React.FC<ProductsPageProps> = ({ language }) => {
  const { productId } = useParams<{ productId?: string }>();
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);

  const t = (key: string) => (translations[language] as any)[key] || key;

  useEffect(() => {
    // Scrolla al prodotto specifico se l'ID è passato tramite state o URL param
    const targetId = productId || (location.state as any)?.scrollToId;

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(`product-${targetId}`);
        if (element) {
          const offset = 80; // Offset per la navbar fissa
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productId, location.state]);

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Impedisce lo scroll del body
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset'; // Ripristina lo scroll del body
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <SectionHeader title={t('productsTitle')} subtitle={t('productsSubtitle')} />
        
        <div className="space-y-16">
          {productsData.map((product) => (
            <div id={`product-${product.id}`} key={product.id}>
              <Card className="p-6 md:p-8 lg:p-10 !shadow-lg">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  {/* Contenuto Testuale */}
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">{t(product.titleKey)}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t(product.descriptionKey)}
                    </p>
                  </div>

                  {/* Galleria Immagini */}
                  <div className="lg:col-span-3">
                    <h4 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">{t('galleryTitle')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {product.images.map((image, index) => (
                        <div 
                          key={index} 
                          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer aspect-square"
                          onClick={() => openLightbox(image.src, t(image.altKey))}
                        >
                          <img
                            src={image.src}
                            alt={t(image.altKey)}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX (MODAL) --- */}
      {lightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors z-10 p-2 rounded-full bg-black/50"
              aria-label={language === 'it' ? 'Chiudi immagine' : 'Close image'}
            >
              <X size={32} />
            </button>
            <img 
              src={currentImage.src} 
              alt={currentImage.alt} 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;