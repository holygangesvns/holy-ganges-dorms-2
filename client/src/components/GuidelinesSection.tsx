import { useEffect, useState } from "react";
import { LogIn, LogOut, X, IdCard, Ban, CalendarX, Users, RefreshCcw } from "lucide-react";

// ---- Full guideline content, grouped by section ----
// Edit this object any time your policies change — both the preview
// banner and the modal pull from the same source, so nothing drifts.
const guidelineGroups: { title: string; items: string[] }[] = [
  {
    title: "Check-In & Check-Out",
    items: [
      "Check-in: 11:00 AM onwards (early check-in free, subject to availability).",
      "Early check-in can only be confirmed on the day of arrival.",
      "Check-out: before 10:00 AM. Late check-out is not allowed.",
      "Guests may use common areas, shared washrooms, and luggage storage before check-in and after check-out.",
      "Valid ID required: Aadhaar, Driving License, Voter ID, or Passport.",
      "Foreign guests must carry a passport with a valid visa.",
      "Local IDs are accepted.",
      "Couple-friendly property.",
      "Non-resident guests are not allowed beyond reception.",
    ],
  },
  {
    title: "Key Policy",
    items: [
      "A physical key/lock is provided complimentary, free of charge, for the duration of your stay.",
      "Keys must be returned at checkout.",
      "A charge of ₹500 will apply for any lost or unreturned key.",
    ],
  },
  {
    title: "Reservation Policy",
    items: [
      "Full payment is required at the time of booking.",
      "There is no age limit for guests — all ages are welcome.",
      "Children under 5 years old stay free of cost.",
      "Rates may change based on availability and season.",
      "GST applies to all purchases at Holy Ganges Dorms.",
      "Please verify your booking voucher for the correct date, rate, and room type.",
      "Choose the right dorm type at the time of booking: Mixed, Male Only, or Female Only.",
      "Gender-based dorm rules apply strictly. No refunds if these rules are violated.",
    ],
  },
  {
    title: "Foreign Guest Policy",
    items: [
      "Foreign nationals are welcome at Holy Ganges Dorms with no additional restrictions.",
      "Foreign nationals must carry a valid passport with an appropriate visa.",
    ],
  },
  {
    title: "Pet Policy",
    items: [
      "Only cats and dogs are allowed.",
      "Pets must not disturb other guests.",
      "Owners are responsible for their pets at all times.",
    ],
  },
  {
    title: "Stay Policy",
    items: [
      "Free, unlimited Wi-Fi at no extra cost.",
      "Silent hours: 10:00 PM – 8:00 AM.",
      "Alcohol and smoking are permitted only in designated areas of the property.",
      "Please maintain hygiene in designated smoking/drinking areas and use the dustbins provided. Guests found littering will be penalised with a fine of ₹1,000.",
      "All dining/eating is to be done in the common area (balcony) only. Food items are not allowed on beds or inside the dorm.",
      "Unlawful activities (gambling, prostitution, drugs, etc.) are strictly prohibited.",
      "Limited vehicle parking, subject to availability.",
      "Common areas and entertainment cannot be reserved or restricted by individual guests.",
      "Guests are responsible for belongings stored in lockers. Holy Ganges Dorms is not liable for losses.",
      "Guests are liable for any property damage and will be charged accordingly.",
      "Holy Ganges Dorms reserves the right of admission.",
      "Images used for marketing are for representation only; actual room setup may vary.",
      "Firearms, ammunition, explosives, or weapons are strictly prohibited.",
    ],
  },
  {
    title: "Cancellation & Changes",
    items: [
      "Free cancellation or modification up to 14 days before check-in.",
      "Cancellations made between 7–14 days before check-in: 50% cancellation charge applicable.",
      "Cancellations made within 7 days of check-in: 100% cancellation charge applicable.",
      "Bookings during Dev Deepawali, Holi, and the New Year period (20 December – 3 January) are non-refundable.",
      "No changes allowed after the cut-off date.",
      "For cancellations or modifications, email holygangesvns@gmail.com.",
      "Bookings made via OTAs (MakeMyTrip, Booking.com, Goibibo, etc.) must be cancelled directly through the respective platform.",
      "Refunds are processed immediately on our end but may take up to 10 days to reflect, depending on your bank.",
      "No-shows will be charged 100% of the booking amount.",
      "No refunds for early departures.",
    ],
  },
];

// The handful of rules shown on the preview banner — pick the ones
// guests are most likely to trip up on if they don't see them.
const previewHighlights: { icon: React.ElementType; text: string }[] = [
  { icon: IdCard, text: "Govt. photo ID required (Aadhaar, DL, Voter ID, or Passport)." },
  { icon: Users, text: "No age limit — all ages welcome. Under 5s stay free." },
  { icon: Ban, text: "Alcohol & smoking allowed only in designated areas." },
  { icon: RefreshCcw, text: "Free cancellation up to 14 days before check-in." },
  { icon: CalendarX, text: "Bookings 20 Dec – 3 Jan are non-refundable." },
];

export default function GuidelinesSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll while the modal is open, close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Guidelines</h2>

      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 sm:p-6">
        {/* Check-in / check-out */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
            <LogIn className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-gray-600">Check in:</span>
            <span className="text-sm font-semibold text-gray-900">11:00 AM</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
            <LogOut className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-gray-600">Check out:</span>
            <span className="text-sm font-semibold text-gray-900">10:00 AM</span>
          </div>
        </div>

        {/* Preview highlights */}
        <ul className="space-y-2.5 mb-5">
          {previewHighlights.map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-700">
              <Icon className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
              <span className="text-sm sm:text-base">{text}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-white border border-gray-300 rounded-full px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
        >
          View all guidelines
        </button>
      </div>

      {/* ---- Modal ---- */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-0 sm:px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[85vh] flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Property Guidelines</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close guidelines"
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-6">
              {guidelineGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-600 mb-2.5">
                    {group.title}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
