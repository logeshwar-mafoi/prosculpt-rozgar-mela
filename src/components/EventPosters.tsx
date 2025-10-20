import { useEffect, useState } from "react";
import hourglassImage from "/assets/sandclock.png"; // use uploaded image
import rozgarMelaPoster from "/assets/rozgar-mela-poster.png";

const EventDetails = () => {
  const targetDate = new Date("2025-11-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-federal via-marian to-honolulu">
      <div className="container mx-auto max-w-6xl">
        {/* Updated title with blue gradient */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-light-cyan via-nonphoto to-nonphoto-2 bg-clip-text text-transparent">
          Event Details
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-16">
          {/* Poster Section - Added blue gradient shadow */}
          <div className="group overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,119,182,0.3)] transition-all duration-300 w-full md:w-1/2 aspect-[3/4] flex items-center justify-center bg-white">
            <img
              src={rozgarMelaPoster}
              alt="Rozgar Mela 2.0 Poster"
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Countdown Section */}
          <div className="flex flex-col items-center w-full md:w-1/2 text-center">
            {/* Hourglass Image */}
            <div className="flex justify-center mb-6">
              <img
                src={hourglassImage}
                alt="Hourglass"
                className="w-[1000px] h-[270px] object-contain mx-auto"
              />
            </div>

            {/* Updated subtitle with blue gradient */}
            <h3 className="text-4xl font-bold bg-gradient-to-r from-nonphoto via-pacific to-vivid-sky bg-clip-text text-transparent mb-6">
              Get ready for Rozgar Mela 2.0
            </h3>

            {/* Timer Boxes in one line */}
            <div className="flex justify-center items-center gap-5 md:gap-8 text-center flex-nowrap">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center bg-gradient-to-br from-federal via-honolulu to-pacific text-white text-4xl md:text-5xl font-bold px-6 py-4 rounded-xl shadow-[0_0_25px_rgba(0,114,182,0.5)] animate-pulse-glow transition-all duration-500 whitespace-nowrap"
                >
                  {item.value.toString().padStart(2, "0")}
                  <span className="mt-2 text-sm md:text-base font-medium text-honolulu uppercase tracking-wide bg-white/70 px-2 py-1 rounded-md">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Updated description text colors */}
            <p className="mt-10 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Get ready for <span className="font-semibold text-nonphoto-2">Rozgar Mela 2.0</span> — an extraordinary job fair connecting ambitious candidates with top employers. Mark your calendars for <span className="text-vivid-sky font-semibold">15th November 2025</span> and join us to shape your career future!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
