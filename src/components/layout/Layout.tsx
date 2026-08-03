import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { CustomCursor } from '../shared/CustomCursor';
import { useLenis } from '../../hooks/useLenis';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col">
      <CustomCursor />
      <Header />
      {/* pb-20 sm:pb-0 adds space on mobile for the sticky WhatsApp bottom bar */}
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
