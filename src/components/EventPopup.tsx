import React from "react";

const EventPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex justify-center items-center px-4 select-none">
      
      <div className="bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-8 max-w-2xl text-center backdrop-blur-md">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
          ROZGAR MELA 2.0 – MEGA JOB DRIVE
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-lg md:text-xl mb-4">
          The event has successfully concluded!
        </p>

        {/* Stats */}
        <div className="text-white text-lg space-y-2 mb-6">
          <p>📌 <strong>15th & 16th Nov 2025</strong></p>
          <p>🏢 <strong>60+ Top Companies</strong></p>
          <p>👥 <strong>5,000+ Walk-in</strong></p>
          <p>🎉 <strong>2,000+ Offered & Shortlisted</strong></p>
        </div>

        <p className="text-blue-200 text-lg mb-6">
          Thank you for making Rozgar Mela 2.0 a grand success!
        </p>

        {/* Video */}
        <div className="mx-auto rounded-xl overflow-hidden shadow-xl border border-white/20 w-[360px] h-[220px] md:w-[480px] md:h-[270px]">
          <video
            src="/assets/video/DWS V1.mp4"  // replace file name as you want
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default EventPopup;
