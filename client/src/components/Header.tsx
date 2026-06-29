'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Holy Ganges brand palette
const COLORS = {
  blue: '#12344D',     // Deep Ganges Blue
  saffron: '#E08A2E',  // Sacred Saffron
  copper: '#B76E4D',   // Muted Copper
  mist: '#FAF9F6',     // River Mist White
  ink: '#1E1E1E',      // Charcoal Ink
};

const LOGO_URL =
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/1_a6b69119.jpg';

const NAV_LINKS = [
  { label: 'Location 📍', href: '/#map' },
  { label: 'Street Food', href: '/#food' },
  { label: 'Treasures', href: '/#shopping' },
  { label: 'Backpack', href: '/#packing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blogs' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 backdrop-blur-xl border-b'
          : 'py-4 bg-transparent border-b border-transparent'
      }`}
      style={
        scrolled
          ? {
              backgroundColor: 'rgba(18, 52, 77, 0.85)',
              borderBottomColor: 'rgba(224, 138, 46, 0.2)',
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO + BRAND */}
        <a href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-11 h-11 rounded-full overflow-hidden"
            style={{
              boxShadow: `0 0 0 2px ${COLORS.saffron}99, 0 0 0 4px transparent`,
            }}
          >
            <img
              src={LOGO_URL}
              alt="Holy Ganges Dorms"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-lg tracking-wide"
              style={{
                fontFamily:
                  '"Playfair Display", "Cormorant Garamond", Georgia, serif',
                color: scrolled ? COLORS.mist : COLORS.blue,
                transition: 'color 0.4s ease',
              }}
            >
              Holy Ganges
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ color: COLORS.saffron }}
            >
              Guide · Varanasi
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm relative group transition-colors"
              style={{
                color: scrolled ? `${COLORS.mist}CC` : `${COLORS.blue}CC`,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = COLORS.saffron)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? `${COLORS.mist}CC`
                  : `${COLORS.blue}CC`)
              }
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: COLORS.saffron }}
              />
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE: BOOK NOW + HAMBURGER */}
        <div className="flex items-center gap-3">
          <a
            href="/book"
            className="hidden md:inline-flex items-center font-medium rounded-full px-6 py-2.5 text-sm shadow-lg transition-all hover:scale-[1.02]"
            style={{
              backgroundColor: COLORS.saffron,
              color: COLORS.ink,
              boxShadow: `0 10px 25px -5px ${COLORS.saffron}4D`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.copper)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.saffron)
            }
          >
            Book Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: scrolled ? COLORS.mist : COLORS.blue }}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU — animated dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden backdrop-blur-xl border-t overflow-hidden"
            style={{
              backgroundColor: 'rgba(18, 52, 77, 0.95)',
              borderTopColor: 'rgba(224, 138, 46, 0.2)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl transition-colors"
                  style={{
                    fontFamily:
                      '"Playfair Display", "Cormorant Garamond", Georgia, serif',
                    color: COLORS.mist,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.saffron)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.mist)
                  }
                >
                  {l.label}
                </a>
              ))}

              <a
                href="/book"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center font-medium rounded-full px-6 py-3 text-base"
                style={{
                  backgroundColor: COLORS.saffron,
                  color: COLORS.ink,
                }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
