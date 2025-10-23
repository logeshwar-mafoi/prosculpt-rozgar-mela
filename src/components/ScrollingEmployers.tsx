interface Employer {
  name: string;
  logo: string | null;
}

// Full list of employers from Index.tsx
const employers: Employer[] = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png" },
  { name: "SBI Insurance", logo: "/assets/banking/sbi.png" },
  { name: "Bajaj Finance", logo: "/assets/banking/bajaj.png" },
  { name: "Bajaj Allianz", logo: "/assets/banking/bajajalli.png" },
  { name: "Bandhan Bank", logo: "/assets/banking/bandhan.png" },
  { name: "Utkarsh Bank", logo: "/assets/banking/utkarsh.png" },
  { name: "Tata Motors", logo: "/assets/manufacturing/tatamotors.png" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png" },
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png" },
  { name: "Dixon Technologies", logo: "/assets/manufacturing/dixon.png" },
  { name: "Padget Technology", logo: "/assets/manufacturing/padget.png" },
  { name: "SATA", logo: "/assets/manufacturing/sata.png" },
  { name: "SHRIRAM Pistons", logo: "/assets/manufacturing/shriram.png" },
  { name: "TATA Electronics", logo: "/assets/manufacturing/tataelec.png" },
  { name: "DLJM Group", logo: "/assets/manufacturing/dljm.png" },
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png" },
  { name: "Taj Hotels", logo: "/assets/health-and-tour/taj.png" },
  { name: "Club Mahindra Resorts", logo: "/assets/health-and-tour/mahindra.png" },
  { name: "Bluspring", logo: "/assets/health-and-tour/blu-spring.jpg" },
  { name: "AEON Resorts", logo: "/assets/health-and-tour/aeon.png" },
  { name: "Sterling Holidays", logo: "/assets/health-and-tour/sterling.png" },
  { name: "TAJ/Vivanta Group", logo: "/assets/health-and-tour/taj.png" },
  { name: "Udaan Resorts Siliguri", logo: "/assets/health-and-tour/udaan.png" },
  { name: "VASSATI Services NCR", logo: "/assets/health-and-tour/vasati.png" },
  { name: "Sumi Yashshree", logo: "/assets/health-and-tour/yumi.png" },
  { name: "Royal Orchid Hotels", logo: "/assets/health-and-tour/royal.png" },
  { name: "Sodexo", logo: "/assets/health-and-tour/sodexo.png" },
  { name: "Apollo Sindoori Hotels Ltd.", logo: "/assets/health-and-tour/apollo-sindoori.png" },
  { name: "Birdys", logo: "/assets/health-and-tour/Birdys.png" },
  { name: "KFC", logo: "/assets/retail/kfc.png" },
  { name: "AB's (Absolute Barbecues)", logo: "/assets/retail/abs.png" },
  { name: "Barbeque Nation", logo: "/assets/retail/bbq.png" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png" },
  { name: "Vaango", logo: "/assets/retail/vaango.png" },
  { name: "Airport Food Courts", logo: "/assets/retail/food-court.jpg" },
  { name: "Food Courts", logo: "/assets/retail/food-court.jpg" },
  { name: "Tea Live", logo: "/assets/retail/tea.png" },
  { name: "Sanook Kitchen", logo: "/assets/retail/snook.png" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png" },
  { name: "WNS Global Services", logo: "/assets/IT/wns.png" },
  { name: "Ancile Technologies", logo: "/assets/IT/ancil.png" },
  { name: "Vodafone", logo: "/assets/telecom/vodafone.png" },
  { name: "PhonePe", logo: "/assets/telecom/PhonePe.png" },
];

export default function ScrollingEmployers() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-federal via-marian to-honolulu text-white overflow-hidden">
      <div className="w-full">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
          Participating Employers
        </h2>

        <div className="relative overflow-hidden">
          {/* Wrapper for the scrolling content */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {employers.map((emp, i) => (
              <div
                key={`set1-${i}`}
                className="w-40 md:w-48 flex-shrink-0 flex flex-col items-center justify-center gap-3"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 w-32 h-32 md:w-36 md:h-36 flex items-center justify-center border border-white/30">
                  {emp.logo ? (
                    <img
                      src={emp.logo}
                      alt={emp.name}
                      aria-label={`${emp.name} logo`}
                      className="object-contain max-h-20 md:max-h-24"
                    />
                  ) : (
                    <span className="text-xs text-black">No Logo</span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-blue-50 font-medium text-center h-8 flex items-center justify-center">
                  {emp.name}
                </p>
              </div>
            ))}

            {/* Second set of logos (duplicate for seamless loop) */}
            {employers.map((emp, i) => (
              <div
                key={`set2-${i}`}
                className="w-40 md:w-48 flex-shrink-0 flex flex-col items-center justify-center gap-3"
                aria-hidden="true"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 w-32 h-32 md:w-36 md:h-36 flex items-center justify-center border border-white/30">
                  {emp.logo ? (
                    <img
                      src={emp.logo}
                      alt={emp.name}
                      aria-label={`${emp.name} logo`}
                      className="object-contain max-h-20 md:max-h-24"
                    />
                  ) : (
                    <span className="text-xs text-black">No Logo</span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-blue-50 font-medium text-center h-8 flex items-center justify-center">
                  {emp.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
