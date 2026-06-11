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
  excerpt:
    "Planning a boat ride in Varanasi? Discover the best ghats to start from, current prices, practical tips to avoid scams, and whether sunrise or sunset rides offer the best experience.",
  category: "Travel Guide",
  date: "June 2026",
  readTime: "10 min read",
  author: "Holy Ganges Team",
  image: "https://images.unsplash.com/photo-1561361058-c24cec7557ef?w=1200&q=80",
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

Nestled in the bustling lanes of Khojwan, Bhelupur, Gopi Chaat Bhandar stands as an iconic institution in Varanasi's culinary landscape. This humble yet legendary street food vendor has become a pilgrimage site for food enthusiasts, backpackers, and locals who seek authentic flavors of the holy city.

### A Legacy of Flavor

Walking up to Gopi Chaat Bhandar feels like stepping into the soul of Varanasi. The energetic stall is perpetually crowded with hungry customers — tourists and locals sharing the same wooden benches, the same stories, the same unforgettable experience.

### The Must-Try Specialties

**Tomato Chaat** - The undisputed star of the menu. Crispy papdi topped with boiled potatoes, chickpeas, and tangy tomato curry. At just Rs. 20-30, it's an absolute steal.

**Aloo Tikki** - Golden, crispy potato patties served with tamarind chutney and mint yogurt.

**Dahi Golgappa** - Hollow, crispy spheres filled with spiced potatoes and chickpeas, dunked into creamy yogurt.

**Pani Puri** - The classic street food that defines Indian snacking. The vendor's pani is legendary.

### Practical Information

**Location:** Peace Point Rd, near Union Bank of India, Khojwan, Bhelupur, Varanasi 221005

**Price Range:** Rs. 20-50 per item

**Operating Hours:** Open daily until 10 PM

**Best Time to Visit:** Early evening (5-8 PM) for the freshest preparations.

### The Verdict

Gopi Chaat Bhandar is a cultural institution. If you visit Varanasi and skip it, you've missed an essential piece of the city's soul.

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

In the heart of Varanasi's historic silk district lies Jaikara Silk House — a sanctuary for those seeking authentic Banarasi silk sarees that represent centuries of weaving mastery. This is not just a shop; it is a living museum of Indian textile heritage.

### The Soul of Banarasi Silk

Banarasi silk sarees are more than garments; they are investments in heritage. Each saree is a masterpiece created by skilled weavers who have inherited their craft through generations.

### Collections That Inspire

**Pure Katan Silk Sarees** - Made from 100% pure silk with intricate zari work, perfect for weddings and festive occasions.

**Gold Zari Embroidered Sarees** - The hallmark of Banarasi craftsmanship with intricate floral motifs hand-woven using real gold thread.

**Contemporary Designs** - Modern interpretations of classic Banarasi designs that appeal to younger buyers.

### Practical Information

**Location:** C 26, 36 A-4, Ramkatora Rd, Varanasi 221001

**Contact:** +91 86040 83953

**Operating Hours:** Open daily until 9 PM

**Payment:** Cash, card, and online transfers accepted

**Delivery:** Pan-India delivery available

### Supporting Artisans

By choosing Jaikara Silk House, you are making a conscious choice to support traditional artisans and weavers. You are investing in a craft that has been perfected over centuries and ensuring that this beautiful tradition continues for generations to come.

Every saree is a masterpiece. Every purchase is a vote for heritage, craftsmanship, and authenticity.

**Rating:** 5.0/5 (6 reviews)

**Perfect For:** Brides, collectors, gift-givers, anyone seeking authentic Banarasi silk sarees`,
  },
  
"morning-boat-rides-varanasi": {
  id: "3",
  title: "The Insider's Guide to Morning Boat Rides in Varanasi",
  excerpt:
    "Discover the best starting points, fair prices, and the differences between sunrise and sunset boat rides.",
  category: "Travel Guide",
  date: "June 2026",
  readTime: "10 min read",
  author: "Holy Ganges Team",
  image: "https://images.unsplash.com/photo-1561361058-c24cec7557ef?w=1200&q=80",
  slug: "morning-boat-rides-varanasi",
  featured: true,
  location: "Assi Ghat",
  locationUrl: "https://maps.app.goo.gl/6g6i1odHdM5G87Tj7",
  images: [
    "https://images.unsplash.com/photo-1561361058-c24cec7557ef?w=1200&q=80"
  ],
  rating: 4.9,
  reviews: 1200,
  tags: [
    "boat ride",
    "sunrise boat ride",
    "Assi Ghat",
    "Ganges",
    "Varanasi",
    "travel guide",
    "sunset boat ride",
    "backpacker"
  ],
  content: `## Why a Boat Ride in Varanasi Is Unmissable

Few experiences capture the spirit of Varanasi better than watching the city awaken from the waters of the Ganges. As priests begin their morning rituals and the first rays of sunlight touch the ancient ghats, you witness a side of the city that cannot be experienced from land.

For many travelers, a sunrise boat ride becomes the highlight of their entire trip.

## Best Places to Start a Boat Ride

### Assi Ghat

