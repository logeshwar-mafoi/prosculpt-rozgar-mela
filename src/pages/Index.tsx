import Hero from "@/components/Hero";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";

const bankingCompanies = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png", description: "Leading private sector bank", jobOpenings: 75, location: "Pan India" },
  { name: "Bajaj Finance", logo: "/assets/banking/bajaj.png", description: "Financial services company", jobOpenings: 100, location: "Multiple Cities" },
  { name: "Bajaj Allianz", logo: "/assets/banking/bajajalli.png", description: "Insurance and finance", jobOpenings: 100, location: "Pan India" },
  { name: "Bandhan Bank", logo: "/assets/banking/bandhan.png", description: "Commercial banking services", jobOpenings: 75, location: "East India" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png", description: "India's largest private bank", jobOpenings: 100, location: "Pan India" },
  { name: "SBI Insurance", logo: "/assets/banking/sbi.png", description: "Insurance services", jobOpenings: 50, location: "Pan India" },
  { name: "TVS Collections Siliguri", logo: "/assets/banking/TVS-Motor-Logo.png", description: "Finance collection services", jobOpenings: 50, location: "Siliguri" }
];

const manufacturingCompanies = [
  { name: "Dixon Technologies", logo: "/assets/manufacturing/dixon.png", description: "Electronics manufacturing", jobOpenings: 1000, location: "Pan India" },
  { name: "Padget Technology", logo: "/assets/manufacturing/padget.png", description: "Electronics manufacturer", jobOpenings: 500, location: "East India" },
  { name: "SATA", logo: "/assets/manufacturing/sata.png", description: "Manufacturing equipment company", jobOpenings: 50, location: "Pan India" },
  { name: "SHRIRAM Pistons", logo: "/assets/manufacturing/shriram.png", description: "Auto components manufacturer", jobOpenings: 200, location: "North India" },
  { name: "TATA Electronics", logo: "/assets/manufacturing/tataelec.png", description: "Electronics manufacturing", jobOpenings: 100, location: "Pan India" },
  { name: "DLJ Group", logo: "/assets/manufacturing/dljm.png", description: "Manufacturing solutions", jobOpenings: 200, location: "West Bengal" },
];

const automobileCompanies = [
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png", description: "Two-wheeler manufacturer", jobOpenings: 40, location: "Pan India" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png", description: "Automotive & farm equipment", jobOpenings: 650, location: "Multiple Cities" },
  { name: "TATA Motors", logo: "/assets/manufacturing/tatamotors.png", description: "Automobile manufacturer", jobOpenings: 150, location: "Pan India" },
];

const tourismCompanies = [
  { name: "Club Mahindra Resorts", logo: "/assets/health-and-tour/mahindra.png", description: "Resort and hospitality chain", jobOpenings: 325, location: "Tourist Destinations" },
  { name: "AEON Resorts", logo: "/assets/health-and-tour/aeon.png", description: "Luxury resort chain", jobOpenings: 50, location: "Major Cities" },
  { name: "Sterling Holidays", logo: "/assets/health-and-tour/clubmahindra.png", description: "Hospitality group", jobOpenings: 30, location: "Darjeeling, Siliguri, Gangtok" },
  { name: "TAJ/Vivanta Group", logo: "/assets/health-and-tour/taj.png", description: "Luxury hospitality group", jobOpenings: 58, location: "Major Cities" },
  { name: "Udaan Resorts Siliguri", logo: "/assets/health-and-tour/udaan.png", description: "Tourism and hospitality group", jobOpenings: 20, location: "Siliguri" },
  { name: "VASSATI Services NCR", logo: "/assets/health-and-tour/vasati.png", description: "Hospitality and service company", jobOpenings: 20, location: "NCR" },
  { name: "Yumi Yashshree Hotel", logo: "/assets/health-and-tour/yumi.png", description: "Hospitality and lodging services", jobOpenings: 20, location: "Tourist Destinations" },
  { name: "AB’s (Absolute Barbecues)", logo: "/assets/retail/abs.png", description: "Food & Beverages chain", jobOpenings: null, location: "Pan India" },
  { name: "Barbeque Nation", logo: "/assets/retail/bbq.png", description: "Restaurant chain", jobOpenings: 600, location: "Major Cities" },
  { name: "Ancil Services", logo: "/assets/health-and-tour/clubmahindra.png", description: "Hospitality services", jobOpenings: 25, location: "Metro Cities" },
  { name: "QUESS Corp", logo: "/assets/IT/quess.png", description: "F&B and housekeeping services", jobOpenings: 200, location: "Pan India" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png", description: "Entertainment & hospitality", jobOpenings: 80, location: "Major Cities" },
  { name: "Royal Orchid Hotels", logo: "/assets/health-and-tour/royal.png", description: "Hotel chain", jobOpenings: 30, location: "North India" },
  { name: "Sodexo", logo: "/assets/health-and-tour/sodexo.png", description: "Food and facilities management", jobOpenings: 300, location: "North East India" },
  { name: "Apollo Sindoori Hotels Ltd.", logo: "/assets/health-and-tour/apollo-sindoori.png", description: "Hospitality and catering", jobOpenings: 85, location: "Tourist Destinations" },
];

const healthcareCompanies = [
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png", description: "Healthcare services", jobOpenings: 796, location: "Pan India" },
];

const itCompanies = [
  { name: "WNS Global Services", logo: "/assets/IT/wns.png", description: "IT Associates & Finance Services", jobOpenings: 350, location: "Pan India" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png", description: "Business services", jobOpenings: 300, location: "Pan India" },
  { name: "Ancile Technologies", logo: "/assets/IT/ancil.png", description: "IT services & consulting", jobOpenings: 150, location: "Metro Cities" },
];

const devyaniCompanies = [
  { name: "KFC", logo: "/assets/retail/kfc.png", description: "Quick service restaurant", jobOpenings: 200, location: "Pan India" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png", description: "Coffee chain", jobOpenings: 30, location: "Metro Cities" },
  { name: "Vaango", logo: "/assets/retail/vaango.png", description: "South Indian restaurant chain", jobOpenings: 40, location: "Metro Cities" },
  { name: "Airport Food Courts", logo: "/assets/retail/food-court.jpg", description: "Airport dining", jobOpenings: 50, location: "Airports" },
  { name: "Food Courts", logo: "/assets/retail/food-court.jpg", description: "Multi-brand dining", jobOpenings: 50, location: "Major Cities" },
  { name: "Tea Live", logo: "/assets/retail/tea.png", description: "Beverage outlet", jobOpenings: 10, location: "Metro Cities" },
  { name: "Sanook Kitchen", logo: "/assets/retail/snook.png", description: "Restaurant brand", jobOpenings: 10, location: "Pan India" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollingEmployers />
      <CompanySection title="Banking & Finance" companies={bankingCompanies} />
      <CompanySection title="IT & Manufacturing" companies={manufacturingCompanies} />
      <CompanySection title="Automobile & Manufacturing" companies={automobileCompanies} />
      <CompanySection title="Tourism & Hospitality" companies={tourismCompanies} />
      <CompanySection title="Healthcare" companies={healthcareCompanies} />
      <CompanySection title="IT & Business Services" companies={itCompanies} />
      <CompanySection title="Devyani International Ltd. (F&B Group)" companies={devyaniCompanies} />
      <EventPosters />
      <Footer />
    </div>
  );
};

export default Index;
