import { motion } from "framer-motion";
import { useRef } from "react";

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: "THSC", logo: "/assets/thsc-logo.jpg" },
  { name: "Darjeeling Welfare Society", logo: "/assets/darjeeling-welfare-logo.jpg" },
  { name: "CIEL", logo: "/assets/ciel-logo.jpg" },
  // Add more sponsors as needed
];

const SponsorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-federal/10 via-marian/10 to-honolulu/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-federal via-honolulu to-pacific bg-clip-text text-transparent">
            Our Sponsors & Partners
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-marian to-pacific mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg">
            Proudly supported by industry leaders and community partners
          </p>
        </div>

        {/* Scrollable Sponsor List */}
        <div className="relative">
          {/* Shadow Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-72 snap-center"
              >
                <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-40">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-28 w-auto object-contain filter hover:brightness-110 transition-all"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional Scroll Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="h-1.5 w-8 rounded-full bg-pacific"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-marian/30"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-marian/30"></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

// Add this to your global CSS file