Assi Ghat is the most popular starting point for early morning rides. It offers a peaceful atmosphere and easy access for travelers staying near the southern ghats.

### Dashashwamedh Ghat

The busiest and most famous ghat in Varanasi. Evening rides here provide spectacular views of the Ganga Aarti.

### Kedar Ghat

Less crowded and ideal for travelers looking for a quieter experience.

### Rajendra Prasad Ghat

A convenient alternative with plenty of shared and private boats available.

## Typical Boat Ride Prices

### Shared Boats

**Sunrise rides:** ₹150–₹300 per person

**Sunset rides:** ₹200–₹400 per person

### Private Row Boats

₹800–₹1,500 depending on duration and bargaining.

### Motor Boats

₹300–₹600 per person.

Prices can increase during festivals and holidays.

## How to Avoid Tourist Scams

### Agree on the Price Before Boarding

Always confirm:

**Total cost**

**Private or shared boat**

**Duration**

**Row boat or motor boat**

### Compare Multiple Boats

Never accept the first offer immediately. Walking a few meters often saves money.

### Sunrise Means Less Hassle

Morning rides are usually calmer, less crowded, and easier to negotiate.

## Sunrise vs Sunset Boat Ride

### Sunrise Boat Ride

Best time: 5:00 AM – 7:00 AM

Advantages:

Peaceful atmosphere

Beautiful golden light

Excellent photography

Authentic local life

Cool temperatures

Fewer crowds

Many travelers consider sunrise to be the best boat ride experience in Varanasi.

### Sunset Boat Ride

Best time: 5:00 PM – 7:00 PM

Advantages:

Views of the illuminated ghats

Watch the Ganga Aarti from the river

Lively atmosphere

Ideal for first-time visitors

Disadvantages:

More crowds

Higher prices

Busier river traffic

## What You'll See

A typical ride passes:

Assi Ghat

Kedar Ghat

Harishchandra Ghat

Dashashwamedh Ghat

Manikarnika Ghat

Panchganga Ghat

You'll witness pilgrims bathing, morning prayers, temple bells, and daily life unfolding on the banks of the Ganges.

## How Long Should Your Ride Be?

45 minutes: Quick experience.

1 hour: Most popular option.

90 minutes: Great for photographers.

2 hours: Complete experience.

## Best Time of Year

October to March offers the most pleasant weather.

Winter mornings often create magical mist over the river, making sunrise rides especially beautiful.

## Our Recommendation

If you're staying at Holy Ganges Dorms, wake up before sunrise and head to Assi Ghat. A shared rowboat usually costs around ₹200–₹300 and offers one of the most memorable experiences in Varanasi.

Photographers and culture lovers should choose sunrise.

Visitors wanting to see the Ganga Aarti from the water should choose sunset.

Either way, experiencing Varanasi from the Ganges is something you'll remember forever.

## Frequently Asked Questions

### Is a boat ride in Varanasi worth it?

Absolutely. It is one of the best ways to experience the city's spiritual atmosphere and ancient traditions.

### Which is better, sunrise or sunset?

Sunrise is quieter and more authentic, while sunset offers the spectacle of the Ganga Aarti.

### How much does a boat ride cost?

Shared boats usually cost ₹150–₹400 per person, while private boats range from ₹800–₹3,000.

### Which ghat is best?

