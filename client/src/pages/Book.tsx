import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Star } from "lucide-react";

export default function Book() {
  // --- START NOBEDS RESIZE LOGIC ---
  useEffect(() => {
    const handleResize = (e: MessageEvent) => {
      if (e.data && e.data.type === 'nobeds-resize') {
        const frame = document.getElementById('nobeds-booking-frame');
        if (frame) {
          frame.style.height = e.data.height + 'px';
        }
      }
    };

    window.addEventListener('message', handleResize, false);
    return () => window.removeEventListener('message', handleResize);
  }, []);
  // --- END NOBEDS RESIZE LOGIC ---

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header Area */}
            <div className="bg-orange-600 p-8 text-center text-white">
              <h1 className="text-4xl font-bold mb-2">Book Your Stay</h1>
              <p className="text-orange-100 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-orange-300 text-orange-300" />
                Direct Booking for Best Rates Guaranteed
                <Star className="w-4 h-4 fill-orange-300 text-orange-300" />
              </p>
            </div>

            {/* Booking Engine Area */}
            <div className="p-2 md:p-6">
              <iframe 
                id="nobeds-booking-frame" 
                src="https://nobeds.app/DirectForm/Step/1508198066" 
                style={{ width: '100%', border: 'none', minHeight: '600px' }} 
                scrolling="no"
                title="Booking Engine"
              />
            </div>

            {/* Support Area */}
            <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
              <p className="text-gray-600 mb-4 font-medium">Need help with your reservation?</p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a 
                  href="https://wa.me/919151563046?text=Hi%20Holy%20Ganges%20Dorms%2C%20I%20need%20help%20with%20a%20booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all font-bold flex items-center gap-2"
                >
                  💬 Chat on WhatsApp
                </a>
                <a 
                  href="tel:+919151563046" 
                  className="px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-full hover:bg-gray-50 transition-all font-bold"
                >
                  📞 Call Us: +91 91515 63046
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
