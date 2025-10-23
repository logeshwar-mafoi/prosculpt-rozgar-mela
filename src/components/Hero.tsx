import { Calendar, MapPin, Users, Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import darjeelingLogo from "/assets/darjeeling-welfare-logo.jpg";
import thscLogo from "/assets/thsc-logo.jpg";
import cielLogo from "/assets/ciel-logo.jpg";
import salesianLogo from "/assets/college.png";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Employer List.pdf"; // ✅ Path to your PDF
    link.download = "ROZGAR_MELA_2.0_Employers_List_2025.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-federal via-marian to-honolulu text-white px-4 py-8">
      <div className="container mx-auto max-w-7xl">
        {/* === TOP SECTION === */}
        <div className="flex flex-col items-center mt-8 space-y-8">
          {/* Centered Row: DWS + Collaboration + College */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={darjeelingLogo}
                alt="Darjeeling Welfare Society"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </div>

            <p className="text-base md:text-lg font-semibold italic text-blue-100 text-center">
              In Collaboration With
            </p>

            <div className="bg-white p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={salesianLogo}
                alt="Salesian College"
                className="h-24 md:h-28 w-auto object-contain"
              />
            </div>
          </div>

          {/* === MIDDLE TITLE === */}
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 animate-fade-in">
              Rozgar Mela 2.0
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-blue-200 animate-fade-in">
              A Platform where talent meets opportunity
            </h2>
          </div>

          {/* === BOTTOM LOGOS === */}
          <div className="flex justify-center items-center gap-10 mt-6">
            <div className="bg-white p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={thscLogo}
                alt="THSC"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="bg-white p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <img
                src={cielLogo}
                alt="CIEL"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* === DESCRIPTION === */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-12">
          <div className="text-center mb-12 max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in font-light text-blue-100">
              Join us for the biggest job drive of the year! Connect with leading
              employers across multiple industries and kickstart your career journey.
            </p>
          </div>

          {/* === INFO CARDS === */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/15 backdrop-blur-md border border-blue-300/20 shadow-lg hover:bg-blue-600/20 transition-all">
              <Calendar className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">Nov 15-16, 2025</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/15 backdrop-blur-md border border-blue-300/20 shadow-lg hover:bg-blue-600/20 transition-all">
              <MapPin className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">
                Salesian College, West Bengal
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/15 backdrop-blur-md border border-blue-300/20 shadow-lg hover:bg-blue-600/20 transition-all">
              <Users className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">50+ Employers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600/15 backdrop-blur-md border border-blue-300/20 shadow-lg hover:bg-blue-600/20 transition-all">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">7000+ Jobs</span>
            </div>
          </div>

          {/* === CTA BUTTONS === */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {/* Register Button */}
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSf7RQuLo9-xxgxFn_6XD9F6E5KoDNoPN3OA2NbDFKcrUr0Fiw/viewform",
                  "_blank"
                )
              }
              className="px-8 py-6 text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all shadow-2xl"
            >
              Register Now
            </Button>

            {/* Sign Up Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://app.prosculpt.co/student-registration", "_blank")}
              className="px-8 py-6 text-lg font-semibold bg-blue-600/10 text-white border-2 border-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all backdrop-blur-md shadow-2xl"
            >
              Sign Up
            </Button>

            {/* Download Employer List Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownload}
              className="px-8 py-6 text-lg font-semibold bg-blue-600/10 text-white border-2 border-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all backdrop-blur-md shadow-2xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Employer List
            </Button>
          </div>

          {/* === Last Date to Apply with Blink === */}
          <p className="mt-4 text-lg md:text-xl font-bold text-red-500 animate-blink">
            Last Date to Apply: 31st October 2025
          </p>
        </div>
      </div>

      {/* === Decorative Backgrounds === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* === Blink Animation === */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 4s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
