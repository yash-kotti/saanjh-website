import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Hamper } from '../data/hampers';
import { HamperModal } from '../components/shared/HamperModal';

interface HamperModalContextValue {
  openModal: (hamper: Hamper) => void;
}

const HamperModalContext = createContext<HamperModalContextValue | null>(null);

export function HamperModalProvider({ children }: { children: ReactNode }) {
  const [activeHamper, setActiveHamper] = useState<Hamper | null>(null);

  return (
    <HamperModalContext.Provider value={{ openModal: setActiveHamper }}>
      {children}
      <HamperModal hamper={activeHamper} onClose={() => setActiveHamper(null)} />
    </HamperModalContext.Provider>
  );
}

export function useHamperModal() {
  const ctx = useContext(HamperModalContext);
  if (!ctx) throw new Error('useHamperModal must be used inside HamperModalProvider');
  return ctx;
}
