import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
   
      {/* DRAWER PORTAL */}
      {menuOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            style={{
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
            onClick={() => setMenuOpen(false)}
          />

          {/* SIDE MENU */}
          <div className="fixed right-0 top-0 h-screen w-72 bg-white shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto z-50">
            {/* CLOSE */}
            <button
              className="self-end"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>

            {/* LINKS */}
            <nav className="flex flex-col gap-5 text-lg text-gray-700">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/#map" onClick={() => setMenuOpen(false)}>Location📍</a>
              <a href="/#food" onClick={() => setMenuOpen(false)}>Street Food</a>
              <a href="/#shopping" onClick={() => setMenuOpen(false)}>Treasures</a>
              <a href="/#packing" onClick={() => setMenuOpen(false)}>Backpack</a>
              <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
              <a href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
