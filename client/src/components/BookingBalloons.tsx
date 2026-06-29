'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOKING_PLATFORMS = [
  {
    name: 'Booking.com',
    href: 'https://www.booking.com/hotel/in/holy-ganges-dorms-varanasi.html',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/booking-logo_e90ccba9.png',
    bg: '#003580', // Booking.com brand blue
  },
  {
    name: 'Agoda',
    href: 'https://www.agoda.com/en-in/holy-ganges-dorms/hotel/varanasi-in.html?cid=1844104&ds=mdj5Iwhl6Tfi%2FCIB',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/agoda-logo_dd96ed5c.png',
    bg: '#FFFFFF',
  },
  {
    name: 'MakeMyTrip',
    href: 'https://www.makemytrip.com/hotels/holy_ganges_vns-details-varanasi.html',
    logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/makemytrip-logo_db5b97a3.png',
    bg: '#FFFFFF',
  },
];

export default function BookingBalloons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed right-6 z-40 flex flex-col gap-3"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {BOOKING_PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Book on ${p.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ scale: 1.12, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center overflow-hidden ring-2 ring-white"
              style={{
                backgroundColor: p.bg,
                boxShadow: '0 8px 24px rgba(18, 52, 77, 0.25)',
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="w-9 h-9 object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
