import React, { useState, useEffect } from 'react';
import { BookOpen, Star, Gift, ChevronDown, ChevronUp, Lock, ShieldCheck, Download, Printer, Percent, CreditCard } from 'lucide-react';
import { Button } from './components/Button';
import { SalesNotification } from './components/SalesNotification';
import { FadeIn } from './components/FadeIn';
import { APP_CONTENT } from './constants';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return { minutes: 14, seconds: 59 }; // Reset loop for demo
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToOffer = () => {
    const element = document.getElementById('offer-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-brand-brown font-sans selection:bg-brand-rose selection:text-white">
      <SalesNotification />
      
      {/* 1. HERO SECTION */}
      <header className="relative bg-[#fcf6ee] pt-12 pb-20 px-4 overflow-hidden border-b-4 border-brand-rose/20">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-rose via-brand-gold to-brand-rose"></div>
        
        {/* Decorative background flowers (CSS simulation) */}
        <div className="absolute top-10 left-10 text-brand-rose opacity-10 transform -rotate-12 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"/></svg>
        </div>
        <div className="absolute bottom-20 right-10 text-brand-rose opacity-10 transform rotate-45 pointer-events-none">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/></svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-4 border border-brand-rose/30">
            <span className="text-brand-darkRose font-serif italic tracking-wider">Edizione Digitale Esclusiva</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-brown leading-tight">
            {APP_CONTENT.hero.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-brand-darkRose font-serif italic">
            {APP_CONTENT.hero.subtitle}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            {/* Book Image */}
            <div className="relative group">
              <img 
                src="https://mercanetcursos.com/wp-content/uploads/2025/06/jfjfjf-1-1.png" 
                alt="Quaderno di Guarigione Ho'oponopono" 
                className="w-72 md:w-96 h-auto object-contain drop-shadow-2xl transform transition-transform hover:scale-105 duration-500 rounded-lg"
              />
            </div>

            <div className="max-w-md text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {APP_CONTENT.hero.intro}
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-rose/10">
                <h3 className="font-serif text-xl text-brand-darkRose font-bold mb-4">{APP_CONTENT.hero.targetAudienceTitle}</h3>
                <ul className="space-y-3">
                  {APP_CONTENT.hero.targetAudiencePoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-brand-rose/20 p-1 rounded-full mr-3 mt-1 text-brand-darkRose">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center font-bold text-brand-brown">
                  {APP_CONTENT.hero.finalCall}
                </div>
              </div>

              <Button variant="primary" fullWidth onClick={scrollToOffer} pulse>
                {APP_CONTENT.hero.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. INSIDE PREVIEW SECTION */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-brand-light px-8 py-3 rounded-full shadow-inner mb-12 border border-brand-rose/20">
             <h2 className="text-2xl md:text-3xl font-serif text-brand-brown italic">
              Scopri il nostro materiale PDF dall'interno
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Simulation of open book pages */}
            <div className="bg-[#fcf6ee] p-4 rounded-xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-100">
               <div className="border-2 border-dashed border-brand-rose/30 p-4 h-96 flex flex-col justify-between rounded-lg bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs px-2 py-1 font-bold rounded-bl-lg">Capitolo 7</div>
                  <h4 className="font-serif text-xl text-center text-brand-brown border-b pb-2">Parole Trigger</h4>
                  <div className="space-y-4 text-xs text-left text-gray-500">
                    <p className="bg-gray-50 p-2 rounded">Sono parole o frasi sacre canalizzate e ispirate dalla Divinità...</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-pink-50 p-2 rounded text-center">Gocce di Rugiada</div>
                      <div className="bg-blue-50 p-2 rounded text-center">Acqua della Vita</div>
                      <div className="bg-yellow-50 p-2 rounded text-center">Carta Moschicida</div>
                      <div className="bg-green-50 p-2 rounded text-center">Verde Smeraldo</div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-brand-darkRose font-serif text-4xl opacity-20">Aloha</span>
                  </div>
               </div>
            </div>

            <div className="bg-[#fcf6ee] p-4 rounded-xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-gray-100">
               <div className="border-2 border-dashed border-brand-rose/30 p-4 h-96 flex flex-col justify-between rounded-lg bg-white">
                  <h4 className="font-serif text-xl text-center text-brand-brown border-b pb-2">Ho'oponopono e i Chakra</h4>
                  <div className="flex justify-center my-4">
                    <div className="w-32 h-48 bg-gray-100 rounded-full flex items-center justify-center relative">
                      <div className="absolute top-2 w-4 h-4 bg-purple-400 rounded-full blur-sm"></div>
                      <div className="absolute top-8 w-4 h-4 bg-indigo-400 rounded-full blur-sm"></div>
                      <div className="absolute top-14 w-4 h-4 bg-blue-400 rounded-full blur-sm"></div>
                      <div className="absolute top-20 w-4 h-4 bg-green-400 rounded-full blur-sm"></div>
                      <div className="absolute top-26 w-4 h-4 bg-yellow-400 rounded-full blur-sm"></div>
                      <div className="absolute bottom-10 w-4 h-4 bg-orange-400 rounded-full blur-sm"></div>
                      <div className="absolute bottom-4 w-4 h-4 bg-red-400 rounded-full blur-sm"></div>
                      <img src="https://picsum.photos/seed/meditation/100/150" alt="Meditation silhouette" className="opacity-50 mix-blend-multiply" />
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-600">Ogni chakra può accumulare memorie. Blocchi e credenze limitanti...</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYLLABUS SECTION */}
      <section className="py-16 px-4 bg-[#fff0f5]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-white ring-1 ring-brand-rose/20 relative">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 text-brand-gold font-bold text-xl whitespace-nowrap">
                <BookOpen className="w-6 h-6" /> Programma del Quaderno
             </div>
             
             <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3">
                {APP_CONTENT.syllabus.map((item) => (
                  <div key={item.id} className="flex items-center text-sm md:text-base text-gray-700 py-1 border-b border-gray-100 hover:bg-gray-50 transition-colors px-2 rounded">
                    <span className="font-bold text-brand-rose mr-3 text-xs md:text-sm bg-brand-rose/10 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">
                      {item.id}
                    </span>
                    {item.title}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 4. BONUSES SECTION */}
      <section className="py-20 px-4 bg-[#fcf6ee]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full font-bold uppercase tracking-wide shadow-sm mb-4">
              <Gift className="w-5 h-5" /> Regali Esclusivi
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-brown">
              Solo per <span className="text-brand-darkRose italic font-bold">OGGI!</span>
            </h2>
          </div>

          <div className="grid gap-12">
            {APP_CONTENT.bonuses.map((bonus, index) => (
              <div key={bonus.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-rose/10 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#fceae6] py-3 text-center font-bold text-brand-brown uppercase tracking-wider text-sm border-b border-brand-rose/10">
                  {bonus.title.split(':')[0]}
                </div>
                <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 flex justify-center">
                    {/* Placeholder for Bonus Images - Styled as cards/documents */}
                    <div className="relative w-64 h-80 bg-gray-100 rounded-lg shadow-md flex items-center justify-center overflow-hidden group">
                      <img 
                        src={`https://picsum.photos/seed/${bonus.id + 50}/400/500`} 
                        alt={bonus.imageAlt} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                         <span className="text-white font-serif font-bold text-lg px-4 text-center">{bonus.title.split(':')[1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-brand-brown leading-tight">
                      {bonus.title.split(':')[1]}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {bonus.description}
                    </p>
                    <div className="inline-block text-xs font-bold text-brand-rose bg-brand-rose/10 px-3 py-1 rounded-full uppercase">
                      Valore Inestimabile
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. URGENCY & OFFER SECTION */}
      <section id="offer-section" className="py-20 px-4 bg-brand-rose/10 relative overflow-hidden">
        {/* Background waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 50 Q 25 25 50 50 T 100 50 V 100 H 0 Z" fill="#c06c6c" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
             <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-4 rounded-full shadow-md text-brand-brown"><Printer className="w-8 h-8" /></div>
                <span className="text-xs font-bold uppercase w-24">Materiale Digitale Stampabile</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-4 rounded-full shadow-md text-brand-brown"><Percent className="w-8 h-8" /></div>
                <span className="text-xs font-bold uppercase w-24">50% di Sconto</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="bg-white p-4 rounded-full shadow-md text-brand-brown"><Download className="w-8 h-8" /></div>
                <span className="text-xs font-bold uppercase w-24">Download Immediato</span>
             </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-brand-darkRose text-white py-2 font-bold text-sm uppercase animate-pulse">
              {APP_CONTENT.offer.scarcity}
            </div>
            
            <div className="mt-8 space-y-6">
               <h3 className="text-xl text-brand-brown font-serif italic">
                 {APP_CONTENT.offer.urgency}
               </h3>
               
               <div className="text-8xl font-bold text-gray-800 leading-none">
                 {APP_CONTENT.offer.count}
               </div>
               <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
                 {APP_CONTENT.offer.countLabel}
               </p>

               <div className="flex items-center justify-center gap-6 mb-8">
                 <span className="text-3xl text-gray-400 line-through decoration-red-500 decoration-2">
                    {APP_CONTENT.offer.oldPrice}
                 </span>
                 <span className="text-6xl font-black text-brand-gold drop-shadow-sm">
                    {APP_CONTENT.offer.newPrice}
                 </span>
               </div>

               <Button variant="accent" fullWidth className="text-2xl py-6 shadow-orange-200" pulse>
                 {APP_CONTENT.offer.cta}
               </Button>
               
               <div className="flex justify-center gap-2 mt-4 opacity-70">
                 <CreditCard className="w-6 h-6" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-light py-4 rounded-full text-center shadow-inner mb-16 mx-auto max-w-2xl">
            <h2 className="text-xl md:text-2xl font-serif text-brand-brown">
              Cosa dicono i nostri acquirenti?
            </h2>
          </div>

          <div className="space-y-12">
            {APP_CONTENT.testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 150}>
                <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                  <div className="flex items-start gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold" />
                    <div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 mt-2 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                  {testimonial.contentImage && (
                    <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                      <img src={testimonial.contentImage} alt="User result" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 px-4 bg-[#f2e6e1]">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border-t-8 border-brand-darkRose">
           <h2 className="text-center font-serif text-2xl text-brand-brown mb-8 uppercase tracking-widest border-b pb-4">Domande Frequenti</h2>
           
           <div className="space-y-4">
             {APP_CONTENT.faq.map((item, index) => (
               <div key={index} className="border border-brand-rose/20 rounded-lg overflow-hidden bg-[#fffdfa]">
                 <button 
                   onClick={() => toggleFaq(index)}
                   className="w-full flex justify-between items-center p-4 text-left font-bold text-brand-brown hover:bg-brand-rose/5 transition-colors"
                 >
                   {item.question}
                   {openFaq === index ? <ChevronUp className="text-brand-rose" /> : <ChevronDown className="text-brand-rose" />}
                 </button>
                 {openFaq === index && (
                   <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-brand-rose/10 animate-fadeIn">
                     {item.answer}
                   </div>
                 )}
               </div>
             ))}
           </div>

           <div className="mt-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="bg-yellow-400 text-brand-brown w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-lg border-4 border-white rotate-12">
                 <span>7 GIORNI</span>
                 <span className="text-[10px] uppercase">Garanzia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                 <ShieldCheck className="w-5 h-5 text-green-500" />
                 <span>Pagamento Sicuro al 100%</span>
              </div>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <p className="text-xs text-gray-400 max-w-md mx-auto">
                Questo sito non fa parte del sito web di Facebook o Facebook Inc. Inoltre, questo sito non è approvato da Facebook in alcun modo. FACEBOOK è un marchio di FACEBOOK, Inc.
              </p>
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Quaderno di Guarigione. Tutti i diritti riservati.
              </p>
           </div>
        </div>
      </section>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden z-50 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-xs text-gray-500">Solo per oggi</span>
            <span className="font-bold text-xl text-brand-darkRose">{APP_CONTENT.offer.newPrice}</span>
         </div>
         <Button variant="accent" onClick={scrollToOffer} className="py-2 px-6 text-sm">
           ACQUISTA ORA
         </Button>
      </div>

    </div>
  );
};

export default App;