import React from "react";

const EventPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-xl flex justify-center items-center px-4 select-none">
      
      {/* GLASS CARD */}
      <div className="event-glass-card max-w-2xl p-8 text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ROZGAR MELA 2.0 – MEGA JOB DRIVE
        </h1>

        <p className="text-white/90 text-lg md:text-xl mb-4">
          The event has successfully concluded!
        </p>

        <div className="text-white text-lg space-y-2 mb-8 font-semibold">
          <p>📌 15th & 16th Nov 2025</p>
          <p>🏢 60+ Top Companies</p>
          <p>👥 5,000+ Walk-in</p>
          <p>🎉 2,000+ Offered & Shortlisted</p>
        </div>

        <p className="text-white/90 mb-6">
          Thank you for making Rozgar Mela 2.0 a grand success!
        </p>

        <div className="mx-auto rounded-xl overflow-hidden shadow-xl border border-white/30 w-[360px] h-[220px] md:w-[480px] md:h-[270px]">
          <video
            src="/assets/video/DWS V1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* CSS for Glass */}
      <style>{`
        .event-glass-card {
          background: rgba(255, 255, 255, 0.22);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4.3px);
          -webkit-backdrop-filter: blur(4.3px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

    </div>
  );
};

export default EventPopup;
