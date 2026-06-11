import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
  featured: boolean;
}

interface BlogDetail extends BlogPost {
  content: string;
  location: string;
  locationUrl: string;
  images: string[];
  rating: number;
  reviews: number;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Gopi Chaat Bhandar: A Taste of Authentic Varanasi Street Food",
    excerpt: "Discover the legendary chaat vendor that has been serving authentic Varanasi street food for generations. From crispy aloo tikki to tangy tomato chaat, experience the flavors that define the city.",
    category: "Food & Travel",
    date: "May 2026",
    readTime: "8 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp",
    slug: "gopi-chaat-bhandar",
    featured: true,
  },
  {
    id: "2",
    title: "Jaikara Silk House: Where Tradition Meets Elegance",
    excerpt: "Explore the finest Banarasi silk sarees at Jaikara Silk House. Learn about the craftsmanship, heritage, and exquisite designs that make Varanasi silk the most sought-after in India.",
    category: "Shopping & Culture",
    date: "May 2026",
    readTime: "7 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp",
    slug: "jaikara-silk-house",
    featured: true,
  },
  {
    id: "3",
    title: "The Insider's Guide to Morning Boat Rides in Varanasi",
    excerpt: "Planning a boat ride in Varanasi? Discover the best ghats to start from, current prices, practical tips to avoid scams, and whether sunrise or sunset rides offer the best experience.",
    category: "Travel Guide",
    date: "June 2026",
    readTime: "10 min read",
    author: "Holy Ganges Team",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    slug: "morning-boat-rides-varanasi",
    featured: true,
  },
];

const blogDetails: Record<string, BlogDetail> = {
  "gopi-chaat-bhandar": {
    id: "1",
    title: "Gopi Chaat Bhandar: A Taste of Authentic Varanasi Street Food",
    excerpt: "Discover the legendary chaat vendor that has been serving authentic Varanasi street food for generations.",
    category: "Food & Travel",
    date: "May 2026",
    readTime: "8 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp",
    slug: "gopi-chaat-bhandar",
    featured: true,
    location: "Gopi Chaat Bhandar",
    locationUrl: "https://maps.app.goo.gl/HmFELDom295jCXFT8",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_street_food_chaat-4d4a4KC8inBZpyQScYLdJ2.webp"],
    rating: 4.2,
    reviews: 525,
    tags: ["street food", "chaat", "Varanasi", "authentic", "budget-friendly", "backpacker", "food travel"],
    content: `## The Heart of Varanasi's Street Food Culture

Nestled in the bustling lanes of Khojwan, Bhelupur, Gopi Chaat Bhandar stands as an iconic institution in Varanasi's culinary landscape.

### A Legacy of Flavor

Walking up to Gopi Chaat Bhandar feels like stepping into the soul of Varanasi. The energetic stall is perpetually crowded with hungry customers.

### The Must-Try Specialties

**Tomato Chaat** - The undisputed star of the menu. Crispy papdi topped with boiled potatoes, chickpeas, and tangy tomato curry. At just Rs. 20-30, it's an absolute steal.

**Aloo Tikki** - Golden, crispy potato patties served with tamarind chutney and mint yogurt.

**Dahi Golgappa** - Hollow, crispy spheres filled with spiced potatoes and chickpeas, dunked into creamy yogurt.

**Pani Puri** - The classic street food that defines Indian snacking.

### Practical Information

**Location:** Peace Point Rd, near Union Bank of India, Khojwan, Bhelupur, Varanasi 221005

**Price Range:** Rs. 20-50 per item

**Operating Hours:** Open daily until 10 PM

**Best Time to Visit:** Early evening (5-8 PM) for the freshest preparations.

### The Verdict

Gopi Chaat Bhandar is a cultural institution. If you visit Varanasi and skip it, you have missed an essential piece of the city's soul.

**Rating:** 4.2/5 (525+ reviews)

**Perfect For:** Budget travelers, food enthusiasts, backpackers, families`,
  },
  "jaikara-silk-house": {
    id: "2",
    title: "Jaikara Silk House: Where Tradition Meets Elegance",
    excerpt: "Explore the finest Banarasi silk sarees at Jaikara Silk House.",
    category: "Shopping & Culture",
    date: "May 2026",
    readTime: "7 min read",
    author: "Holy Ganges Team",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp",
    slug: "jaikara-silk-house",
    featured: true,
    location: "Jaikara Silk House",
    locationUrl: "https://maps.app.goo.gl/iGEdcKrGVmgraUVj7",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/ngashiaHxdJH26MV4j7g68/varanasi_silk_saree_shop-mngRBE5gENapPaX8fSGgUP.webp"],
    rating: 5.0,
    reviews: 6,
    tags: ["Banarasi silk", "sarees", "shopping", "Varanasi", "traditional", "craftsmanship", "silk weaving"],
    content: `## The Legacy of Banarasi Silk: Jaikara Silk House

In the heart of Varanasi's historic silk district lies Jaikara Silk House, a sanctuary for those seeking authentic Banarasi silk sarees.

### The Soul of Banarasi Silk

Banarasi silk sarees are more than garments; they are investments in heritage.

### Collections That Inspire

**Pure Katan Silk Sarees** - Made from 100% pure silk with intricate zari work, perfect for weddings and festive occasions.

**Gold Zari Embroidered Sarees** - The hallmark of Banarasi craftsmanship with intricate floral motifs hand-woven using real gold thread.

**Contemporary Designs** - Modern interpretations of classic Banarasi designs that appeal to younger buyers.

### Practical Information

**Location:** C 26, 36 A-4, Ramkatora Rd, Varanasi 221001

**Contact:** 91 86040 83953

**Operating Hours:** Open daily until 9 PM

**Payment:** Cash, card, and online transfers accepted

**Delivery:** Pan-India delivery available

### Supporting Artisans

By choosing Jaikara Silk House, you support traditional artisans and weavers who have perfected their craft over centuries.

**Rating:** 5.0/5 (6 reviews)

**Perfect For:** Brides, collectors, gift-givers, anyone seeking authentic Banarasi silk sarees`,
  },
  "morning-boat-rides-varanasi": {
    id: "3",
    title: "The Insider's Guide to Morning Boat Rides in Varanasi",
    excerpt: "Discover the best starting points, fair prices, and the differences between sunrise and sunset boat rides.",
    category: "Travel Guide",
    date: "June 2026",
    readTime: "10 min read",
    author: "Holy Ganges Team",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    slug: "morning-boat-rides-varanasi",
    featured: true,
    location: "Assi Ghat",
    locationUrl: "https://maps.app.goo.gl/6g6i1odHdM5G87Tj7",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    rating: 4.9,
    reviews: 1200,
    tags: ["boat ride", "sunrise boat ride", "Assi Ghat", "Ganges", "Varanasi", "travel guide", "sunset boat ride", "backpacker"],
    content: `## Why a Boat Ride in Varanasi Is Unmissable

Few experiences capture the spirit of Varanasi better than watching the city awaken from the waters of the Ganges.

## Best Places to Start a Boat Ride

### Assi Ghat

The most popular starting point for early morning rides with a peaceful atmosphere.

### Dashashwamedh Ghat

The busiest and most famous ghat in Varanasi. Evening rides here provide spectacular views of the Ganga Aarti.

### Kedar Ghat

Less crowded and ideal for travelers looking for a quieter experience.

## Typical Boat Ride Prices

**Shared Boats - Sunrise rides:** 150 to 300 rupees per person

**Shared Boats - Sunset rides:** 200 to 400 rupees per person

**Private Row Boats:** 800 to 1500 rupees depending on duration.

**Motor Boats:** 300 to 600 rupees per person.

## Sunrise vs Sunset Boat Ride

### Sunrise Boat Ride

Best time: 5:00 AM to 7:00 AM. Peaceful atmosphere, beautiful golden light, fewer crowds, cooler temperatures.

### Sunset Boat Ride

Best time: 5:00 PM to 7:00 PM. Views of illuminated ghats, watch the Ganga Aarti from the river. More crowds and higher prices.

## Our Recommendation

If you are staying at Holy Ganges Dorms, wake up before sunrise and head to Assi Ghat. A shared rowboat costs around 200 to 300 rupees and offers one of the most memorable experiences in Varanasi.

**Rating:** 4.9/5 (1200+ reviews)

**Perfect For:** Photographers, spiritual seekers, first-time visitors`,
  },
};

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-3xl font-serif font-bold mt-12 mb-5 text-gray-900">
          {line.slice(3)}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
          {line.slice(4)}
        </h3>
      );
    }
    if (line.trim() === "---") {
      return <hr key={i} className="my-10 border-gray-200" />;
    }
    if (line.startsWith("> ")) {
      return (
        <blockquote key={i} className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
          {line.slice(2)}
        </blockquote>
      );
    }
    if (line.startsWith("- ") || line.startsWith("• ")) {
      const text = line.slice(2);
      const parts = text.split(/(\*\*[^*]+\*\*)/);
      return (
        <ul key={i} className="ml-6 mb-2">
          <li className="list-disc text-gray-700 leading-8">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
              ) : (part)
            )}
          </li>
        </ul>
      );
    }
    if (line.trim() === "") {
      return <div key={i} className="h-4" />;
    }
    const parts = line.split(/(\*\*[^*]+\*\*)/);
    return (
      <p key={i} className="text-[17px] leading-8 text-gray-700 mb-4">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
          ) : (part)
        )}
      </p>
    );
  });
}

