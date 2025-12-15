import React, { useState, useEffect } from 'react';

const RECENT_SALES = [
  { name: "Maria", location: "Roma, Lazio" },
  { name: "Giulia", location: "Milano, Lombardia" },
  { name: "Sofia", location: "Napoli, Campania" },
  { name: "Aurora", location: "Torino, Piemonte" },
  { name: "Alice", location: "Palermo, Sicilia" },
  { name: "Ginevra", location: "Genova, Liguria" },
  { name: "Emma", location: "Bologna, Emilia-Romagna" },
  { name: "Giorgia", location: "Firenze, Toscana" },
  { name: "Greta", location: "Bari, Puglia" },
  { name: "Beatrice", location: "Catania, Sicilia" },
  { name: "Anna", location: "Venezia, Veneto" },
  { name: "Martina", location: "Verona, Veneto" },
  { name: "Chiara", location: "Messina, Sicilia" },
  { name: "Vittoria", location: "Padova, Veneto" },
  { name: "Ludovica", location: "Trieste, Friuli-V.G." },
  { name: "Francesca", location: "Taranto, Puglia" },
  { name: "Sara", location: "Brescia, Lombardia" },
  { name: "Elisa", location: "Prato, Toscana" },
  { name: "Matilde", location: "Parma, Emilia-Romagna" },
  { name: "Noemi", location: "Modena, Emilia-Romagna" }
];

export const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const runNotificationCycle = async () => {
      // 1. Initial delay: Appear after 7 seconds
      await new Promise(resolve => setTimeout(resolve, 7000));
      if (!isMounted) return;

      while (isMounted) {
        // Show notification
        setIsVisible(true);

        // 2. Duration: Stay visible for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!isMounted) return;

        // Hide notification
        setIsVisible(false);

        // 3. Interval: Wait 8 seconds before showing again
        await new Promise(resolve => setTimeout(resolve, 8000));
        if (!isMounted) return;

        // Update data for the next cycle while hidden
        setCurrentIndex(prev => (prev + 1) % RECENT_SALES.length);
      }
    };

    runNotificationCycle();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentSale = RECENT_SALES[currentIndex];

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-[#4ade80] border border-green-600 shadow-xl rounded-lg p-3 flex items-center gap-3 max-w-xs md:max-w-sm">
        <div className="bg-white rounded-full p-1 flex-shrink-0 w-8 h-8 flex items-center justify-center">
           <span role="img" aria-label="check" className="text-sm">✅</span>
        </div>
        <div className="flex flex-col">
          <p className="text-black font-bold text-sm leading-tight">
            {currentSale.name} ha appena acquistato
          </p>
          <p className="text-black/80 text-xs font-medium">
            {currentSale.location}
          </p>
        </div>
      </div>
    </div>
  );
};