Assi Ghat is best for sunrise rides, while Dashashwamedh Ghat is ideal for evening rides and the Ganga Aarti.`
}
};

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {

    // H2
    if (line.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-3xl font-serif font-bold mt-12 mb-5 text-gray-900"
        >
          {line.slice(3)}
        </h2>
      );
    }

    // H3
    if (line.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="text-2xl font-semibold mt-8 mb-3 text-gray-800"
        >
          {line.slice(4)}
        </h3>
      );
    }

    // Divider
    if (line.trim() === "---") {
      return (
        <hr
          key={i}
          className="my-10 border-gray-200"
        />
      );
    }

    // Quote
    if (line.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="border-l-4 border-primary pl-4 italic text-gray-600 my-6"
        >
          {line.slice(2)}
        </blockquote>
      );
    }

    // Bullet lists
    if (
      line.startsWith("- ") ||
      line.startsWith("• ")
    ) {
      const text = line.slice(2);

      const parts = text.split(/(\*\*[^*]+\*\*)/);

      return (
        <ul key={i} className="ml-6 mb-2">
          <li className="list-disc text-gray-700 leading-8">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong
                  key={j}
                  className="font-semibold text-gray-900"
                >
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </li>
        </ul>
      );
    }

    // Blank line
    if (line.trim() === "") {
      return <div key={i} className="h-4" />;
    }

    // Paragraph with bold support
    const parts = line.split(/(\*\*[^*]+\*\*)/);

    return (
      <p
        key={i}
        className="text-[17px] leading-8 text-gray-700 mb-4"
      >
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong
              key={j}
              className="font-semibold text-gray-900"
            >
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
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

          <button onClick={() => setSelectedSlug(null)} className="mb-6 text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Blogs
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

          <button onClick={() => window.open(selectedPost.locationUrl, "_blank")} className="flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8">
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

          <div className="mt-10 rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${selectedPost.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Explore?</h3>
              <p className="text-white/90 mb-6">Visit {selectedPost.location} and experience the magic of Varanasi firsthand.</p>
              <Button onClick={() => window.open(selectedPost.locationUrl, "_blank")} variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 gap-2">
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
            <Card key={post.id} className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedSlug(post.slug)}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-900 mt-3 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary text-xs p-0 h-auto hover:bg-transparent" onClick={(e) => { e.stopPropagation(); setSelectedSlug(post.slug); }}>
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

Nestled in the bustling lanes of Khojwan, Bhelupur, Gopi Chaat Bhandar stands as an iconic institution in Varanasi's culinary landscape. This humble yet legendary street food vendor has become a pilgrimage site for food enthusiasts, backpackers, and locals who seek authentic flavors of the holy city.

### A Legacy of Flavor

Walking up to Gopi Chaat Bhandar feels like stepping into the soul of Varanasi. The energetic stall is perpetually crowded with hungry customers — tourists and locals sharing the same wooden benches, the same stories, the same unforgettable experience.

### The Must-Try Specialties

**Tomato Chaat** - The undisputed star of the menu. Crispy papdi topped with boiled potatoes, chickpeas, and tangy tomato curry. At just Rs. 20-30, it's an absolute steal.

**Aloo Tikki** - Golden, crispy potato patties served with tamarind chutney and mint yogurt.

**Dahi Golgappa** - Hollow, crispy spheres filled with spiced potatoes and chickpeas, dunked into creamy yogurt.

**Pani Puri** - The classic street food that defines Indian snacking. The vendor's pani is legendary.

### Practical Information

**Location:** Peace Point Rd, near Union Bank of India, Khojwan, Bhelupur, Varanasi 221005

**Price Range:** Rs. 20-50 per item

**Operating Hours:** Open daily until 10 PM

**Best Time to Visit:** Early evening (5-8 PM) for the freshest preparations.

### The Verdict

Gopi Chaat Bhandar is a cultural institution. If you visit Varanasi and skip it, you've missed an essential piece of the city's soul.

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

In the heart of Varanasi's historic silk district lies Jaikara Silk House — a sanctuary for those seeking authentic Banarasi silk sarees that represent centuries of weaving mastery. This is not just a shop; it is a living museum of Indian textile heritage.

### The Soul of Banarasi Silk

Banarasi silk sarees are more than garments; they are investments in heritage. Each saree is a masterpiece created by skilled weavers who have inherited their craft through generations.

### Collections That Inspire

**Pure Katan Silk Sarees** - Made from 100% pure silk with intricate zari work, perfect for weddings and festive occasions.

**Gold Zari Embroidered Sarees** - The hallmark of Banarasi craftsmanship with intricate floral motifs hand-woven using real gold thread.

**Contemporary Designs** - Modern interpretations of classic Banarasi designs that appeal to younger buyers.

### Practical Information

**Location:** C 26, 36 A-4, Ramkatora Rd, Varanasi 221001

**Contact:** +91 86040 83953

**Operating Hours:** Open daily until 9 PM

**Payment:** Cash, card, and online transfers accepted

**Delivery:** Pan-India delivery available

### Supporting Artisans

By choosing Jaikara Silk House, you are making a conscious choice to support traditional artisans and weavers. You are investing in a craft that has been perfected over centuries and ensuring that this beautiful tradition continues for generations to come.

Every saree is a masterpiece. Every purchase is a vote for heritage, craftsmanship, and authenticity.

**Rating:** 5.0/5 (6 reviews)

**Perfect For:** Brides, collectors, gift-givers, anyone seeking authentic Banarasi silk sarees`,
  },
};

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) {
      return <h2 key={i} className="text-2xl font-serif font-bold mt-8 mb-4 text-gray-900">{line.slice(3)}</h2>;
    }
    if (line.startsWith("### ")) {
      return <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-gray-800">{line.slice(4)}</h3>;
    }
    if (line.trim() === "") {
      return <br key={i} />;
    }
    const parts = line.split(/(\*\*[^*]+\*\*)/);
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-2">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
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

          <button onClick={() => setSelectedSlug(null)} className="mb-6 text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Blogs
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

          <button onClick={() => window.open(selectedPost.locationUrl, "_blank")} className="flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8">
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

          <div className="mt-10 rounded-2xl overflow-hidden relative" style={{ backgroundImage: `url(${selectedPost.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Explore?</h3>
              <p className="text-white/90 mb-6">Visit {selectedPost.location} and experience the magic of Varanasi firsthand.</p>
              <Button onClick={() => window.open(selectedPost.locationUrl, "_blank")} variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 gap-2">
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
            <Card key={post.id} className="overflow-hidden border border-gray-200 rounded-2xl hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedSlug(post.slug)}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-900 mt-3 mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary text-xs p-0 h-auto hover:bg-transparent" onClick={(e) => { e.stopPropagation(); setSelectedSlug(post.slug); }}>
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
