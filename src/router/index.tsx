import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { HamperModalProvider } from '../context/HamperModalContext';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import CustomOrder from '../pages/CustomOrder';
import Corporate from '../pages/Corporate';
import Brownies from '../pages/Brownies';
import Events from '../pages/Events';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<PageTransition><Home /></PageTransition>} />
        <Route path="/shop"         element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/custom-order" element={<PageTransition><CustomOrder /></PageTransition>} />
        <Route path="/corporate"    element={<PageTransition><Corporate /></PageTransition>} />
        <Route path="/brownies"     element={<PageTransition><Brownies /></PageTransition>} />
        <Route path="/events"       element={<PageTransition><Events /></PageTransition>} />
        <Route path="/about"        element={<PageTransition><About /></PageTransition>} />
        <Route path="/faq"          element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/contact"      element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <HamperModalProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </HamperModalProvider>
    </BrowserRouter>
  );
}
