// src/ProductDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ArrowLeft, ChevronRight } from 'lucide-react';

// Importa i dati e i componenti comuni da App.tsx
import { translations, productsData, SectionHeader, Card } from './App';

interface ProductDetailPageProps {
  language: 'it' | 'en';
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ language }) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; alt: string } | null>(null);

  const t = (key: string) => (translations[language] as any)[key] || key;

  const product = productsData.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'unset';
  }, [productId]);

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Prodotto non trovato</h2>
        <p className="text-lg text-slate-700 mb-8">Siamo spiacenti, il prodotto che cerchi non esiste.</p>
        <button 
          onClick={() => navigate('/products')} 
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> {t('backToProducts')}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <button 
          onClick={() => navigate('/products')} 
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" /> {t('backToProducts')}
        </button>

        <SectionHeader title={t(product.titleKey)} subtitle={t('productsSubtitle')} />
        
        <Card className="p-6 md:p-8 lg:p-10 !shadow-lg mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="w-full h-96 flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.mainImage || product.previewImage}
                alt={t(product.titleKey)} 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t(product.titleKey)}</h3>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                {t(product.descriptionKey)}
              </p>
              
              <h4 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">{t('featuresTitle')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-blue-100 text-blue-600 rounded-full">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{t(feature.titleKey)}</p>
                      <p className="text-sm text-slate-600">{t(feature.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {product.images && product.images.length > 0 && (
          <div className="mb-12">
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
        )}
        
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">Hai bisogno di maggiori informazioni o un preventivo personalizzato?</p>
          <button 
            onClick={() => navigate('/#contact')}
            className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Contattaci subito <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

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

export default ProductDetailPage;