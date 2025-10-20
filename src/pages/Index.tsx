import Hero from "@/components/Hero";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";

const bankingCompanies = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png", description: "Leading private sector bank", jobOpenings: 150, location: "Pan India" },
  { name: "Bajaj Finance", logo: "/assets/banking/bajaj.png", description: "Financial services company", jobOpenings: 200, location: "Multiple Cities" },
  { name: "Bajaj Allianz", logo: "/assets/banking/bajajalli.png", description: "Insurance and finance", jobOpenings: 120, location: "Pan India" },
  { name: "Bandhan Bank", logo: "/assets/banking/bandhan.png", description: "Commercial banking services", jobOpenings: 180, location: "East India" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png", description: "India's largest private bank", jobOpenings: 250, location: "Pan India" },
  { name: "SBI", logo: "/assets/banking/sbi.png", description: "State Bank of India", jobOpenings: 300, location: "Pan India" },
  { name: "Utkarsh Small Finance Bank", logo: "/assets/banking/utkarsh.png", description: "Small finance bank", jobOpenings: 100, location: "Multiple Cities" },
];

const manufacturingCompanies = [
  { name: "Dixon Technologies", logo: "/assets/manufacturing/dixon.png", description: "Electronics manufacturing", jobOpenings: 200, location: "North India" },
  { name: "DLJM Group", logo: "/assets/manufacturing/dljm.png", description: "Manufacturing solutions", jobOpenings: 150, location: "West Bengal" },
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png", description: "Two-wheeler manufacturer", jobOpenings: 300, location: "Pan India" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png", description: "Automotive & farm equipment", jobOpenings: 250, location: "Multiple Cities" },
  { name: "Padget Electronics", logo: "/assets/manufacturing/padget.png", description: "Electronics components", jobOpenings: 120, location: "East India" },
  { name: "SATA", logo: "/assets/manufacturing/sata.png", description: "Manufacturing equipment", jobOpenings: 100, location: "Pan India" },
  { name: "Shriram Pistons", logo: "/assets/manufacturing/shriram.png", description: "Auto components", jobOpenings: 180, location: "North India" },
  { name: "Tata Electronics", logo: "/assets/manufacturing/tataelec.png", description: "Electronics manufacturing", jobOpenings: 220, location: "Pan India" },
  { name: "Tata Motors", logo: "/assets/manufacturing/tatamotors.png", description: "Automobile manufacturer", jobOpenings: 350, location: "Pan India" },
  { name: "TVS Motor Company", logo: "/assets/manufacturing/tvs.png", description: "Two & three-wheeler manufacturer", jobOpenings: 280, location: "South India" },
];

const healthTourismCompanies = [
  { name: "Aeon Wellness", logo: "/assets/health-and-tour/aeon.png", description: "Wellness & healthcare", jobOpenings: 80, location: "Major Cities" },
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png", description: "Healthcare services", jobOpenings: 200, location: "Pan India" },
  { name: "Aurum Lifestyle", logo: "/assets/health-and-tour/aurum.png", description: "Lifestyle & hospitality", jobOpenings: 100, location: "Metro Cities" },
  { name: "Compass Group", logo: "/assets/health-and-tour/compass.png", description: "Food & support services", jobOpenings: 150, location: "Pan India" },
  { name: "Mahindra Holidays", logo: "/assets/health-and-tour/mahindra.png", description: "Hospitality & resorts", jobOpenings: 120, location: "Tourist Destinations" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png", description: "Cinema entertainment", jobOpenings: 180, location: "Major Cities" },
  { name: "Royal Orchid Hotels", logo: "/assets/health-and-tour/royal.png", description: "Hotel chain", jobOpenings: 90, location: "South India" },
  { name: "Sodexo", logo: "/assets/health-and-tour/sodexo.png", description: "Food & facilities management", jobOpenings: 200, location: "Pan India" },
  { name: "Sterling Holidays", logo: "/assets/health-and-tour/sterling.png", description: "Holiday resorts", jobOpenings: 110, location: "Tourist Destinations" },
  { name: "Taj Hotels", logo: "/assets/health-and-tour/taj.png", description: "Luxury hospitality", jobOpenings: 150, location: "Major Cities" },
  { name: "Udaan", logo: "/assets/health-and-tour/udaan.png", description: "B2B e-commerce", jobOpenings: 130, location: "Pan India" },
  { name: "Vasati", logo: "/assets/health-and-tour/vasati.png", description: "Real estate & property", jobOpenings: 70, location: "Metro Cities" },
  { name: "Vivanta Hotels", logo: "/assets/health-and-tour/vivanta.png", description: "Premium hospitality", jobOpenings: 140, location: "Major Cities" },
  { name: "YuMi", logo: "/assets/health-and-tour/yumi.png", description: "Healthcare & wellness", jobOpenings: 60, location: "Metro Cities" },
];

const retailCompanies = [
  { name: "ABS Group", logo: "/assets/retail/abs.png", description: "Retail & distribution", jobOpenings: 100, location: "East India" },
  { name: "Barbeque Nation", logo: "/assets/retail/bbq.png", description: "Restaurant chain", jobOpenings: 200, location: "Major Cities" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png", description: "Coffee chain", jobOpenings: 150, location: "Metro Cities" },
  { name: "Devi Ayni", logo: "/assets/retail/deviayni.png", description: "Retail & lifestyle", jobOpenings: 80, location: "North India" },
  { name: "Insta Mart", logo: "/assets/retail/insta.png", description: "Quick commerce", jobOpenings: 180, location: "Major Cities" },
  { name: "KFC", logo: "/assets/retail/kfc.png", description: "Fast food chain", jobOpenings: 250, location: "Pan India" },
  { name: "Sanook", logo: "/assets/retail/snook.png", description: "Fashion retail", jobOpenings: 90, location: "Metro Cities" },
  { name: "Tea Post", logo: "/assets/retail/tea.png", description: "Beverage chain", jobOpenings: 70, location: "East India" },
  { name: "Vaango", logo: "/assets/retail/vaango.png", description: "Restaurant chain", jobOpenings: 120, location: "South India" },
];

const itCompanies = [
  { name: "Ancil Technologies", logo: "/assets/IT/ancil.png", description: "IT services & consulting", jobOpenings: 150, location: "Metro Cities" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png", description: "Business services", jobOpenings: 300, location: "Pan India" },
  { name: "WNS Global Services", logo: "/assets/IT/wns.png", description: "Business process management", jobOpenings: 250, location: "Major Cities" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollingEmployers />
      <CompanySection title="Banking & Finance" companies={bankingCompanies} />
      <CompanySection title="Manufacturing" companies={manufacturingCompanies} />
      <CompanySection title="Health & Tourism" companies={healthTourismCompanies} />
      <CompanySection title="Retail & Hospitality" companies={retailCompanies} />
      <CompanySection title="IT & Business Services" companies={itCompanies} />
      <EventPosters />
      <Footer />
    </div>
  );
};

export default Index;
