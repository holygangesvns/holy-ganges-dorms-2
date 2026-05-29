/*
 * 24 Hours in Varanasi - Holy Ganges Dorms Guest Guide
 * Design Philosophy: Sacred Minimalism
 * - Warm saffron and terracotta tones reflecting Hindu spirituality
 * - Generous whitespace and meditative pacing
 * - Elegant typography (Playfair Display for headings, Lato for body)
 * - Subtle animations that enhance without overwhelming
 */

import { MapPin, Clock, Utensils, Navigation } from 'lucide-react';
import { useState } from 'react';
import { MapView } from '@/components/Map';
import Navbar from '@/components/Navbar';

export default function Home() {

  const [activeTab, setActiveTab] = useState('booking');
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);

  // Detect scroll to show WhatsApp widget after hero section
  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setShowWhatsAppWidget(heroBottom < 0);
    }
  };

  // Add scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const handleMapReady = (map: google.maps.Map) => {
    // Holy Ganges Dorms coordinates (Assi Ghat area)
    const holyGangesDorms = { lat: 25.29666039994198, lng: 82.99789490933955 };
    
    // Key destinations
    const assiGhat = { lat: 25.28876188346205, lng: 83.00683457105292 };
    const dashashwamedh = { lat: 25.30624577674882, lng: 83.01023012819441 };
    const pahalwanLassi = { lat: 25.289820633466604, lng: 83.0047329131514 };
    const bharatSilkHouse = { lat: 25.296459282055686, lng: 82.99785655692435 };
    const jaikaraSilkHouse = { lat: 25.324138644934663, lng: 83.00345620358699 };
    const shreeJi = { lat: 25.315965756271098, lng: 83.01631345331059 };
    
    // Set map center to Holy Ganges Dorms
    map.setCenter(holyGangesDorms);
    map.setZoom(15);
    
    // Add markers
    const holyGangesMarker = new google.maps.Marker({
      position: holyGangesDorms,
      map: map,
      title: 'Holy Ganges Dorms',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    });
    
    const assiMarker = new google.maps.Marker({
      position: assiGhat,
      map: map,
      title: 'Assi Ghat',
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    });
    
    const dashashwamedMarker = new google.maps.Marker({
      position: dashashwamedh,
      map: map,
      title: 'Dashashwamedh Ghat (Ganga Aarti)',
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    });

    holyGangesMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #2C2C2C; font-family: Lato, sans-serif;"><strong>Holy Ganges Dorms</strong><br/>Your starting point</div>',
      });
      infoWindow.open(map, holyGangesMarker);
    });
    
    dashashwamedMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: '<div style="color: #2C2C2C; font-family: Lato, sans-serif;"><strong>Dashashwamedh Ghat</strong><br/>Ganga Aarti at 6-7 PM</div>',
      });
      infoWindow.open(map, dashashwamedMarker);
    });
  };

  // Testimonials data organized by platform
  const testimonials = {
    booking: {
      rating: 9.1,
      reviews: [
        {
          name: 'Kirit',
          country: 'India',
          rating: 5,
          quote: 'Host was wonderful, felt like family, a home away from home. The staff made me feel so welcome!'
        },
        {
          name: 'Prathap',
          country: 'India',
          rating: 5,
          quote: 'We like the rooms and the owner was so good and helping. The beds and blankets are good and the bathrooms are also excellent.'
        },
        {
          name: 'Patil',
          country: 'India',
          rating: 5,
          quote: 'Definitely recommend this property to anyone visiting Kashi. Whether you\'re traveling solo or in a group, this is the perfect place to stay.'
        },
        {
          name: 'Vijay',
          country: 'India',
          rating: 5,
          quote: 'The behaviour of the whole staff was excellent and specially the owner of the property was such a great hearted person. Highly recommended!'
        }
      ]
    },
    agoda: {
      rating: 10.0,
      reviews: [
        {
          name: 'Sophia',
          country: 'Germany',
          rating: 5,
          quote: 'I came solo but didn\'t need to worry about anything. The staff took care of me like family. The location is perfect for exploring Varanasi!'
        },
        {
          name: 'Rajesh',
          country: 'India',
          rating: 5,
          quote: 'Best budget accommodation for young travelers. The rooms and washrooms are super clean, beds comfortable, and the overall vibe very peaceful.'
        },
        {
          name: 'Ananya',
          country: 'India',
          rating: 5,
          quote: 'Great choice for solo travelers or backpackers. The staff were friendly and helpful. It\'s a beacon of hospitality in the heart of Varanasi.'
        }
      ]
    },
    google: {
      rating: 4.9,
      reviews: [
        {
          name: 'Amit',
          country: 'India',
          rating: 5,
          quote: 'Clean and comfortable rooms with excellent service. The location is perfect for accessing all major ghats. Highly recommended!'
        },
        {
          name: 'Lisa',
          country: 'USA',
          rating: 5,
          quote: 'Amazing experience! The owner and staff are incredibly helpful and welcoming. Best value for money in Varanasi.'
        },
        {
          name: 'Ravi',
          country: 'India',
          rating: 5,
          quote: 'Fantastic dorm with great vibes. Perfect for solo travelers. The free WiFi and hot water are a plus. Will definitely stay again!'
        }
      ]
    },
    mmt: {
      rating: 4.7,
      reviews: [
        {
          name: 'Neha',
          country: 'India',
          rating: 5,
          quote: 'Wonderful stay at Holy Ganges Dorms. The staff is very cooperative and the rooms are clean. Great location near the ghats.'
        },
        {
          name: 'Vikram',
          country: 'India',
          rating: 5,
          quote: 'Excellent budget accommodation. The owner is very friendly and accommodating. Would recommend to all backpackers visiting Varanasi.'
        },
        {
          name: 'Priya',
          country: 'India',
          rating: 5,
          quote: 'Very good experience. Clean rooms, helpful staff, and affordable rates. Perfect for exploring the spiritual side of Varanasi.'
        }
      ]
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      

  {/* OTA Links Section */}
  <div className="bg-gray-50 border-t border-border">
    <div className="container py-4 flex items-center justify-center gap-6">
      <span className="text-lg font-semibold text-gray-800">
        Find us on
      </span>

      <div className="flex items-center gap-6">
        {/* MakeMyTrip */}
        <a
          href="https://www.makemytrip.com/hotels/holy_ganges_vns-details-varanasi.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/makemytrip-logo_db5b97a3.png"
            alt="MakeMyTrip"
            className="h-10 w-10 object-contain rounded-full bg-white p-1"
          />
        </a>

        {/* Agoda */}
        <a
          href="https://www.agoda.com/en-in/holy-ganges-dorms/hotel/varanasi-in.html?cid=1844104&ds=mdj5Iwhl6Tfi%2FCIB"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/agoda-logo_dd96ed5c.png"
            alt="Agoda"
            className="h-10 w-10 object-contain rounded-full bg-white p-1"
          />
        </a>

        {/* Booking */}
        <a
          href="https://www.booking.com/hotel/in/holy-ganges-dorms-varanasi.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494200766/YLJAWcDwTjxGtMfK4DYocy/booking-logo_e90ccba9.png"
            alt="Booking.com"
            className="h-10 w-10 object-contain rounded-full bg-white p-1"
          />
        </a>
      </div>
    </div>
  </div>

      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/varanasi-hero-ganges-MfaFdsg4CvjcKKXqUvdhnr.webp"
          alt="Ganges River at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container text-center text-white">
          <h2 className="hero-text mb-4 drop-shadow-lg">24 Hours in Varanasi</h2>
          <p className="text-xl md:text-2xl font-light drop-shadow-md mb-8">
            A sacred journey through the City of Light
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
            <a
              href="#map"
              className="px-8 py-3 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30 transition-all font-medium w-full sm:w-auto text-center"
            >
              ✈️ Begin Your Journey
            </a>
            <a
              href="https://wa.me/919151563046?text=Hi%20Holy%20Ganges%20Dorms%2C%20I%27d%20like%20to%20book%20my%20stay%20in%20Varanasi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-medium w-full sm:w-auto text-center"
            >
              💬 Book Your Stay Now
            </a>
            <a
              href="/gallery"
              className="px-8 py-3 bg-white/20 backdrop-blur text-white rounded-full hover:bg-white/30 transition-all font-medium w-full sm:w-auto text-center"
            >
              📷 Have a Look
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="section-divider container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="section-heading">Walking Map & Routes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From Holy Ganges Dorms, explore the sacred ghats of Varanasi. The journey begins at your doorstep and leads you through the heart of this ancient city.
          </p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-border flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.227675541198!2d82.99784629999999!3d25.296553599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e310fe5d7d86f%3A0x8ab392e74619cdcf!2sHoly%20Ganges%20Dorms!5e0!3m2!1sen!2sin!4v1775466761847!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Assi Ghat</h3>
                <p className="text-muted-foreground">15-19 min walk • 1.2 km</p>
                <p className="text-sm mt-2">The peaceful southern ghat, perfect for morning walks and observing local rituals.</p>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Dashashwamedh Ghat</h3>
                <p className="text-muted-foreground">25-30 min walk • 2.1 km</p>
                <p className="text-sm mt-2">The main ghat where the spectacular Ganga Aarti ceremony takes place each evening.</p>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Hanuman Ghat</h3>
                <p className="text-muted-foreground">14 min walk</p>
                <p className="text-sm mt-2">A quieter ghat dedicated to Lord Hanuman, ideal for contemplative moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Testimonials Section - Below Map */}
      <section id="testimonials" className="section-divider bg-gradient-to-b from-saffron-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-heading">Guest Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from travelers who've experienced the magic of Holy Ganges Dorms across all major booking platforms.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
            {[
              { id: 'booking', label: 'Booking.com', icon: '📖' },
              { id: 'agoda', label: 'Agoda', icon: '🏨' },
              { id: 'google', label: 'Google', icon: '🔍' },
              { id: 'mmt', label: 'MakeMyTrip', icon: '✈️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mb-8 bg-white rounded-lg p-6 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average Rating</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {testimonials[activeTab as keyof typeof testimonials].rating}
                  </span>
                  <div>
                    {renderStars(testimonials[activeTab as keyof typeof testimonials].rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials[activeTab as keyof typeof testimonials].reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-semibold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{review.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className="section-divider bg-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-heading">Hidden Street Food Gems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover authentic Varanasi street food at these legendary spots beloved by locals and travelers alike.
            </p>
          </div>

          <div className="space-y-8">
            {/* Food Item 1 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">1</div>
                <a href="https://www.google.com/maps/place/Pahalvan+Lassi+Bhandar/@25.3120239,82.9281936,14z/data=!4m10!1m2!2m1!1sPahalwan+Lassi+Bhandar+Varanasi!3m6!1s0x398e2d7934d5b9df:0x88448335801ef1f6!8m2!3d25.3120239!4d82.9642425!15sCh9QYWhhbHdhbiBMYXNzaSBCaGFuZGFyIFZhcmFuYXNpWiEiH3BhaGFsd2FuIGxhc3NpIGJoYW5kYXIgdmFyYW5hc2mSAQl0ZWFfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVPY1dGclpHcFhhazVDV1RKNFRrMUZOWFpTYldSWlZqRndTV0pZWXhBQuABAPoBBAgAECc!16s%2Fg%2F11rvgc5n4n?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-primary hover:underline">
                  Pahalwan Lassi Bhandar
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Lanka Road, Assi Ghat
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Creamy, authentic lassi with various flavors
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A Varanasi institution since 1948, Pahalwan Lassi is famous for its rich, creamy lassi made from fresh yogurt and milk. The sweet lassi is a refreshing treat, while the salted version is perfect after exploring the ghats. The shop's simple wooden seating and old-world charm make it an authentic experience.
              </p>
              <p className="text-sm font-semibold text-primary mb-6">
                Best time: Morning to afternoon
              </p>
            </div>

            {/* Food Item 2 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">2</div>
                <a href="https://www.google.com/maps/place/Pappu+Tea+Stall/@25.2898086,83.0044076,17z/data=!3m1!4b1!4m6!3m5!1s0x398e31edfe7f3189:0xd85ab1e0109ba23a!8m2!3d25.2898086!4d83.0044076!16s%2Fg%2F11b6dfrmxt?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-primary hover:underline">
                  Pappu Chai
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Assi Ghat
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Traditional Indian chai prepared the old-fashioned way
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Pappu Chai is a beloved street chai stall where tea is prepared using traditional methods over an open flame. The chai is aromatic, strong, and perfectly sweetened. It's the perfect companion for morning walks along the ghats or afternoon explorations of Varanasi's narrow lanes.
              </p>
              <p className="text-sm font-semibold text-primary mb-6">
                Best time: Early morning and evening
              </p>
            </div>

            {/* Food Item 3 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">3</div>
                <a href="https://www.google.com/maps/place/Shreeji+-+Sweets+%26+Milk/@25.31583,83.0157341,17z/data=!3m1!4b1!4m6!3m5!1s0x398e2e22696a2263:0x7fc7332d063b361b!8m2!3d25.31583!4d83.0157341!16s%2Fg%2F11c5rtpf33?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-primary hover:underline">
                  Shree Ji
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Dashashwamedh Ghat area
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Traditional Indian sweets and milk-based desserts
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Shree Ji is renowned for its authentic Indian sweets and milk-based desserts. From traditional kheer to gulab jamun, every item is prepared fresh daily using quality ingredients. It's the perfect place to indulge in authentic Varanasi sweets and experience the local dessert culture.
              </p>
              <p className="text-sm font-semibold text-primary mb-6">
                Best time: Afternoon to evening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Section */}
      <section id="shopping" className="section-divider py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-heading">Treasures of Varanasi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover authentic Benarasi silk and textiles at these renowned shops trusted by locals and international visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shop 1 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">1</div>
                <a href="https://www.bharatsilkhouse.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-primary hover:underline">
                  Bharat Silk House
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Near Holy Ganges Dorms
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Premium Benarasi sarees and silk textiles
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Established in 1980, Bharat Silk House is one of Varanasi's most respected silk retailers. With a 5.0 Google rating and 576+ reviews, it's known for authentic handwoven Benarasi sarees with intricate zari work. The shop offers both retail and wholesale options, making it perfect for serious silk enthusiasts and gift shoppers alike.
              </p>
              <p className="text-sm font-semibold text-primary mb-6">
                Best time: Morning to afternoon
              </p>
              <div className="flex gap-3">
                <a href="tel:+919453263046" className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-opacity-90 transition-all">
                  📞 Call
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=25.296459282055686,82.99785655692435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-opacity-90 transition-all">
                  🗺️ Directions
                </a>
              </div>
            </div>

            {/* Shop 2 */}
            <div className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="food-badge">2</div>
                <a href="https://www.jaikarasilkhouse.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-primary hover:underline">
                  Jaikara Silk House
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Location:</strong> Ramkatora Road, Central Varanasi
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Specialty:</strong> Authentic Benarasi sarees and silk textiles
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                A trusted name in Varanasi's textile industry, Jaikara Silk House offers a wide selection of traditional Benarasi sarees with intricate zari work and authentic patterns. Known for quality craftsmanship and competitive pricing, it's an excellent destination for both retail and wholesale purchases of genuine handwoven silk.
              </p>
              <p className="text-sm font-semibold text-primary mb-6">
                Best time: Morning to afternoon
              </p>
              <div className="flex gap-3">
                <a href="tel:+918604083953" className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-opacity-90 transition-all">
                  📞 Call
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=25.3241386,83.0034562" target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-opacity-90 transition-all">
                  🗺️ Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ganga Aarti Section */}
      <section id="aarti" className="section-divider container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="section-heading">Ganga Aarti Ceremony</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Experience the most sacred ritual of Varanasi. The Ganga Aarti is a breathtaking ceremony of devotion, fire, and spirituality that has been performed for centuries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/varanasi-aarti-evening-o2QkEGJE9N2pmpHoQCYXAX.webp"
              alt="Ganga Aarti ceremony"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div className="timing-card mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Evening Aarti</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Summer (March - September)</p>
                  <p className="text-2xl font-semibold text-primary">7:00 PM</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Winter (October - February)</p>
                  <p className="text-2xl font-semibold text-primary">6:00 - 6:30 PM</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-lg font-semibold">Approximately 45 minutes</p>
                </div>
              </div>
            </div>

            <div className="timing-card">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Morning Aarti</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Assi Ghat</p>
                  <p className="text-2xl font-semibold text-primary">4:30 - 5:00 AM</p>
                </div>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  A peaceful, intimate experience with fewer crowds. Perfect for a meditative start to your day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 border border-border">
            <h4 className="font-semibold text-lg mb-4 text-primary">What to Expect</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Priests in traditional attire performing sacred rituals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Hundreds of oil lamps (diyas) creating a golden glow</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Sacred fire reflecting off the Ganges River</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Chanting and bells creating a spiritual atmosphere</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Crowds of devotees and visitors from around the world</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border">
            <h4 className="font-semibold text-lg mb-4 text-primary">Visitor Tips</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Arrive 30-45 minutes early to secure a good spot</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Wear comfortable shoes—you'll be standing for 45 minutes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Bring a light shawl or jacket, especially in winter</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Keep your phone secure in crowded areas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Respect the sacred nature of the ceremony</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="section-divider bg-secondary/20 py-16 md:py-24">
        <div className="container">
          <h2 className="section-heading">Sample 24-Hour Itinerary</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Early Morning (4:30 AM)</h4>
                <p className="text-muted-foreground">
                  Wake early and head to Assi Ghat for the peaceful morning Aarti. Experience the spiritual awakening of the city as pilgrims gather for this sacred ceremony.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Morning (7:00 AM - 10:00 AM)</h4>
                <p className="text-muted-foreground">
                  Enjoy breakfast and explore the narrow lanes of Varanasi. Visit local temples and experience the authentic morning energy of the city. Stop at Pappu Chai for traditional chai.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Late Morning (10:00 AM - 1:00 PM)</h4>
                <p className="text-muted-foreground">
                  Explore Assi Ghat and surrounding areas. Visit local shops and get a taste of Varanasi's vibrant street culture. Try Shree Ji for authentic street sweets.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Afternoon (1:00 PM - 4:00 PM)</h4>
                <p className="text-muted-foreground">
                  Rest at your accommodation or explore nearby areas. Visit Pahalwan Lassi Bhandar for a refreshing lassi. Take time to reflect and prepare for the evening ceremony.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  5
                </div>
                <div className="w-1 h-24 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h4 className="text-xl font-semibold mb-2">Evening (4:00 PM - 8:00 PM)</h4>
                <p className="text-muted-foreground">
                  Head to Dashashwamedh Ghat for the magnificent evening Ganga Aarti. Arrive early to secure a good spot. Experience the spiritual climax of your Varanasi journey.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  6
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Night (8:00 PM onwards)</h4>
                <p className="text-muted-foreground">
                  Enjoy dinner at a local restaurant or café. Reflect on your spiritual journey through Varanasi. Rest and prepare for more exploration the next day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Pack Section */}
      <section id="packing" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container">
          <h2 className="section-heading text-center mb-12">What to Pack for Varanasi</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Clothing */}
            <details className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                  <span className="text-2xl">👕</span>
                  Clothing & Footwear
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-amber-50 border-t border-border">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Lightweight, breathable cotton clothes</strong> — Varanasi is hot and humid, especially March-June</li>
                  <li>• <strong>Long pants/skirts and loose shirts</strong> — Respectful for visiting temples and spiritual sites</li>
                  <li>• <strong>Comfortable walking shoes</strong> — Narrow ghat lanes require sturdy footwear</li>
                  <li>• <strong>Flip-flops or sandals</strong> — Easy to remove when entering temples</li>
                  <li>• <strong>Light shawl or scarf</strong> — For temple visits and evening coolness</li>
                  <li>• <strong>Rain jacket or umbrella</strong> — Monsoon season (July-September) brings heavy showers</li>
                  <li>• <strong>Warm sweater</strong> — December-February evenings can be cool</li>
                </ul>
              </div>
            </details>

            {/* Health & Toiletries */}
            <details className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                  <span className="text-2xl">🏥</span>
                  Health & Toiletries
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-amber-50 border-t border-border">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Sunscreen (SPF 50+)</strong> — Essential for Ganges riverside exposure</li>
                  <li>• <strong>Insect repellent</strong> — Mosquitoes are common, especially near water</li>
                  <li>• <strong>Basic medications</strong> — Antacids, anti-diarrheal, pain relievers, antihistamines</li>
                  <li>• <strong>First-aid kit</strong> — Band-aids, antiseptic cream, blister treatment</li>
                  <li>• <strong>Prescription medications</strong> — Bring extra supplies; availability varies</li>
                  <li>• <strong>Dehydration salts</strong> — For managing water-related issues</li>
                  <li>• <strong>Personal hygiene items</strong> — Shampoo, soap, toothpaste (local options available)</li>
                </ul>
              </div>
            </details>

            {/* Essentials & Electronics */}
            <details className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  Essentials & Electronics
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-amber-50 border-t border-border">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Passport & travel documents</strong> — Keep copies separately</li>
                  <li>• <strong>Phone charger & power bank</strong> — Power outages can occur</li>
                  <li>• <strong>Universal power adapter</strong> — India uses Type A, C, D, and M plugs</li>
                  <li>• <strong>Camera or smartphone</strong> — Capture memories of the Ghats and Aarti</li>
                  <li>• <strong>Portable water bottle</strong> — Stay hydrated; refill at your accommodation</li>
                  <li>• <strong>Reusable shopping bag</strong> — For exploring local markets</li>
                  <li>• <strong>Notebook & pen</strong> — For journaling your spiritual journey</li>
                </ul>
              </div>
            </details>

            {/* Cultural Etiquette */}
            <details className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                  <span className="text-2xl">🙏</span>
                  Cultural Etiquette Tips
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-amber-50 border-t border-border">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Remove shoes</strong> before entering temples and sacred spaces</li>
                  <li>• <strong>Respect photography restrictions</strong> — Some temples prohibit photos during ceremonies</li>
                  <li>• <strong>Avoid touching religious items</strong> without permission</li>
                  <li>• <strong>Dress modestly</strong> — Cover shoulders and knees at temples</li>
                  <li>• <strong>Use right hand</strong> for eating and giving/receiving items (cultural practice)</li>
                  <li>• <strong>Be respectful during Aarti</strong> — Maintain silence and observe the ceremony</li>
                  <li>• <strong>Ask permission before photographing people</strong> — Always be courteous</li>
                </ul>
              </div>
            </details>

            {/* Seasonal Notes */}
            <details className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-amber-50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-3">
                  <span className="text-2xl">🌡️</span>
                  Seasonal Packing Guide
                </h3>
                <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-amber-50 border-t border-border space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Winter (Dec-Feb): 15-25°C</h4>
                  <p className="text-sm text-muted-foreground">Pack warm sweaters, jackets, and a light scarf. Mornings and evenings are cool, but afternoons are pleasant.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Summer (Mar-May): 30-45°C</h4>
                  <p className="text-sm text-muted-foreground">Pack minimal, lightweight clothing, wide-brimmed hat, sunglasses, and high-SPF sunscreen. Stay hydrated constantly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Monsoon (Jun-Sep): 25-35°C</h4>
                  <p className="text-sm text-muted-foreground">Pack waterproof jacket, umbrella, and quick-dry clothing. The Ganges can be rough; some ghats may be less accessible.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Autumn (Oct-Nov): 20-30°C</h4>
                  <p className="text-sm text-muted-foreground">Pack light layers. Weather is pleasant and ideal for visiting. Bring a light shawl for evening temple visits.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Holy Ganges Dorms</h4>
              <p className="text-sm text-muted-foreground">
                A sacred sanctuary for travelers seeking authentic Varanasi. Nestled near the spiritual heart of the Ghats, we offer clean, comfortable rooms and warm hospitality. Perfect for solo travelers, backpackers, and spiritual seekers exploring the City of Light.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#map" className="hover:text-primary transition-colors">Walking Map</a></li>
                <li><a href="#food" className="hover:text-primary transition-colors">Street Food</a></li>
                <li><a href="#shopping" className="hover:text-primary transition-colors">Treasures</a></li>
                <li><a href="#aarti" className="hover:text-primary transition-colors">Aarti</a></li>
                <li><a href="#packing" className="hover:text-primary transition-colors">Backpack</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Assi Ghat Road<br />
                Varanasi, India
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm text-muted-foreground">
                24/7 Availability<br />
                Front Desk Support
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Holy Ganges Dorms. Created with reverence for Varanasi's sacred heritage.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      {showWhatsAppWidget && (
        <a
          href="https://wa.me/919151563046?text=Hi%20Holy%20Ganges%20Dorms%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20your%20property."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-widget-enter fixed bottom-1/3 right-6 z-50 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/pasted_file_bpQRYT_image_4ae0fbc6.png"
            alt="WhatsApp"
            className="w-12 h-12 rounded-full"
          />
        </a>
      )}

      {/* Floating Backpack Button */}
      {showWhatsAppWidget && (
        <a
          href="#packing"
          className="whatsapp-widget-enter fixed right-6 z-50 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
          style={{ bottom: 'calc(33.333% - 80px)' }}
          title="View What to Pack Guide"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663494763389/3feaBiwoKqCAZU3tsnFXWU/backpack_new_transparent_7e1d0b36.png"
            alt="Backpack"
            className="w-12 h-12 rounded-full"
          />
        </a>
      )}
    </div>
  );
}
