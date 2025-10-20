interface Employer {
  name: string;
  logo: string;
}

const employers: Employer[] = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png" },
  { name: "SBI", logo: "/assets/banking/sbi.png" },
  { name: "Tata Motors", logo: "/assets/manufacturing/tatamotors.png" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png" },
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png" },
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png" },
  { name: "Taj Hotels", logo: "/assets/health-and-tour/taj.png" },
  { name: "KFC", logo: "/assets/retail/kfc.png" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png" },
  { name: "WNS Global Services", logo: "/assets/IT/wns.png" },
];

export default function ScrollingEmployers() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-federal via-marian to-honolulu text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">
          Participating Employers
        </h2>

        {/* Smooth Scrolling Logos */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {[...employers, ...employers].map((emp, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[140px] md:min-w-[160px] hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl shadow-lg p-4 w-32 h-32 md:w-36 md:h-36 flex items-center justify-center border border-white/30">
                  <img
                    src={emp.logo}
                    alt={emp.name}
                    className="object-contain max-h-20 md:max-h-24"
                  />
                </div>
                <p className="text-xs md:text-sm text-blue-50 mt-2 font-medium text-center">
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
    </section>
  );
}