export default function Blogs() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedPost = selectedSlug ? blogDetails[selectedSlug] : null;

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <button
            onClick={() => setSelectedSlug(null)}
            className="mb-6 text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1"
          >
            Back to Blogs
          </button>
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {selectedPost.category}
          </span>
          <h1 className="text-3xl font-serif font-bold mt-4 mb-2 text-gray-900">{selectedPost.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
            <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {selectedPost.rating} ({selectedPost.reviews} reviews)</span>
          </div>
          <button
            onClick={() => window.open(selectedPost.locationUrl, "_blank")}
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8"
          >
            <MapPin size={14} /> {selectedPost.location}
          </button>
          <div className="text-gray-700">{renderContent(selectedPost.content)}</div>
          <hr className="my-8 border-gray-200" />
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {selectedPost.tags.map((tag) => (
                <span key={tag} className="text-xs bg-yellow-50 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className="mt-10 rounded-2xl overflow-hidden relative"
            style={{ backgroundImage: `url(${selectedPost.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Explore?</h3>
              <p className="text-white/90 mb-6">Visit {selectedPost.location} and experience the magic of Varanasi firsthand.</p>
              <Button
                onClick={() => window.open(selectedPost.locationUrl, "_blank")}
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 gap-2"
              >
                Get Directions Now <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">From the Ghats</h1>
        <p className="text-gray-500 mb-10">Hidden spots, local stories, and honest guides from Holy Ganges Dorms.</p>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedSlug(post.slug)}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-900 mt-3 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary text-xs p-0 h-auto hover:bg-transparent"
                    onClick={(e) => { e.stopPropagation(); setSelectedSlug(post.slug); }}
                  >
                    Read more <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
