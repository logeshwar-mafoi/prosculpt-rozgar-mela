import Hero from "@/components/Hero";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";

const bankingCompanies = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png", description: "Leading private sector bank", jobOpenings: 75, location: "Pan India", jobId: "1c01c58f-f1fd-4def-b099-ea9d46f547ff" },
  { name: "Bajaj Finance", logo: "/assets/banking/bajaj.png", description: "Financial services company", jobOpenings: 100, location: "Multiple Cities", jobId: "bajaj-10092" },
  { name: "Bajaj Allianz", logo: "/assets/banking/bajajalli.png", description: "Insurance and finance", jobOpenings: 100, location: "Pan India", jobId: "bajaj-allianz-23456" },
  { name: "Bandhan Bank", logo: "/assets/banking/bandhan.png", description: "Commercial banking services", jobOpenings: 75, location: "East India", jobId: "bandhan-bank-17645" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png", description: "India's largest private bank", jobOpenings: 100, location: "Pan India", jobId: "hdfc-20987" },
  { name: "SBI Insurance", logo: "/assets/banking/sbi.png", description: "Insurance services", jobOpenings: 50, location: "Pan India", jobId: "sbi-insurance-89452" },
  { name: "TVS Collections Siliguri", logo: null, description: "Finance collection services", jobOpenings: 50, location: "Siliguri", jobId: "tvs-collections-siliguri-54920" }
];

const manufacturingCompanies = [
  { name: "Dixon Technologies", logo: "/assets/manufacturing/dixon.png", description: "Electronics manufacturing", jobOpenings: 1000, location: "Pan India", jobId: "dixon-tech-11223" },
  { name: "Bluspring", logo: "/assets/health-and-tour/blu-spring.jpg", description: "Luxury resort and hospitality chain", jobOpenings: 800, location: ["North", "East", "West", "South"], jobId: "Bluspring-85858" },
  { name: "Padget Technology", logo: "/assets/manufacturing/padget.png", description: "Electronics manufacturer", jobOpenings: 500, location: "East India", jobId: "padget-tech-33445" },
  { name: "SATA", logo: "/assets/manufacturing/sata.png", description: "Manufacturing equipment company", jobOpenings: 50, location: "Pan India", jobId: "sata-55667" },
  { name: "SHRIRAM Pistons", logo: "/assets/manufacturing/shriram.png", description: "Auto components manufacturer", jobOpenings: 200, location: "North India", jobId: "shriram-pistons-77889" },
  { name: "TATA Electronics", logo: "/assets/manufacturing/tataelec.png", description: "Electronics manufacturing", jobOpenings: 100, location: "Pan India", jobId: "tata-electronics-99001" },
  { name: "DLJ Group", logo: "/assets/manufacturing/dljm.png", description: "Manufacturing solutions", jobOpenings: 200, location: "West Bengal", jobId: "dlj-group-44556" }
];

const automobileCompanies = [
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png", description: "Two-wheeler manufacturer", jobOpenings: 40, location: "Pan India", jobId: "hero-motocorp-22334" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png", description: "Automotive & farm equipment", jobOpenings: 650, location: "Multiple Cities", jobId: "mahindra-12345" },
  { name: "TATA Motors", logo: "/assets/manufacturing/tatamotors.png", description: "Automobile manufacturer", jobOpenings: 150, location: "Pan India", jobId: "tata-motors-56789" },
];

