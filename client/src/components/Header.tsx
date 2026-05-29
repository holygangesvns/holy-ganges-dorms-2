'use client';

import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/1_a6b69119.jpg"
            alt="Holy Ganges Dorms"
            className="w-10 h-10 rounded-full object-cover"
          />
          <a href="https://holy-ganges-dorms.holygangesvns.workers.dev/"
  className="text-lg font-semibold text-primary hover:opacity-80 transition-opacity"
>
  Holy Ganges Dorms
</a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="/#map" className="text-sm hover:text-primary transition-colors">
            Location 📍
          </a>
          <a href="/#food" className="text-sm hover:text-primary transition-colors">
            Street Food
          </a>
          <a href="/#shopping" className="text-sm hover:text-primary transition-colors">
            Treasures
          </a>
        
          <a href="/#packing" className="text-sm hover:text-primary transition-colors">
            Backpack
          </a>
          <a href="/gallery" className="text-sm hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="/blogs" className="text-sm hover:text-primary transition-colors">
            Blogs
          </a>
          <a href="/book"
  className="text-sm font-bold text-black px-4 py-2 rounded-full transition-opacity hover:opacity-90"
  style={{ backgroundColor: '#F54900' }}
>
  Book Now
</a>
        </nav>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
