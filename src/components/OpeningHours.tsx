"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function OpeningHours({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkStatus = () => {
      const now = new Date();
      // Brazzaville est en UTC+1. Calculons l'heure locale correspondante de manière fiable.
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brazzaTime = new Date(utc + (3600000)); // UTC+1
      
      const bDay = brazzaTime.getDay(); // 0 = Dimanche, 1 = Lundi, ... 6 = Samedi
      const bHour = brazzaTime.getHours();
      
      // Ouvert de Lundi (1) à Samedi (6)
      // Entre 7h et 17h (donc jusqu'à 16:59:59)
      if (bDay >= 1 && bDay <= 6 && bHour >= 7 && bHour < 17) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div className={cn("flex flex-col items-end", className)}>
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          {isOpen ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </>
          ) : (
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          )}
        </span>
        <span className={cn("text-sm font-bold", isOpen ? "text-green-600" : "text-red-600")}>
          {isOpen ? "Ouvert" : "Fermé"}
        </span>
      </div>
      <span className="text-[10px] text-slate-500 font-medium tracking-wider">
        Lun-Sam • 07h-17h
      </span>
    </div>
  );
}
