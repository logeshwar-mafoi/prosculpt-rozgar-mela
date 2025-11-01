import Hero from "@/components/Hero";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";
import FloatingFAQ from "@/components/FloatingFAQ";

const bankingCompanies = [
  { name: "Axis Bank", logo: "/assets/banking/axis.png", description: "Leading private sector bank", jobOpenings: 75, location: "Pan India", jobId: "axix-10093" },
  { name: "Bajaj Finance", logo: "/assets/banking/bajaj.png", description: "Financial services company", jobOpenings: 100, location: "Multiple Cities", jobId: "bajaj-10092" },
  { name: "Bajaj Allianz", logo: "/assets/banking/bajajalli.png", description: "Insurance and finance", jobOpenings: 100, location: "Pan India", jobId: "bajaj-allianz-23456" },
  { name: "Bandhan Bank", logo: "/assets/banking/bandhan.png", description: "Commercial banking services", jobOpenings: 75, location: "East India", jobId: "bandhan-bank-17645" },
  { name: "HDFC Bank", logo: "/assets/banking/hdfc.png", description: "India's largest private bank", jobOpenings: 100, location: "Pan India", jobId: "hdfc-20987" },
  { name: "SBI Insurance", logo: "/assets/banking/sbi.png", description: "Insurance services", jobOpenings: 50, location: "Pan India", jobId: "sbi-insurance-89452" },
  { name: "Utkarsh Bank", logo: "/assets/banking/utkarsh.png", description: "Banking services – Collection Executive roles", jobOpenings: 100, location: "Pan India", jobId: "utkarsh-bank-001" },
  { name: "TVS Collections Siliguri", logo: null, description: "Finance collection services", jobOpenings: 50, location: "Siliguri", jobId: "tvs-collections-siliguri-54920" },
  { name: "WNS Global Services", logo: "/assets/IT/wns.png", description: "Finance & Accounts Associate", jobOpenings: 50, location: "Pan India", jobId: "0e83686f-664d-4308-94af-b83fcc87676e" },
];

const manufacturingCompanies = [
  { name: "ITC", logo: "/assets/manufacturing/ITC.png", description: "Associates and Apprentices in the manufacturing sector", jobOpenings: 10, location: "West Bengal", jobId: "itc-55221" },
  { name: "Dixon Technologies", logo: "/assets/manufacturing/dixon.png", description: "Electronics manufacturing", jobOpenings: 1000, location: "Pan India", jobId: "dixon-tech-11223" },
  { name: "Padget Technology", logo: "/assets/manufacturing/padget.png", description: "Electronics manufacturer", jobOpenings: 500, location: "East India", jobId: "padget-tech-33445" },
  { name: "Idmela Syseom India Pvt Ltd", logo: "/assets/manufacturing/idemia.jpg", description: "Manufacturing - Production, Operator, Assembly roles", jobOpenings: 70, location: "Noida (UP)", jobId: "idemia-77854" },
  { name: "SATA", logo: "/assets/manufacturing/sata.png", description: "Manufacturing equipment company", jobOpenings: 50, location: "Pan India", jobId: "sata-55667" },
  { name: "SHRIRAM Pistons", logo: "/assets/manufacturing/shriram.png", description: "Auto components manufacturer", jobOpenings: 200, location: "North India", jobId: "shriram-pistons-77889" },
  { name: "TATA Electronics", logo: "/assets/manufacturing/tataelec.png", description: "Electronics manufacturing", jobOpenings: 100, location: "Pan India", jobId: "tata-electronics-99001" },
  { name: "DLJM Group", logo: "/assets/manufacturing/dljm.png", description: "Manufacturing solutions", jobOpenings: 200, location: "West Bengal", jobId: "dlj-group-44556" },
  { name: "MRF Tyres", logo: "/assets/manufacturing/mrf.png", description: "Tyre manufacturing", jobOpenings: 150, location: "Pan India", jobId: "mrf-tyres-88442" },
  { name: "Nissan", logo: "/assets/manufacturing/nissan.jpg", description: "Automobile manufacturer", jobOpenings: 300, location: "Pan India", jobId: "nissan-22771" },
  { name: "Rialto Enterprises", logo: "/assets/manufacturing/railto.jpeg", description: "Manufacturing industry", jobOpenings: 120, location: "Pan India", jobId: "rialto-enterprises-99332" },
  { name: "Joyson Safety", logo: "/assets/manufacturing/joyson.jpg", description: "Automotive safety systems manufacturing", jobOpenings: 180, location: "Pan India", jobId: "joyson-safety-11664" },
  ];

