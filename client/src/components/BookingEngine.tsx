import { useEffect } from 'react';

export default function BookingEngine() {
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

  return (
    <div className="w-full mt-8 rounded-xl overflow-hidden shadow-lg bg-white p-4">
      <iframe
        id="nobeds-booking-frame"
        src="https://nobeds.app/DirectForm/Step/1508198066"
        style={{ width: '100%', border: 'none', minHeight: '500px' }}
        scrolling="no"
        title="NoBeds Booking Engine"
      />
    </div>
  );
}
