import { useEffect, useRef } from "react";

interface Employer {
  name: string;
  logo: string;
}

const employers: Employer[] = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png" },
  { name: "Tata Motors", logo: "/assets/manufacturing/tatamotors.png" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png" },
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png" },
  { name: "Taj Hotels", logo: "/assets/health-and-tour/taj.png" },
  { name: "KFC", logo: "/assets/retail/kfc.png" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png" },
  { name: "WNS Global Services", logo: "/assets/IT/wns.png" },
];

export default function ScrollingEmployers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-blue-700">
        Participating Employers
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden whitespace-nowrap w-full justify-center"
      >
        {[...employers, ...employers].map((emp, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[160px] hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 w-36 h-36 flex items-center justify-center">
              <img
                src={emp.logo}
                alt={emp.name}
                className="object-contain max-h-24"
              />
            </div>
            <p className="text-sm text-gray-700 mt-2 font-medium text-center">
              {emp.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