const aviationCompanies = [
  {
    name: "IndiGo Airlines",
    logo: "/assets/aviation/indigo.png",
    description:
      "IndiGo Airlines is recruiting for Ground Operations roles across India. Candidates must complete the pre-assessment before HR interaction.",
    jobOpenings: null,
    location: "Pan India",
    jobs: [
      {
        title: "Ground Operations Executive",
        jd: "Responsible for handling passenger services, baggage handling, and ramp coordination at airports.",
        eligibility: "Graduate (any discipline), age below 27 preferred.",
        location: "Pan India",
        applicationLink:
          "https://unstop.com/jobs/aocs-online-hiring-drive-pan-india-2-aocs-online-hiring-drive-pan-india-indigo-1534403",
      },
    ],
  },
];

const trainingCompanies = [
  {
    name: "ConnectED (Kukje India Group Initiative)",
    logo: "/assets/health-and-tour/ConnectED.jpg",
    description: "On-the-Job Training (OJT) + Employment Pathway Program in South Korea",
    jobOpenings: 150,
    location: "South Korea",
    jobs: [
      {
        title: "Learn & Earn in Korea — On-Job-Training (Up to 2 Years)",
        location: "South Korea",
        jd: `ConnectED, a Kukje India Group initiative, offers an international training and employment pathway program that enables Indian youth to study, train, and work in South Korea. The initiative provides industry-aligned On-the-Job Training (OJT) opportunities with future employment options across key sectors such as hospitality, tourism, caregiving, electronics, and automotive engineering.

**Program Highlights:**
- On-the-Job-Training (up to 2 years) with a transition to full-time employment.
- International exposure through structured upskilling and academic partnerships.
- Monthly stipend during OJT (approx. ₹50,000 – ₹70,000).
- Post-training full-time salaries up to ₹1.38 lakh/month (as per Korean labor laws).
- Partner universities include Jangan University, Seoyoung University, Kimpo University, and others.

**Industry Sectors:**
Hospitality, Tourism, F&B, Caregiving, Electronics, Automotive Engineering

**Eligibility:**
- Graduates from any stream may apply (preference for Hospitality, Nursing, Business, Service).
- Must have English as Medium of Instruction (MOI).
- Willingness to learn Korean language and adapt to Korean work culture.

**Program Fees (Indicative):**
- Tuition Fee: ₹2,50,000 per semester
- Scholarship: Up to 30% tuition waiver (performance-based)
- Accommodation: ₹95,000 per semester
- Living Expenses: ₹90,000 per semester
- One-time other expenses: ₹60,000 (travel, visa, insurance, etc.)
- Service/Implementation Fee: ₹1,75,000 + GST,

      },
    ],
  },
];



const automobileCompanies = [
  { name: "Hero MotoCorp", logo: "/assets/manufacturing/hero.png", description: "Two-wheeler manufacturer", jobOpenings: 40, location: "Pan India", jobId: "hero-motocorp-22334" },
  { name: "Mahindra & Mahindra", logo: "/assets/manufacturing/mahin.png", description: "Automotive & farm equipment", jobOpenings: 650, location: "Multiple Cities", jobId: "92fce6ca-74bc-4fc5-9fff-0150133dda3d" },
  ];

const tourismCompanies = [
  // 🏨 Club Mahindra (Mahindra Holidays & Resorts India Ltd.)
{
  "name": "Club Mahindra (Mahindra Holidays and Resorts India Ltd.)",
  "logo": "/assets/health-and-tour/mahindra.png",
  "description": "Mahindra Holidays & Resorts is hiring for multiple hospitality roles across India.",
  "jobOpenings": 315,
  "location": "Rajasthan, Haryana, MP, Maharashtra, Goa and more",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Guest Service Associate (Housekeeping)",
      "description": "Room preparation, handling guest requests, maintaining cleanliness standards.",
      "availableJobs": 70,
      "location": "Resorts across India",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Kitchen Helper",
      "description": "Assist in food preparation, cleaning equipment, and maintaining kitchen hygiene.",
      "availableJobs": 30,
      "location": "Resorts across India",
      "industryType": "Hospitality - Kitchen Operations"
    },
    {
      "title": "Pantry Associate",
      "description": "Assist in meal ingredient preparation, receive inventory, and maintain kitchen setup.",
      "availableJobs": 35,
      "location": "Resorts across India",
      "industryType": "Hospitality - Food Preparation"
    },
    {
      "title": "Commis Chef",
      "description": "Prepare dishes under supervision, follow kitchen SOPs, and ensure food quality.",
      "availableJobs": 50,
      "location": "Resorts across India",
      "industryType": "Hospitality - Culinary"
    },
    {
      "title": "F&B Service Steward",
      "description": "Serve food and beverages, maintain service quality, and ensure customer satisfaction.",
      "availableJobs": 80,
      "location": "Resorts across India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Counter Sales Executive",
      "description": "Membership sales and resort customer engagement.",
      "availableJobs": 25,
      "location": "Resorts across India",
      "industryType": "Hospitality - Sales"
    },
    {
      "title": "Bar Tender",
      "description": "Manage bar operations, prepare and serve beverages, ensure bar hygiene.",
      "availableJobs": 10,
      "location": "Resorts across India",
      "industryType": "Hospitality - Beverage Service"
    },
    {
      "title": "Demi Chef De Partie",
      "description": "Assist kitchen executive/chef, oversee section prep, ensure food quality and hygiene.",
      "availableJobs": 15,
      "location": "Resorts across India",
      "industryType": "Hospitality - Culinary Operations"
    }
  ]
},

  { name: "Bluspring", logo: "/assets/health-and-tour/blu-spring.jpg", description: "Luxury resort and hospitality chain", jobOpenings: 800, location: ["North", "East", "West", "South"], jobId: "Bluspring-85858" },
  { name: "AEON Resorts", logo: "/assets/health-and-tour/aeon.png", description: "Luxury resort chain", jobOpenings: 50, location: "Major Cities", jobId: "aeon-resorts-78787" },
  { name: "Aurum Resorts", logo: "/assets/health-and-tour/aurum.png", description: "Premium luxury resort chain", jobOpenings: 50, location: "Siliguri", jobId: "aeon-resorts-78787" },
  { name: "Sterling Holidays", logo: "/assets/health-and-tour/sterling.png", description: "Hospitality group", jobOpenings: 30, location: "Darjeeling, Siliguri, Gangtok", jobId: "0f9de3a7-467d-460a-bbf4-9ce4736cd924" },
  { name: "TAJ/Vivanta Group", logo: "/assets/health-and-tour/taj.png", description: "Luxury hospitality group", jobOpenings: 58, location: "Major Cities", jobId: "taj-vivanta-45454" },
  { name: "Udaan Resorts Siliguri", logo: "/assets/health-and-tour/udaan.png", description: "Tourism and hospitality group", jobOpenings: 20, location: "Siliguri", jobId: "udaan-resorts-34343" },
  { name: "VASATI Services", logo: "/assets/health-and-tour/vasati.png", description: "Hospitality and service company", jobOpenings: 20, location: "NCR", jobId: "c7cc3bbb-b3b8-4c0c-8f0e-52186c1478f0" },
  { name: "Sumi Yashshree", logo: "/assets/health-and-tour/yumi.png", description: "Hospitality and lodging services", jobOpenings: 20, location: "Tourist Destinations", jobId: "d64ca8c7-020c-4514-9fb6-c787220a3234" },
  { name: "AB’s (Absolute Barbecues)", logo: "/assets/retail/abs.png", description: "Food & Beverages chain", jobOpenings: 200, location: "Pan India", jobId: "abs-barbecues-21321" },
  { name: "Barbeque Nation", logo: "/assets/retail/bbq.png", description: "Restaurant chain", jobOpenings: 600, location: "Major Cities", jobId: "barbeque-nation-54321" },
  { name: "QUESS Corp", logo: "/assets/IT/quess.png", description: "F&B and housekeeping services", jobOpenings: 200, location: "Pan India", jobId: "quess-corp-67676" },
  { name: "PVR INOX", logo: "/assets/health-and-tour/pvr.png", description: "Entertainment & hospitality", jobOpenings: 80, location: "Major Cities", jobId: "pvr-inox-22112" },
  { name: "Royal Orchid Hotels", logo: "/assets/health-and-tour/royal.png", description: "Hotel chain", jobOpenings: 30, location: "North India", jobId: "royal-orchid-33443" },
  { name: "Sodexo", logo: "/assets/health-and-tour/sodexo.png", description: "Food and facilities management", jobOpenings: 300, location: "North East India", jobId: "sodexo-77887" },
  { name: "Apollo Sindoori Hotels Ltd.", logo: "/assets/health-and-tour/apollo-sindoori.png", description: "Hospitality and catering", jobOpenings: 85, location: "Tourist Destinations", jobId: "apollo-sindoori-55665" },
  { name: "Birdys", logo: "/assets/health-and-tour/Birdys.png", description: "Tourism and hospitality", jobOpenings: 25, location: "Mumbai", jobId: "birdys-11223" },
  { name: "Ziatoon Restaurant and Grill Pvt. Ltd.", logo: "/assets/health-and-tour/zaitoon.png", description: "Tourism and hospitality", jobOpenings: 300, location: "Pan India", jobId: "zaitoon-11223" },
  { name: "ConnectED (Kukje India Group Initiative)", logo: "/assets/health-and-tour/ConnectED.jpg", description: "ON-THE-JOB TRAINING (OJT)", jobOpenings: 150, location: "SOUTH KOREA", jobId: "zai-11223" },
  { name: "TFS Travel Food Services", logo: "/assets/health-and-tour/TFS.jpg", description: "Airport and travel hospitality services", jobOpenings: 200, location: "Multiple Locations", jobId: "tfs-travel-food-services-2025" },
  { name: "Iksha Resorts", logo: "/assets/health-and-tour/iksha.webp", description: "Greetings from Iksha Resorts! Hospitality and operations roles available.", jobOpenings: 15, location: "Rajrappa, Jharkhand", jobId: "iksha-resorts-77123" },
];

const healthcareCompanies = [
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png", description: "Healthcare services", jobOpenings: 796, location: "Pan India", jobId: "87a39c1d-9665-4cb0-b9a7-22d9c6bd8c85" },
];

const itCompanies = [
  { name: "Quess Corp", logo: "/assets/IT/quess.png", description: "Business services", jobOpenings: 300, location: "Pan India", jobId: "quess-corp-67676" },
  { name: "Ancile Services", logo: "/assets/IT/ancil.png", description: "IT Services", jobOpenings: 25, location: "Metro Cities", jobId: "ec31a997-de8a-4470-9810-82b1ce32de71" },
  { name: "Aeon Research", logo: "/assets/IT/aeon-research.jpeg", contact: "Pankaj Chandel / Roshan Jha", description: "IT solutions & services", jobOpenings: 50, location: "Delhi NCR, Bihar, UP", jobId: "aeon-research-55221" }
];

const devyaniCompanies = [
  { name: "KFC", logo: "/assets/retail/kfc.png", description: "Quick service restaurant", jobOpenings: 200, location: "Pan India", jobId: "kfc-11235" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png", description: "Coffee chain", jobOpenings: 30, location: "Metro Cities", jobId: "costa-coffee-76890" },
  { name: "Vaango", logo: "/assets/retail/vaango.png", description: "South Indian restaurant chain", jobOpenings: 40, location: "Metro Cities", jobId: "vaango-98765" },
  { name: "Airport Food Courts", logo: "/assets/retail/food-court.jpg", description: "Airport dining", jobOpenings: 50, location: "Airports", jobId: "airport-food-courts-11222" },
  { name: "Food Courts", logo: "/assets/retail/food-court.jpg", description: "Multi-brand dining", jobOpenings: 50, location: "Major Cities", jobId: "food-courts-33444" },
  { name: "Biriyani by Kilo", logo: "/assets/retail/Biryani.png", description: "Beverage outlet", jobOpenings: 50, location: "Metro Cities", jobId: "tea-live-77889" },
];

const telecomCompanies = [
  { name: "Vodafone", logo: "/assets/telecom/vodafone.png", description: "Telecom services", jobOpenings: 50, location: "Major Cities", jobId: "vodafone-99887" },
  { name: "PhonePe", logo: "/assets/telecom/PhonePe.png", description: "Telecom/Fintech services", jobOpenings: 75, location: "Kolkata", jobId: "phonepe-44556" },
];

const creativeCompanies = [
  { name: "CREATIVE IMPERIAL PVT LTD", logo: "/assets/creative/creative.png", description: "Creative design and media services", jobOpenings: 20, location: "Siliguri", jobId: "creative-imperial-001" },
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
      <CompanySection title="Aviation & Airlines" companies={aviationCompanies} />
      <CompanySection title="Training Programs" companies={trainingCompanies} />
      <CompanySection title="Healthcare" companies={healthcareCompanies} />
      <CompanySection title="IT & Business Services" companies={itCompanies} />
      <CompanySection title="Devyani International Ltd. (F&B Group)" companies={devyaniCompanies} />
      <CompanySection title="Telecom" companies={telecomCompanies} />
      <CompanySection title="Creative & Media" companies={creativeCompanies} />
      <EventPosters />
      <FloatingFAQ />
      <Footer />
    </div>
  );
};

export default Index;