const tourismCompanies = [
  { name: "Club Mahindra Resorts", logo: "/assets/health-and-tour/mahindra.png", description: "Resort and hospitality chain", jobOpenings: 325, location: "Tourist Destinations", jobId: "club-mahindra-85858" },
  { name: "AEON Resorts", logo: "/assets/health-and-tour/aeon.png", description: "Luxury resort chain", jobOpenings: 50, location: "Major Cities", jobId: "aeon-resorts-78787" },
  { name: "Sterling Holidays", logo: "/assets/health-and-tour/sterling.png", description: "Hospitality group", jobOpenings: 30, location: "Darjeeling, Siliguri, Gangtok", jobId: "sterling-holidays-67676" },
  { name: "TAJ/Vivanta Group", logo: "/assets/health-and-tour/taj.png", description: "Luxury hospitality group", jobOpenings: 58, location: "Major Cities", jobId: "taj-vivanta-45454" },
  { name: "Udaan Resorts Siliguri", logo: "/assets/health-and-tour/udaan.png", description: "Tourism and hospitality group", jobOpenings: 20, location: "Siliguri", jobId: "udaan-resorts-34343" },
  { name: "VASSATI Services NCR", logo: "/assets/health-and-tour/vasati.png", description: "Hospitality and service company", jobOpenings: 20, location: "NCR", jobId: "vassati-ncr-67678" },
  { name: "Sumi Yashshree", logo: "/assets/health-and-tour/yumi.png", description: "Hospitality and lodging services", jobOpenings: 20, location: "Tourist Destinations", jobId: "sumi-yashshree-98765" },
  { name: "AB’s (Absolute Barbecues)", logo: "/assets/retail/abs.png", description: "Food & Beverages chain", jobOpenings: 200, location: "Pan India", jobId: "abs-barbecues-21321" },
  { name: "Barbeque Nation", logo: "/assets/retail/bbq.png", description: "Restaurant chain", jobOpenings: 600, location: "Major Cities", jobId: "barbeque-nation-54321" },
  { name: "Ancile Services", logo: "/assets/IT/ancil.png", description: "Hospitality services", jobOpenings: 25, location: "Metro Cities", jobId: "ancile-services-89898" },
  { name: "QUESS Corp", logo: "/assets/IT/quess.png", description: "F&B and housekeeping services", jobOpenings: 200, location: "Pan India", jobId: "quess-corp-67676" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png", description: "Entertainment & hospitality", jobOpenings: 80, location: "Major Cities", jobId: "pvr-inox-22112" },
  { name: "Royal Orchid Hotels", logo: "/assets/health-and-tour/royal.png", description: "Hotel chain", jobOpenings: 30, location: "North India", jobId: "royal-orchid-33443" },
  { name: "Sodexo", logo: "/assets/health-and-tour/sodexo.png", description: "Food and facilities management", jobOpenings: 300, location: "North East India", jobId: "sodexo-77887" },
  { name: "Apollo Sindoori Hotels Ltd.", logo: "/assets/health-and-tour/apollo-sindoori.png", description: "Hospitality and catering", jobOpenings: 85, location: "Tourist Destinations", jobId: "apollo-sindoori-55665" },
  { name: "Birdys", logo: "/assets/health-and-tour/Birdys.png", description: "Tourism and hospitality", jobOpenings: 25, location: "Mumbai", jobId: "birdys-11223" }
];

const healthcareCompanies = [
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png", description: "Healthcare services", jobOpenings: 796, location: "Pan India", jobId: "apollo-hospitals-33445" },
];

const itCompanies = [
  { name: "WNS Global Services", logo: "/assets/IT/wns.png", description: "IT Associates & Finance Services", jobOpenings: 350, location: "Pan India", jobId: "wns-global-99887" },
  { name: "Quess Corp", logo: "/assets/IT/quess.png", description: "Business services", jobOpenings: 300, location: "Pan India", jobId: "quess-corp-67676" },
  { name: "Ancile Technologies", logo: "/assets/IT/ancil.png", description: "IT services & consulting", jobOpenings: 150, location: "Metro Cities", jobId: "ancile-tech-33432" },
];

const devyaniCompanies = [
  { name: "KFC", logo: "/assets/retail/kfc.png", description: "Quick service restaurant", jobOpenings: 200, location: "Pan India", jobId: "kfc-11235" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png", description: "Coffee chain", jobOpenings: 30, location: "Metro Cities", jobId: "costa-coffee-76890" },
  { name: "Vaango", logo: "/assets/retail/vaango.png", description: "South Indian restaurant chain", jobOpenings: 40, location: "Metro Cities", jobId: "vaango-98765" },
  { name: "Airport Food Courts", logo: "/assets/retail/food-court.jpg", description: "Airport dining", jobOpenings: 50, location: "Airports", jobId: "airport-food-courts-11222" },
  { name: "Food Courts", logo: "/assets/retail/food-court.jpg", description: "Multi-brand dining", jobOpenings: 50, location: "Major Cities", jobId: "food-courts-33444" },
  { name: "Tea Live", logo: "/assets/retail/tea.png", description: "Beverage outlet", jobOpenings: 10, location: "Metro Cities", jobId: "tea-live-77889" },
  { name: "Sanook Kitchen", logo: "/assets/retail/snook.png", description: "Restaurant brand", jobOpenings: 10, location: "Pan India", jobId: "sanook-kitchen-55566" },
];

const telecomCompanies = [
  { name: "Vodafone", logo: "/assets/telecom/vodafone.png", description: "Telecom services", jobOpenings: 50, location: "Major Cities", jobId: "vodafone-99887" },
  { name: "PhonePe", logo: "/assets/telecom/PhonePe.png", description: "Telecom/Fintech services", jobOpenings: 75, location: "Kolkata", jobId: "phonepe-44556" },
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
      <CompanySection title="Telecom" companies={telecomCompanies} />
      <EventPosters />
      <Footer />
    </div>
  );
};

export default Index;
