import React from "react";

const EventPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-2xl flex justify-center items-center px-4 select-none">

      {/* GLASS BLUE CARD */}
      <div className="
        bg-gradient-to-br from-blue-600/30 via-blue-500/25 to-blue-400/20
        border border-white/30
        shadow-2xl
        backdrop-blur-2xl
        rounded-3xl
        p-10
        max-w-2xl
        text-center
        animate-fadeIn
      ">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-100 drop-shadow-lg mb-4">
          ROZGAR MELA 2.0 – MEGA JOB DRIVE
        </h1>

        {/* Subtitle */}
        <p className="text-blue-200 text-lg md:text-xl mb-4 font-medium">
          The event has successfully concluded!
        </p>

        {/* Stats */}
        <div className="text-blue-100 text-lg space-y-2 mb-8 font-semibold">
          <p>📌 <span className="text-white/90">15th & 16th Nov 2025</span></p>
          <p>🏢 <span className="text-white/90">60+ Top Companies</span></p>
          <p>👥 <span className="text-white/90">5,000+ Walk-in</span></p>
          <p>🎉 <span className="text-white/90">2,000+ Offered & Shortlisted</span></p>
        </div>

        <p className="text-blue-200 font-medium text-lg mb-6">
          Thank you for making Rozgar Mela 2.0 a grand success!
        </p>

        {/* Video */}
        <div className="
          mx-auto 
          rounded-2xl 
          overflow-hidden 
          shadow-xl 
          border border-white/20 
          w-[360px] h-[220px] 
          md:w-[480px] md:h-[270px]"
        >
          <video
            src="/assets/video/rozgar-success.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

    </div>
  );
};

export default EventPopup;
