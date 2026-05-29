import BookingEngine from '@/components/BookingEngine';
import Navbar from '@/components/Navbar';

export default function Book() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Book Your Stay
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Reserve your bed at Holy Ganges Dorms — steps away from the sacred Ghats of Varanasi.
          </p>
        </div>
      </section>

      <section className="container py-8 max-w-3xl mx-auto">
        <BookingEngine />
      </section>

      <div className="text-center py-8 text-sm text-muted-foreground">
        <p>
          Need help? Call or WhatsApp us at{" "}
          
            href="https://wa.me/919151563046"
            className="text-primary font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            91515 63046
          </a>
        </p>
      </div>
    </div>
  );
}
