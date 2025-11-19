import darjeelingLogo from "/assets/darjeeling-welfare-logo.jpg";
import thscLogo from "/assets/thsc-logo.jpg";
import cielLogo from "/assets/ciel-logo.jpg";
import salesianLogo from "/assets/college.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden">

      {/* === BACKGROUND VIDEO === */}
      <video
        src="https://player.vimeo.com/progressive_redirect/download?..."
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      ></video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* MAIN CONTENT */}
      <div className="relative container mx-auto max-w-7xl px-4 py-16">

        {/* === TOP LOGOS === */}
        <div className="flex flex-col items-center space-y-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-xl shadow-xl">
              <img src={darjeelingLogo} className="h-24 md:h-28 object-contain" />
            </div>

            <p className="text-base md:text-lg font-semibold italic text-blue-100">
              In Collaboration With
            </p>

            <div className="bg-white p-4 rounded-xl shadow-xl">
              <img src={salesianLogo} className="h-24 md:h-28 object-contain" />
            </div>
          </div>

          <div className="flex items-center gap-10 mt-4">
            <div className="bg-white p-3 rounded-xl shadow-xl">
              <img src={thscLogo} className="h-16 md:h-20 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl shadow-xl">
              <img src={cielLogo} className="h-16 md:h-20 object-contain" />
            </div>
          </div>
        </div>

        {/* === TITLE === */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Rozgar Mela 2.0
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mt-2">
            A Platform where talent meets opportunity
          </h2>
        </div>

        {/* === COUNTS BLOCK (Left Side Counts) === */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-16">
          <p className="text-lg md:text-xl font-light text-blue-100">
            Event Successfully Concluded!  
            Thank you to all employers, candidates & partners.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 text-lg md:text-xl font-semibold">
            <p>📌 <span className="text-white">15th & 16th Nov 2025</span></p>
            <p>🏢 <span className="text-white">60+ Top Companies</span></p>
            <p>👥 <span className="text-white">5,000+ Walk-in</span></p>
            <p>🎉 <span className="text-white">2,000+ Offered & Shortlisted</span></p>
          </div>
        </div>

        {/* === SUCCESS VIDEO (Fixed Size, Non-Responsive) === */}
        <div className="relative w-[800px] h-[450px] mx-auto border-2 border-white/40 rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/123456789"
            width="800"
            height="450"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Hero;
