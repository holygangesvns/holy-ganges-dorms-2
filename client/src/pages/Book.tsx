import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useSeo } from "@/lib/useSeo";

/**
 * ============================================================
 * BOOKING MODE SWITCH
 * ============================================================
 * Change this one line to switch how the /book page works:
 *
 *   "nobeds"  -> Shows the free Nobeds booking widget (current default)
 *   "ezee"    -> Shows the eZee booking engine (paste your embed code
 *                into the EZEE EMBED section below before using this)
 *   "inquiry" -> Shows a simple inquiry form (via Formspree). Use this
 *                during your off-season when you're not running a live
 *                channel manager and just want to review requests
 *                yourself before confirming them.
 *
 * Just change the word below, commit, and redeploy. Nothing else
 * needs to change.
 * ============================================================
 */
const BOOKING_MODE: "nobeds" | "ezee" | "inquiry" = "nobeds";

const FORMSPREE_URL = "https://formspree.io/f/mojbkoja";

export default function Book() {
  useSeo({
    title: "Book Your Stay - Holy Ganges Dorms Varanasi",
    description:
      "Book directly with Holy Ganges Dorms for the best rates on clean, budget dorm beds near Assi Ghat, Varanasi. Free cancellation up to 14 days, instant WhatsApp support.",
    path: "/book",
  });

  // --- START NOBEDS RESIZE LOGIC (only needed for nobeds mode) ---
  useEffect(() => {
    if (BOOKING_MODE !== "nobeds") return;

    const handleResize = (e: MessageEvent) => {
      if (e.data && e.data.type === "nobeds-resize") {
        const frame = document.getElementById("nobeds-booking-frame");
        if (frame) {
          frame.style.height = e.data.height + "px";
        }
      }
    };

    window.addEventListener("message", handleResize, false);
    return () => window.removeEventListener("message", handleResize);
  }, []);
  // --- END NOBEDS RESIZE LOGIC ---

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header Area */}
          <div className="bg-orange-600 p-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Book Your Stay</h1>
            <p className="text-orange-100 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-orange-300 text-orange-300" />
              {BOOKING_MODE === "inquiry"
                ? "Send Us Your Dates \u2014 We'll Confirm Personally"
                : "Direct Booking for Best Rates Guaranteed"}
              <Star className="w-4 h-4 fill-orange-300 text-orange-300" />
            </p>
          </div>

          {/* Booking Engine Area */}
          <div className="p-2 md:p-6">
            {BOOKING_MODE === "nobeds" && (
              <iframe
                id="nobeds-booking-frame"
                src="https://nobeds.app/DirectForm/Step/1508198066"
                style={{ width: "100%", border: "none", minHeight: "600px" }}
                scrolling="no"
                title="Booking Engine"
              />
            )}

            {BOOKING_MODE === "ezee" && (
              <>
                {/*
                  ==============================================
                  EZEE EMBED — paste your eZee booking engine
                  embed code (iframe or widget script) here once
                  you have it from your eZee dashboard, replacing
                  this placeholder block.
                  ==============================================
                */}
                <div className="p-12 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-xl">
                  eZee booking engine goes here \u2014 paste embed code from
                  your eZee dashboard.
                </div>
              </>
            )}

            {BOOKING_MODE === "inquiry" && <InquiryForm />}
          </div>

          {/* Support Area */}
          <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
            <p className="text-gray-600 mb-4 font-medium">
              Need help with your reservation?
            </p>
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
  );
}

function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-12 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Thanks! We've got your request.
        </h3>
        <p className="text-gray-600">
          We'll review your dates and get back to you personally over
          WhatsApp or email to confirm your stay.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Mobile Number
        </label>
        <input
          type="tel"
          name="phone"
          required
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Check-in
          </label>
          <input
            type="date"
            name="check_in"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Check-out
          </label>
          <input
            type="date"
            name="check_out"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Guests
          </label>
          <input
            type="number"
            name="guests"
            min={1}
            defaultValue={1}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Message (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Anything else we should know? (e.g. female-only dorm, early check-in)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">
          Something went wrong sending your request. Please try again, or
          message us directly on WhatsApp below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Booking Request"}
      </button>
    </form>
  );
}
