/**
 * InstagramSection.tsx
 *
 * A static "social proof" section using real photos already in your gallery
 * folder. Links out to your real Instagram profile. No API keys, no new
 * dependencies — just images and a link, so it can't break your build.
 *
 * Place this file at: client/src/components/InstagramSection.tsx
 */

import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/holygangesdorms";

const instagramPhotos = [
  { src: "/assets/gallery/Sunrise.jpg", alt: "Sunrise view from the terrace" },
  { src: "/assets/gallery/balcony.webp", alt: "Balcony lounge area" },
  { src: "/assets/gallery/river_1.jpg", alt: "Ganges river view" },
  { src: "/assets/gallery/dorm_1.jpg", alt: "Dorm beds" },
  { src: "/assets/gallery/common_1.jpg", alt: "Common chill area" },
  { src: "/assets/gallery/reception.webp", alt: "Reception area" },
];

export default function InstagramSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Instagram className="w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-bold">Follow Us on Instagram</h2>
        </div>
        <p className="text-muted-foreground mb-8">
          @holygangesdorms — real moments from Holy Ganges Dorms, Varanasi
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
          {instagramPhotos.map((photo, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden rounded-lg group relative"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
          Follow @holygangesdorms
        </a>
      </div>
    </section>
  );
}
