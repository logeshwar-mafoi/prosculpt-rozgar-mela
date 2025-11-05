import Hero from "@/components/Hero";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";
import FloatingFAQ from "@/components/FloatingFAQ";

const bankingCompanies = [
 // 🏦 Axis Bank
{
  "name": "Axis Bank",
  "logo": "/assets/banking/axis.png",
  "description": "Axis Bank, one of India’s leading private sector banks, is hiring for Customer Relationship Executive roles across PAN India.",
  "jobOpenings": 350,
  "location": "Pan India",
  "industry": "Banking & Financial Services",
  "jobs": [
    {
      "title": "Customer Relationship Executive",
      "description": "Build and maintain strong customer relationships, assist in banking transactions, and promote banking products and services.",
      "availableJobs": 250,
      "location": "Pan India",
      "industryType": "Banking - Customer Relationship Management"
    },
    {
      "title": "Sales Officer - Retail Banking",
      "description": "Generate new customer leads, cross-sell bank products, and support account opening and loan processes.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Banking - Sales & Marketing"
    },
    {
      "title": "Operations Executive",
      "description": "Handle backend operations, documentation, and support daily branch functions ensuring compliance and efficiency.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "Banking - Operations"
    }
  ],
  "qualification": "Graduate (Any Stream) or MBA Preferred",
  "salary": "₹18,000 - ₹30,000 + Incentives",
  "benefits": "Performance Incentives, Health Insurance, Career Growth Opportunities"
},
// 💰 Bajaj Finance
{
  "name": "Bajaj Finance Ltd.",
  "logo": "/assets/banking/bajaj.png",
  "description": "Bajaj Finance Limited, one of India’s leading non-banking financial companies (NBFC), is hiring for loan processing and customer service roles across PAN India.",
  "jobOpenings": 400,
  "location": "Pan India",
  "industry": "Banking & Financial Services",
  "jobs": [
    {
      "title": "Loan Processing Executive",
      "description": "Handle end-to-end loan processing activities including document verification, data entry, and loan disbursement support.",
      "availableJobs": 250,
      "location": "Pan India",
      "industryType": "Finance - Loan Operations"
    },
    {
      "title": "Customer Relationship Executive",
      "description": "Assist customers with loan applications, explain product details, and ensure smooth processing of financial services.",
      "availableJobs": 100,
      "location": "Pan India",
      "industryType": "Finance - Customer Support"
    },
    {
      "title": "Sales Executive - Loans",
      "description": "Promote and sell personal, consumer durable, and business loans to potential customers while maintaining strong client relationships.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "Finance - Sales & Marketing"
    }
  ],
  "qualification": "12th Pass, Graduate, or Postgraduate (Any Stream)",
  "salary": "₹15,000 - ₹25,000 + Incentives",
  "benefits": "Incentives, Travel Allowance, Career Growth Opportunities"
},
  
  // 🛡 Bajaj Allianz
{
  "name": "Bajaj Allianz General Insurance Co. Ltd.",
  "logo": "/assets/banking/bajajalli.png",
  "description": "Bajaj Allianz, one of India’s leading insurance companies, is hiring for insurance process and customer service roles across PAN India.",
  "jobOpenings": 300,
  "location": "Pan India",
  "industry": "Banking & Insurance Services",
  "jobs": [
    {
      "title": "Insurance Process Executive",
      "description": "Manage policy issuance, claims processing, and renewals while ensuring accuracy and compliance with company policies.",
      "availableJobs": 150,
      "location": "Pan India",
      "industryType": "Insurance - Operations"
    },
    {
      "title": "Customer Support Associate",
      "description": "Assist customers with policy information, claims status, and premium payments via phone and email.",
      "availableJobs": 100,
      "location": "Pan India",
      "industryType": "Insurance - Customer Service"
    },
    {
      "title": "Sales Executive - Insurance",
      "description": "Promote and sell life, health, and general insurance products, ensuring customer satisfaction and achieving sales targets.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "Insurance - Sales & Marketing"
    }
  ],
  "qualification": "12th Pass, Graduate, or Postgraduate (Any Stream)",
  "salary": "₹15,000 - ₹28,000 + Incentives",
  "benefits": "Incentives, Insurance Coverage, Training & Career Growth"
},
  
 // 🏦 Bandhan Bank
{
  "name": "Bandhan Bank",
  "logo": "/assets/banking/bandhan.png",
  "description": "Bandhan Bank, one of India’s fastest-growing private sector banks, is hiring for Customer Relationship Executive roles across PAN India.",
  "jobOpenings": 280,
  "location": "Pan India",
  "industry": "Banking & Financial Services",
  "jobs": [
    {
      "title": "Customer Relationship Executive",
      "description": "Engage with customers, understand their banking needs, and promote relevant products such as savings, loans, and deposits.",
      "availableJobs": 180,
      "location": "Pan India",
      "industryType": "Banking - Customer Relationship Management"
    },
    {
      "title": "Branch Sales Executive",
      "description": "Acquire new customers, open savings/current accounts, and ensure branch sales targets are met effectively.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Banking - Sales & Business Development"
    },
    {
      "title": "Operations Support Executive",
      "description": "Assist in branch operations, documentation, and daily transaction support ensuring compliance with bank policies.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "Banking - Operations"
    }
  ],
  "qualification": "Graduate (Any Stream) or MBA Preferred",
  "salary": "₹16,000 - ₹28,000 + Incentives",
  "benefits": "Performance Incentives, Health Insurance, Career Development Programs"
},
  
  // 🏦 HDFC Bank
{
  "name": "HDFC Bank",
  "logo": "/assets/banking/hdfc.png",
  "description": "HDFC Bank, one of India’s leading private sector banks, is hiring for CASA roles across PAN India to strengthen its retail banking operations.",
  "jobOpenings": 150,
  "location": "Pan India",
  "industry": "Banking & Financial Services",
  "jobs": [
    {
      "title": "CASA Sales Executive",
      "description": "Responsible for acquiring new customers for Current and Savings Account (CASA), maintaining relationships with clients, and achieving assigned sales targets.",
      "availableJobs": 150,
      "location": "Pan India",
      "industryType": "Banking - Retail Sales"
    }
  ],
  "qualification": "Graduate in any stream (Freshers & Experienced can apply)",
  "salary": "₹15,000 - ₹25,000 + Incentives",
  "benefits": "Performance Incentives, Travel Allowance, Career Growth Opportunities"
},
  
  { name: "SBI Insurance", logo: "/assets/banking/sbi.png", description: "Insurance services", jobOpenings: 50, location: "Pan India", jobId: "sbi-insurance-89452" },
 
// 🏦 Utkarsh Bank
{
  "name": "Utkarsh Bank",
  "logo": "/assets/banking/utkarsh.png",
  "description": "Utkarsh Bank is hiring Collection Executives for its Banking and Financial Services operations across India.",
  "jobOpenings": 100,
  "location": "Pan India",
  "industry": "Banking & Finance",
  "jobs": [
    {
      "title": "Collection Executive",
      "description": "Responsible for recovery and collection of loan payments from customers, maintaining customer relationships, and ensuring timely follow-ups.",
      "availableJobs": 100,
      "location": "Pan India",
      "industryType": "Banking - Collections & Recovery"
    }
  ],
  "qualification": "12th Pass, Graduate (any stream)",
  "salary": "₹12,000 - ₹18,000 + Incentives",
  "benefits": "Travel Allowance and Performance Incentives"
},
  
  { name: "TVS Collections Siliguri", logo: null, description: "Finance collection services", jobOpenings: 50, location: "Siliguri", jobId: "tvs-collections-siliguri-54920" },
 
  
 // 🏢 WNS Limited
{
  "name": "WNS Limited",
  "logo": "/assets/IT/wns.png",
  "description": "WNS Limited (NYSE: WNS) is a digital-led business transformation and services company that co-creates smarter businesses with over 700 clients across 10 industries. With AI-powered platforms and analytics, WNS helps enterprises innovate, scale, and adapt swiftly in a world defined by disruption. The company operates across 4 continents, 13 countries, and 65 delivery centers, employing over 66,000 professionals globally.",
  "jobOpenings": 300,
  "location": "Gurgaon, Pune, Mumbai",
  "industry": "Business Process Management (BPM) / Customer Experience",
  "jobs": [
    {
      "title": "Associate - Customer Experience Process",
      "description": "Handle customer inquiries and issues via chat and voice channels, ensuring timely, accurate, and professional support. Maintain records in CRM systems and resolve billing, technical, or general queries to ensure customer satisfaction.",
      "availableJobs": 300,
      "location": "Gurgaon, Pune, Mumbai",
      "industryType": "Customer Support / BPM",
      "qualification": "Any Graduate (2022 / 2023 / 2024 / 2025 Batch, Any Stream)",
      "workMode": "Work From Office",
      "workDays": "5 Days / Rotational Shifts / Rotational Offs (Night Shifts Included)",
      "ctc": "₹2.8 LPA - ₹3.0 LPA (Fixed) + Performance Incentives",
      "requiredSkills": [
        "Excellent communication and grammar skills",
        "Clear and correct business communication",
        "Good listening and comprehension skills",
        "Ability to adapt to different accents",
        "Strong command of English language",
        "Willingness to work in night/rotational shifts"
      ],
      "selectionProcess": [
        "Online Aptitude / SVAR / Writex Assessment",
        "HR Interview",
        "Ops Interview"
      ]
    }
  ],
  "qualification": "Graduate (Any Stream)",
  "salary": "₹2.8 LPA - ₹3.0 LPA + Incentives",
  "benefits": "Performance-based Incentives",
  "workMode": "Work From Office"
},

];

const manufacturingCompanies = [
  // 🏭 ITC - West Bengal Factories
{
  "name": "ITC",
  "logo": "/assets/manufacturing/ITC.png",
  "description": "Associates and Apprentices in the manufacturing sector",
  "jobOpenings": 10,
  "location": "West Bengal",
  "jobId": "itc-55221",
  "industry": "Manufacturing",
  "jobs": [
    {
      "title": "Associate",
      "description": "Perform mechanical/electrical tasks as per ITI training, maintain machinery and production standards.",
      "availableJobs": 5,
      "location": "Factories across West Bengal",
      "industryType": "Manufacturing - Technical",
      "qualification": "ITI (Mechanical/Electrical stream)",
      "ctc": "₹15,500 per month Approx for 1st year"
    },
    {
      "title": "Apprentice",
      "description": "Assist in fitting/electrical tasks, support production team and learn on the job.",
      "availableJobs": 5,
      "location": "Factories across West Bengal",
      "industryType": "Manufacturing - Technical Training",
      "qualification": "ITI (Fitter/Electrical)",
      "ctc": "₹11,277 per month Approx"
    }
  ]
},

  // 🏭 Dixon Technologies - Pan India Vacancies
{
  "name": "Dixon Technologies",
  "logo": "/assets/manufacturing/dixon.png",
  "description": "Electronics manufacturing",
  "jobOpenings": 1000,
  "location": "Pan India",
  "jobId": "dixon-tech-11223",
  "industry": "Electronics Manufacturing",
  "jobs": [
    {
      "title": "Electronics Assembler",
      "description": "Assemble electronic components and devices as per production guidelines.",
      "availableJobs": 400,
      "location": "Factories across India",
      "industryType": "Manufacturing - Assembly",
      "qualification": "Diploma / ITI in Electronics",
      "ctc": "₹18,000 - ₹22,000 per month Approx"
    },
    {
      "title": "Quality Inspector",
      "description": "Inspect finished products, ensure quality standards, and report defects.",
      "availableJobs": 200,
      "location": "Factories across India",
      "industryType": "Manufacturing - Quality Control",
      "qualification": "Diploma / ITI in Electronics",
      "ctc": "₹20,000 - ₹25,000 per month Approx"
    },
    {
      "title": "Production Supervisor",
      "description": "Oversee assembly line, coordinate with teams, and maintain production targets.",
      "availableJobs": 100,
      "location": "Factories across India",
      "industryType": "Manufacturing - Supervision",
      "qualification": "Graduate / Diploma in Electronics",
      "ctc": "₹30,000 - ₹35,000 per month Approx"
    },
    {
      "title": "Maintenance Technician",
      "description": "Perform preventive and corrective maintenance on machinery and equipment.",
      "availableJobs": 150,
      "location": "Factories across India",
      "industryType": "Manufacturing - Maintenance",
      "qualification": "ITI / Diploma in Electrical/Electronics",
      "ctc": "₹18,000 - ₹23,000 per month Approx"
    },
    {
      "title": "Apprentice",
      "description": "Assist senior technicians and learn electronics manufacturing operations.",
      "availableJobs": 150,
      "location": "Factories across India",
      "industryType": "Manufacturing - Training",
      "qualification": "ITI in relevant field",
      "ctc": "₹12,000 - ₹15,000 per month Approx"
    }
  ]
},

 
 // 🏭 Padget Technology Ltd. (Noida)
{
  "name": "Padget Technology Ltd.",
  "logo": "/assets/manufacturing/padget.png",
  "description": "Padget Technology Ltd., a leading electronics manufacturing company under Dixon Technologies, is hiring for production, operator, and assembly roles at its Noida facility.",
  "jobOpenings": 350,
  "location": "Noida, Uttar Pradesh",
  "industry": "Electronics Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate production line machinery, ensure smooth workflow, and maintain safety and quality standards.",
      "availableJobs": 200,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Assembly Line Operator",
      "description": "Assemble electronic components and products as per design specifications, ensuring accuracy and efficiency.",
      "availableJobs": 100,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Assembly Operations"
    },
    {
      "title": "Machine Operator",
      "description": "Handle automated machines, perform routine checks, and assist with troubleshooting minor production issues.",
      "availableJobs": 50,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Machine Operations"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Electronics/Mechanical",
  "salary": "₹12,000 - ₹17,000",
  "benefits": "Food & Sharing Accommodation"
},
 
  // ⚙ Idemia Syseom India Pvt. Ltd.
{
  "name": "Idemia Syseom India Pvt. Ltd.",
  "logo": "/assets/manufacturing/idemia.jpg",
  "description": "Idemia Syseom India Pvt. Ltd. is a leading manufacturer in smart card and security technology, hiring for production, operator, and assembly roles at its Noida facility.",
  "jobOpenings": 70,
  "location": "Noida, Uttar Pradesh",
  "industry": "Electronics & Smart Card Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate manufacturing equipment for smart card production, monitor process efficiency, and maintain safety standards.",
      "availableJobs": 25,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Machine Operator",
      "description": "Handle operating machines, perform setup and calibration, and ensure smooth production flow.",
      "availableJobs": 20,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Machine Operation"
    },
    {
      "title": "Assembly Operator",
      "description": "Assemble smart card components, perform quality checks, and support packaging and dispatch operations.",
      "availableJobs": 25,
      "location": "Noida, Uttar Pradesh",
      "industryType": "Manufacturing - Assembly Line"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Electronics/Mechanical",
  "salary": "₹12,000 - ₹17,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  // ⚙ SATA Vikas Pvt. Ltd.
{
  "name": "SATA Vikas Pvt. Ltd.",
  "logo": "/assets/manufacturing/sata.png",
  "description": "SATA Vikas Pvt. Ltd., a leading automotive component manufacturing company, is hiring CNC and VMC Machine Operators for its Haryana plant.",
  "jobOpenings": 120,
  "location": "Haryana",
  "industry": "Manufacturing & Engineering",
  "jobs": [
    {
      "title": "CNC Machine Operator",
      "description": "Operate CNC machines to produce precision automotive components as per design specifications and safety standards.",
      "availableJobs": 70,
      "location": "Haryana",
      "industryType": "Manufacturing - CNC Operations"
    },
    {
      "title": "VMC Machine Operator",
      "description": "Set up and operate VMC machines, maintain production quality, and ensure equipment functionality.",
      "availableJobs": 50,
      "location": "Haryana",
      "industryType": "Manufacturing - VMC Operations"
    }
  ],
  "qualification": "ITI, Diploma, or Technical Training in Mechanical/Production",
  "salary": "₹13,000 - ₹18,000",
  "benefits": "Food & Sharing Accommodation"
},
  
// ⚙ Shriram Pistons & Rings Ltd. (Ghaziabad)
{
  "name": "Shriram Pistons & Rings Ltd.",
  "logo": "/assets/manufacturing/shriram.png",
  "description": "Shriram Pistons & Rings Ltd., a leading manufacturer of engine components, is hiring for production and assembly roles at its Ghaziabad plant.",
  "jobOpenings": 300,
  "location": "Ghaziabad, Uttar Pradesh",
  "industry": "Automotive Component Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate machines for piston and ring manufacturing, monitor production quality, and ensure adherence to process standards.",
      "availableJobs": 180,
      "location": "Ghaziabad, Uttar Pradesh",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Assembly Line Operator",
      "description": "Assemble engine components, check for dimensional accuracy, and maintain quality standards in the assembly line.",
      "availableJobs": 120,
      "location": "Ghaziabad, Uttar Pradesh",
      "industryType": "Manufacturing - Assembly Operations"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Mechanical/Automobile",
  "salary": "₹13,000 - ₹18,000",
  "benefits": "Food & Sharing Accommodation"
},
  
 // ⚙ TATA Electronics Pvt. Ltd. (Hosur)
{
  "name": "TATA Electronics Pvt. Ltd.",
  "logo": "/assets/manufacturing/tataelec.png",
  "description": "TATA Electronics Pvt. Ltd., a leading electronics manufacturing company under the Tata Group, is hiring for mobile assembly roles at its Hosur facility.",
  "jobOpenings": 400,
  "location": "Hosur, Tamil Nadu",
  "industry": "Electronics Manufacturing",
  "jobs": [
    {
      "title": "Mobile Assembly Operator",
      "description": "Assemble smartphone components on the production line, ensure quality control, and maintain workflow efficiency.",
      "availableJobs": 300,
      "location": "Hosur, Tamil Nadu",
      "industryType": "Manufacturing - Assembly Operations"
    },
    {
      "title": "Quality Inspector",
      "description": "Inspect assembled mobile units for defects, perform quality assurance checks, and ensure compliance with manufacturing standards.",
      "availableJobs": 100,
      "location": "Hosur, Tamil Nadu",
      "industryType": "Manufacturing - Quality Control"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Electronics/Mechanical",
  "salary": "₹13,000 - ₹18,000",
  "benefits": "Food & Sharing Accommodation"
},
  


 // 🏭 Dipity Lal Judge Mal Pvt. Ltd.
{
  "name": "Dipity Lal Judge Mal Pvt. Ltd.",
  "logo": "/assets/manufacturing/dljm.png",
  "description": "Dipity Lal Judge Mal Pvt. Ltd. (DLJM Group) is a leading manufacturing company hiring for production and assembly roles at its Noida plant.",
  "jobOpenings": 200,
  "location": "Noida, Uttar Pradesh",
  "industry": "Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate production machinery, maintain process quality, and follow manufacturing SOPs.",
      "availableJobs": 100,
      "location": "Noida, UP",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Assembly Line Worker",
      "description": "Assemble mechanical and electronic parts, ensure proper fitting, and support production workflow.",
      "availableJobs": 100,
      "location": "Noida, UP",
      "industryType": "Manufacturing - Assembly"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in relevant trade",
  "salary": "₹12,000 - ₹16,000",
  "benefits": "Food & Sharing Accommodation"
},


 // 🏭 MRF Tyres
{
  "name": "MRF Tyres",
  "logo": "/assets/manufacturing/mrf.png",
  "description": "MRF Tyres, India’s leading tyre manufacturing company, is hiring skilled and semi-skilled candidates for production, quality, and maintenance roles across India.",
  "jobOpenings": 150,
  "location": "Pan India",
  "industry": "Manufacturing - Tyre Production",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate tyre manufacturing machinery, follow safety protocols, and ensure production quality standards.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Quality Inspector",
      "description": "Inspect finished tyres, monitor production quality, and document test results as per company standards.",
      "availableJobs": 40,
      "location": "Pan India",
      "industryType": "Manufacturing - Quality Control"
    },
    {
      "title": "Maintenance Technician",
      "description": "Perform preventive maintenance and repairs on machines and equipment used in tyre production.",
      "availableJobs": 40,
      "location": "Pan India",
      "industryType": "Manufacturing - Maintenance"
    }
  ],
  "qualification": "ITI, Diploma, or Graduate in Mechanical / Electrical / Production Engineering",
  "salary": "₹14,000 - ₹22,000",
  "benefits": "PF, ESI, Canteen & Accommodation Facilities"
},



 // 🚗 Nissan
{
  "name": "Nissan",
  "logo": "/assets/manufacturing/nissan.jpg",
  "description": "Nissan Motor India, a leading global automobile manufacturer, is hiring for multiple production and engineering roles across its plants and service locations in India.",
  "jobOpenings": 300,
  "location": "Pan India",
  "industry": "Automobile Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate assembly line machinery, handle vehicle components, and maintain production quality standards.",
      "availableJobs": 150,
      "location": "Pan India",
      "industryType": "Automobile - Production"
    },
    {
      "title": "Quality Inspector",
      "description": "Inspect automotive parts and vehicles, ensure compliance with quality specifications, and report deviations.",
      "availableJobs": 80,
      "location": "Pan India",
      "industryType": "Automobile - Quality Assurance"
    },
    {
      "title": "Maintenance Technician",
      "description": "Perform maintenance and troubleshooting of production equipment to minimize downtime and improve efficiency.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Automobile - Maintenance"
    }
  ],
  "qualification": "ITI, Diploma, or Graduate in Mechanical / Electrical / Automobile Engineering",
  "salary": "₹15,000 - ₹25,000",
  "benefits": "PF, ESI, Subsidized Meals, Accommodation & Transport"
},



 // 🏭 Rialto Enterprises
{
  "name": "Rialto Enterprises",
  "logo": "/assets/manufacturing/railto.jpeg",
  "description": "Rialto Enterprises, a reputed manufacturing company, is hiring for production, assembly, and quality roles across India. The company specializes in high-quality consumer and industrial products.",
  "jobOpenings": 120,
  "location": "Pan India",
  "industry": "Manufacturing & Production",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate manufacturing machines, ensure smooth production flow, and maintain quality standards.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Assembly Line Worker",
      "description": "Handle product assembly, packaging, and quality checks as per company standards.",
      "availableJobs": 40,
      "location": "Pan India",
      "industryType": "Manufacturing - Assembly"
    },
    {
      "title": "Quality Inspector",
      "description": "Monitor production output, inspect materials, and ensure adherence to quality parameters.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "Manufacturing - Quality Control"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in relevant field",
  "salary": "₹12,000 - ₹18,000",
  "benefits": "PF, ESI, Canteen & Accommodation Facilities"
},



 // 🏭 Joyson Safety Systems
{
  "name": "Joyson Safety Systems",
  "logo": "/assets/manufacturing/joyson.jpg",
  "description": "Joyson Safety Systems is a leading global manufacturer of automotive safety components, including airbags, seatbelts, and steering wheels. The company is hiring for production, assembly, and quality inspection roles across India.",
  "jobOpenings": 180,
  "location": "Pan India",
  "industry": "Automotive Manufacturing & Safety Systems",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate machinery and support production of automotive safety components with adherence to safety and quality standards.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Assembly Line Worker",
      "description": "Assemble airbag modules and other safety system components, ensuring quality and precision.",
      "availableJobs": 60,
      "location": "Pan India",
      "industryType": "Manufacturing - Assembly"
    },
    {
      "title": "Quality Inspector",
      "description": "Inspect finished products, verify component integrity, and ensure compliance with automotive safety standards.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "Manufacturing - Quality Control"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Mechanical/Electrical fields",
  "salary": "₹13,000 - ₹18,000",
  "benefits": "PF, ESI, Subsidized Meals & Accommodation"
},

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
    description:
      "International On-the-Job Training (OJT) and Employment Pathway Program in South Korea for Indian youth.",
    jobOpenings: 150,
    location: "South Korea",
    jobs: [
      {
        title: "Learn & Earn in Korea — On-the-Job Training (Up to 2 Years)",
        location: "South Korea",
        industry:
          "Hospitality, Tourism, F&B, Caregiving, Electronics, Automotive Engineering",
        jd: `ConnectED, a Kukje India Group initiative, offers an international training and employment pathway program in South Korea. 
It helps Indian students and graduates gain industry exposure, skill development, and future job opportunities in key sectors such as hospitality, caregiving, tourism, electronics, and automotive engineering.

PROGRAM HIGHLIGHTS:
- On-the-Job Training for up to 2 years, leading to full-time employment.
- International exposure through university and industry partnerships.
- Monthly stipend during OJT: approximately ₹50,000 – ₹70,000.
- Post-training salary: up to ₹1.38 lakh per month (as per Korean labor laws).
- Partner universities include Jangan University, Seoyoung University, Kimpo University, and others.

INDUSTRY SECTORS:
Hospitality, Tourism, F&B, Caregiving, Electronics, Automotive Engineering

ELIGIBILITY:
- Open to graduates from any stream (preferred: Hospitality, Nursing, Business, or Service backgrounds).
- English Medium of Instruction (MOI) required.
- Must be willing to learn Korean language and adapt to Korean work culture.

PROGRAM FEES (Approximate):
- Tuition Fee: ₹2,50,000 per semester
- Scholarship: Up to 30% tuition waiver (based on performance)
- Accommodation: ₹95,000 per semester
- Living Expenses: ₹90,000 per semester
- One-time expenses: ₹60,000 (travel, visa, insurance, etc.)
- Service or Implementation Fee: ₹1,75,000 + GST`,
      },
    ],
  },
];




const automobileCompanies = [
 // 🏭 Hero Motors
{
  "name": "Hero Motors",
  "logo": "/assets/manufacturing/hero.png",
  "description": "Hero Motors is a leading automobile and component manufacturer hiring for production, operator, and assembly roles at its Dujana-Dadri plant.",
  "jobOpenings": 40,
  "location": "Dujana, Dadri (Uttar Pradesh)",
  "industry": "Automobile & Manufacturing",
  "jobs": [
    {
      "title": "Production Operator",
      "description": "Operate production machinery, ensure process efficiency, and maintain safety and quality standards.",
      "availableJobs": 15,
      "location": "Dujana, Dadri",
      "industryType": "Manufacturing - Production"
    },
    {
      "title": "Machine Operator",
      "description": "Handle CNC and assembly machines, assist in production flow, and perform quality checks.",
      "availableJobs": 10,
      "location": "Dujana, Dadri",
      "industryType": "Manufacturing - Machine Operation"
    },
    {
      "title": "Assembly Line Worker",
      "description": "Assemble mechanical parts and components, follow SOPs, and support daily manufacturing operations.",
      "availableJobs": 15,
      "location": "Dujana, Dadri",
      "industryType": "Manufacturing - Assembly"
    }
  ],
  "qualification": "10th, 12th, ITI, or Diploma in Mechanical/Electrical",
  "salary": "₹13,000 - ₹18,000",
  "benefits": "Food & Sharing Accommodation"
},


    // 🏭 Mahindra Automotive - ITI Trainee
{
  "name": "Mahindra Automotive",
  "logo": "/assets/manufacturing/mahindra-automotive.png",
  "description": "ITI Trainee / Apprentice roles in Automotive Manufacturing & Support Activities",
  "jobOpenings": 650,
  "location": "Chakan (Pune), Nashik (Maharashtra)",
  "jobId": "mahindra-auto-65231",
  "industry": "Automotive Manufacturing",
  "jobs": [
    {
      "title": "ITI Trainee / Apprentice",
      "description": "Technical roles across Automotive Manufacturing & Support Activities, including Assembly, Operations & Maintenance.",
      "availableJobs": 650,
      "location": "Mfg. Plant - Chakan (Pune) & Nashik (Maharashtra)",
      "industryType": "Automotive - Technical",
      "qualification": "ITI with any one of the following specializations: Electrician, Electronics, Mechanic, Fitter, Machine Mechanic tool maintenance, Machinist, Mechanic (Motor Vehicle), Mechanic Diesel / Painter (General), Sheet Metal Worker, Tool and Die Maker (Press Tools), Jigs and Fixtures, Turner, Welder (Gas and Electric), Draughtsman (Civil), Information and Communication, Technology System, Maintenance, Plastic Processing Operator, Pump Operator Cum Mechanic",
      "ctc": "₹18,000 + Office Meals",
      "language": "English, Hindi / Marathi",
      "preference": "No Preference"
    }
  ]
},

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

// 🏨 Bluspring Enterprises Ltd
{
  "name": "Bluspring Enterprises Ltd",
  "logo": "/assets/health-and-tour/blu-spring.jpg",
  "description": "Bluspring Enterprises Ltd is hiring for multiple hospitality and facility management roles across India.",
  "jobOpenings": 800,
  "location": "North, East, South & West India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Housekeeping Associate",
      "description": "Maintain cleanliness, ensure hygiene standards, and handle guest service requests.",
      "availableJobs": 250,
      "location": "Pan India",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, ensure customer satisfaction, and maintain service quality.",
      "availableJobs": 200,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Kitchen Helper",
      "description": "Assist in food preparation, maintain kitchen cleanliness, and support culinary staff.",
      "availableJobs": 150,
      "location": "Pan India",
      "industryType": "Hospitality - Kitchen Operations"
    },
    {
      "title": "Counter Sales Executive",
      "description": "Engage with customers, promote products or services, and handle billing and queries.",
      "availableJobs": 200,
      "location": "Pan India",
      "industryType": "Sales - Retail & Customer Service"
    }
  ],
  "qualification": "10th, 12th, or Diploma",
  "salary": "₹12,000 - ₹15,000",
  "benefits": "Food & Sharing Accommodation"
},
  
    
  
  // 🏨 Aurum by RJ Resorts
{
  "name": "Aurum by RJ Resorts",
  "logo": "/assets/health-and-tour/aurum.png",
  "description": "Aurum by RJ Resorts is hiring for multiple hospitality roles in Siliguri.",
  "jobOpenings": 10,
  "location": "Siliguri, West Bengal",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Assist in serving food and beverages, ensure guest satisfaction, and maintain service standards.",
      "availableJobs": 3,
      "location": "Siliguri",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Front Office Associate",
      "description": "Handle guest check-ins/check-outs, manage reservations, and provide customer support.",
      "availableJobs": 2,
      "location": "Siliguri",
      "industryType": "Hospitality - Front Office"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain room and resort cleanliness, handle guest requests, and ensure hygiene standards.",
      "availableJobs": 3,
      "location": "Siliguri",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Commis (Kitchen)",
      "description": "Assist in food preparation, follow recipes, and maintain kitchen hygiene.",
      "availableJobs": 2,
      "location": "Siliguri",
      "industryType": "Hospitality - Culinary"
    },
    ]
},

  // 🏨 Sterling Holidays Resort
{
  "name": "Sterling Holidays Resort",
  "logo": "/assets/health-and-tour/sterling.png",
  "description": "Sterling Holidays Resort is hiring for multiple hospitality roles across Darjeeling, Gangtok, and Kalimpong.",
  "jobOpenings": 30,
  "location": "Darjeeling, Gangtok, Kalimpong",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, maintain service quality, and ensure guest satisfaction.",
      "availableJobs": 8,
      "location": "Darjeeling, Gangtok, Kalimpong",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Front Office Associate",
      "description": "Handle guest check-ins/check-outs, reservations, and customer interactions.",
      "availableJobs": 6,
      "location": "Darjeeling, Gangtok, Kalimpong",
      "industryType": "Hospitality - Front Office"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain room cleanliness, attend guest requests, and ensure hygiene standards.",
      "availableJobs": 6,
      "location": "Darjeeling, Gangtok, Kalimpong",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Commis (Kitchen)",
      "description": "Assist in food preparation, maintain kitchen hygiene, and ensure food quality.",
      "availableJobs": 6,
      "location": "Darjeeling, Gangtok, Kalimpong",
      "industryType": "Hospitality - Culinary"
    },
    {
      "title": "HR Associate",
      "description": "Support recruitment, employee relations, and daily HR operations at the resort.",
      "availableJobs": 4,
      "location": "Darjeeling, Gangtok, Kalimpong",
      "industryType": "Hospitality - Human Resources"
    }
  ],
  "qualification": "Graduate or Diploma in Hotel Management",
  "salary": "₹14,000 - ₹19,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  { name: "TAJ/Vivanta Group", logo: "/assets/health-and-tour/taj.png", description: "Luxury hospitality group", jobOpenings: 58, location: "Major Cities", jobId: "taj-vivanta-45454" },

  // 🏨 Udaan Hotels & Resorts
{
  "name": "Udaan Hotels & Resorts",
  "logo": "/assets/health-and-tour/udaan.png",
  "description": "Udaan Hotels & Resorts is hiring for multiple hospitality positions in Siliguri.",
  "jobOpenings": 20,
  "location": "Siliguri, West Bengal",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, assist guests, and maintain service standards.",
      "availableJobs": 5,
      "location": "Siliguri",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Front Office Associate",
      "description": "Manage guest check-ins/check-outs, reservations, and front desk operations.",
      "availableJobs": 4,
      "location": "Siliguri",
      "industryType": "Hospitality - Front Office"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Ensure cleanliness of rooms and common areas, and provide housekeeping support.",
      "availableJobs": 6,
      "location": "Siliguri",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Commis (Kitchen)",
      "description": "Assist chefs in food preparation, maintain kitchen hygiene, and follow recipes.",
      "availableJobs": 5,
      "location": "Siliguri",
      "industryType": "Hospitality - Culinary"
    }
  ],
  "qualification": "12th Pass, Undergraduate, or Diploma in Hotel Management",
  "salary": "₹10,000 - ₹15,000",
  "benefits": "Food & Sharing Accommodation"
},
 // 🏨 Compass Group
{
  "name": "Compass Group",
  "logo": "/assets/health-and-tour/compass.png",
  "description": "Compass Group is hiring for large-scale hospitality operations across India, offering roles in food service and housekeeping.",
  "jobOpenings": 600,
  "location": "North, East, South & West India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, maintain service quality, and ensure guest satisfaction across multiple client locations.",
      "availableJobs": 350,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain cleanliness, handle guest requests, and ensure hygiene standards at client premises.",
      "availableJobs": 250,
      "location": "Pan India",
      "industryType": "Hospitality - Housekeeping"
    }
  ],
  "qualification": "10th, 12th, Undergraduate, or Diploma",
  "salary": "₹10,000 - ₹16,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  // 🏨 Vasati Services
{
  "name": "Vasati Services",
  "logo": "/assets/health-and-tour/vasati.png",
  "description": "Vasati Services is hiring for multiple hospitality and service roles across Delhi NCR and Uttar Pradesh.",
  "jobOpenings": 20,
  "location": "Delhi NCR, Uttar Pradesh",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Chef",
      "description": "Prepare meals, manage kitchen operations, and ensure food quality and hygiene standards.",
      "availableJobs": 6,
      "location": "Delhi NCR, Uttar Pradesh",
      "industryType": "Hospitality - Culinary"
    },
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, ensure customer satisfaction, and maintain service standards.",
      "availableJobs": 8,
      "location": "Delhi NCR, Uttar Pradesh",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Front Office Associate",
      "description": "Handle guest check-ins/check-outs, reservations, and manage customer interactions.",
      "availableJobs": 6,
      "location": "Delhi NCR, Uttar Pradesh",
      "industryType": "Hospitality - Front Office"
    }
  ],
  "qualification": "12th Pass, Undergraduate, or Postgraduate",
  "salary": "₹13,000 - ₹17,000",
  "benefits": "On Duty Meal"
},
  
  { name: "Sumi Yashshree", logo: "/assets/health-and-tour/yumi.png", description: "Hospitality and lodging services", jobOpenings: 20, location: "Tourist Destinations", jobId: "d64ca8c7-020c-4514-9fb6-c787220a3234" },

// 🍽 Absolute Barbeque
{
  "name": "Absolute Barbeque",
  "logo": "/assets/retail/abs.png",
  "description": "Absolute Barbeque is hiring for restaurant and hospitality service roles across India.",
  "jobOpenings": 200,
  "location": "North, East, South & West India",
  "industry": "Food & Beverage / Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, provide excellent customer service, and maintain restaurant hygiene and service quality.",
      "availableJobs": 200,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    }
  ],
  "qualification": "10th Pass",
  "salary": "₹12,000 - ₹16,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  // 🍽 Barbeque Nation
{
  "name": "Barbeque Nation",
  "logo": "/assets/retail/bbq.png",
  "description": "Barbeque Nation is hiring for large-scale restaurant operations across India.",
  "jobOpenings": 600,
  "location": "North, East, South & West India",
  "industry": "Food & Beverage / Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, assist guests, and maintain high service and hygiene standards in restaurant operations.",
      "availableJobs": 600,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    }
  ],
  "qualification": "10th Pass",
  "salary": "₹12,000 - ₹16,000",
  "benefits": "Food & Sharing Accommodation"
},
  
 // 🎬 PVR INOX
{
  "name": "PVR INOX",
  "logo": "/assets/health-and-tour/pvr.png",
  "description": "PVR INOX is hiring for multiple cinema hospitality and management roles across India.",
  "jobOpenings": 80,
  "location": "North, East, South & West India",
  "industry": "Entertainment & Hospitality",
  "jobs": [
    {
      "title": "Duty Manager",
      "description": "Oversee daily cinema operations, manage staff, ensure guest satisfaction, and handle escalations.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "Hospitality - Management"
    },
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages at cinema outlets, maintain service quality, and ensure a great customer experience.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Counter Sales Executive",
      "description": "Handle customer interactions at box office and concession counters, manage billing, and promote offers.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "Sales - Retail & Customer Service"
    }
  ],
  "qualification": "12th Pass, Graduate, or Diploma",
  "salary": "₹12,000 - ₹18,000",
  "benefits": "On Duty Meal"
},
  
 // 🏨 Royal Orchid Hotel
{
  "name": "Royal Orchid Hotel",
  "logo": "/assets/health-and-tour/royal.png",
  "description": "Royal Orchid Hotel is hiring for multiple hospitality roles across North India.",
  "jobOpenings": 30,
  "location": "North India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, maintain service quality, and ensure guest satisfaction.",
      "availableJobs": 8,
      "location": "North India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Front Office Associate",
      "description": "Handle guest check-ins/check-outs, reservations, and provide quality front desk support.",
      "availableJobs": 6,
      "location": "North India",
      "industryType": "Hospitality - Front Office"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain guest room cleanliness, handle requests, and ensure hygiene standards.",
      "availableJobs": 8,
      "location": "North India",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Commis (Kitchen)",
      "description": "Assist chefs in food preparation, maintain kitchen hygiene, and follow recipes and SOPs.",
      "availableJobs": 8,
      "location": "North India",
      "industryType": "Hospitality - Culinary"
    }
  ],
  "qualification": "12th Pass, Graduate, or Diploma",
  "salary": "₹13,000 - ₹17,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  // 🏨 Sodexo Group
{
  "name": "Sodexo Group",
  "logo": "/assets/health-and-tour/sodexo.png",
  "description": "Sodexo Group is hiring for multiple hospitality and facility management roles across India.",
  "jobOpenings": 300,
  "location": "North, East, South & West India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "F&B Service Associate",
      "description": "Serve food and beverages, maintain service standards, and ensure customer satisfaction.",
      "availableJobs": 100,
      "location": "Pan India",
      "industryType": "Hospitality - Food & Beverage Service"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain room and facility cleanliness, handle guest requests, and ensure hygiene standards.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Hospitality - Housekeeping"
    },
    {
      "title": "Bartender",
      "description": "Prepare and serve beverages, maintain bar hygiene, and deliver excellent customer service.",
      "availableJobs": 40,
      "location": "Pan India",
      "industryType": "Hospitality - Bar Operations"
    },
    {
      "title": "GDA (General Duty Assistant)",
      "description": "Assist in patient care and facility support services across healthcare and hospitality sites.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "Hospitality - General Duty Assistance"
    },
    {
      "title": "Commis (Kitchen)",
      "description": "Assist chefs in food preparation, follow recipes, and maintain kitchen hygiene.",
      "availableJobs": 40,
      "location": "Pan India",
      "industryType": "Hospitality - Culinary"
    }
  ],
  "qualification": "10th, 12th, Undergraduate, or Diploma",
  "salary": "₹10,000 - ₹16,000",
  "benefits": "Food & Sharing Accommodation"
},

  // 🏨 Quess Corp
{
  "name": "Quess Corp",
  "logo": "/assets/IT/quess.png",
  "description": "Quess Corp is hiring for multiple hospitality and facility management roles across India.",
  "jobOpenings": 200,
  "location": "North, East, South & West India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Front Office Associate",
      "description": "Manage guest check-ins/check-outs, reservations, and handle front desk operations.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Hospitality - Front Office"
    },
    {
      "title": "GDA (General Duty Assistant)",
      "description": "Provide guest and patient support, ensure comfort, and maintain service standards.",
      "availableJobs": 60,
      "location": "Pan India",
      "industryType": "Hospitality - General Duty Assistance"
    },
    {
      "title": "Housekeeping Associate",
      "description": "Maintain room and area cleanliness, handle guest requests, and ensure hygiene compliance.",
      "availableJobs": 70,
      "location": "Pan India",
      "industryType": "Hospitality - Housekeeping"
    }
  ],
  "qualification": "Graduate or Diploma in Hotel Management",
  "salary": "₹12,000 - ₹15,000",
  "benefits": "Food & Sharing Accommodation"
},
  
  { name: "Apollo Sindoori Hotels Ltd.", logo: "/assets/health-and-tour/apollo-sindoori.png", description: "Hospitality and catering", jobOpenings: 85, location: "Tourist Destinations", jobId: "apollo-sindoori-55665" },


 // 🍰 Birdys Company
{
  "name": "Birdys Company",
  "logo": "/assets/health-and-tour/Birdys.png",
  "description": "Birdys Company, a renowned name in the bakery and hospitality industry, is hiring for culinary and customer service roles across Mumbai.",
  "jobOpenings": 50,
  "location": "Mumbai",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Customer Service Executive",
      "description": "Greet and assist customers, handle orders and billing, and ensure a pleasant in-store experience.",
      "availableJobs": 20,
      "location": "Mumbai",
      "industryType": "Hospitality - Customer Service"
    },
    {
      "title": "Commis Chef",
      "description": "Support the kitchen team in preparing bakery and confectionery items while maintaining hygiene standards.",
      "availableJobs": 20,
      "location": "Mumbai",
      "industryType": "Hospitality - Culinary"
    },
    {
      "title": "Chef de Partie",
      "description": "Supervise a kitchen section, ensure food quality, and train junior staff in recipe preparation and presentation.",
      "availableJobs": 10,
      "location": "Mumbai",
      "industryType": "Hospitality - Culinary Leadership"
    }
  ],
  "qualification": "12th Pass or Diploma/Degree in Hotel Management or Culinary Arts",
  "salary": "₹15,000 - ₹25,000",
  "benefits": "Meals & Uniform Provided"
},

 // 🍴 Ziatoon Restaurant and Grill Pvt. Ltd.
{
  "name": "Ziatoon Restaurant and Grill Pvt. Ltd.",
  "logo": "/assets/health-and-tour/zaitoon.png",
  "description": "Ziatoon Restaurant and Grill, a leading hospitality chain, is hiring for F&B Service, Production, and Housekeeping roles across India.",
  "jobOpenings": 300,
  "location": "Pan India",
  "industry": "Tourism & Hospitality",
  "jobs": [
    {
      "title": "Restaurant Manager",
      "description": "Oversee restaurant operations, manage staff, and ensure high-quality service standards.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "F&B Service - Management"
    },
    {
      "title": "Asst Restaurant Manager",
      "description": "Assist the Restaurant Manager in daily operations and staff management.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "F&B Service - Management"
    },
    {
      "title": "GRE (Female)",
      "description": "Greet and assist customers, handle queries, and maintain a pleasant in-store experience.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "F&B Service"
    },
    {
      "title": "Sr Captains / Captains",
      "description": "Serve customers, manage dining area, and ensure smooth service.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "F&B Service"
    },
    {
      "title": "Trainee Captains",
      "description": "Learn service standards and assist senior staff in customer service.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "F&B Service"
    },
    {
      "title": "Sr Stewards / Stewards",
      "description": "Maintain hygiene, clean dining areas, and assist in food service.",
      "availableJobs": 30,
      "location": "Pan India",
      "industryType": "F&B Service"
    },
    {
      "title": "CDP (Tandoori / Chinese / Arabian / Conti / South Indian / North Indian / Pantry)",
      "description": "Prepare specialty dishes while maintaining quality and hygiene standards.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "F&B Production"
    },
    {
      "title": "Commi I / Commi II / Commi III",
      "description": "Support kitchen operations in preparing regional and continental dishes.",
      "availableJobs": 50,
      "location": "Pan India",
      "industryType": "F&B Production"
    },
    {
      "title": "Briyani Master",
      "description": "Specialist in preparing authentic biryani maintaining taste and quality standards.",
      "availableJobs": 10,
      "location": "Pan India",
      "industryType": "F&B Production"
    },
    {
      "title": "Housekeeping Supervisor / Housekeeping Staff",
      "description": "Maintain cleanliness and hygiene standards across restaurant premises.",
      "availableJobs": 20,
      "location": "Pan India",
      "industryType": "Housekeeping"
    }
  ],
  "qualification": "HM (6 months - 3 Years), BHM, or Relevant Work Experience",
  "salary": "₹14,000 - ₹35,000",
  "benefits": "Meals Provided"
},

   // ✈️ TFS Travel Food Services
{
  "name": "TFS Travel Food Services",
  "logo": "/assets/health-and-tour/TFS.jpg",
  "description": "TFS Travel Food Services, a leading provider of airport and travel hospitality services, is hiring for Guest Service and Lounge roles across multiple locations.",
  "jobOpenings": 200,
  "location": "Multiple Locations",
  "industry": "Airport & Travel Hospitality",
  "jobs": [
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 50,
      "location": "Delhi",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 30,
      "location": "Noida",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 30,
      "location": "Cochin",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 30,
      "location": "Bangalore",
      "industryType": "Guest Service"
    },
    {
      "title": "GSA / Lounge Hostess",
      "description": "Welcome guests warmly, verify lounge access, escort to seating, ensure comfort, coordinate refreshments, assist check-ins, provide lounge info, and respond courteously to inquiries or complaints.",
      "availableJobs": 20,
      "location": "Kolkata",
      "industryType": "Lounge & Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 10,
      "location": "Bhubaneshwar",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 20,
      "location": "Bangalore",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 20,
      "location": "Chennai",
      "industryType": "Guest Service"
    },
    {
      "title": "Guest Service Associate (GSA)",
      "description": "Ensure guest comfort during service, serve guests courteously, use upselling techniques, handle counter sales including POS and payment transactions, maintain cleanliness and presentation, and check quality of food & beverage.",
      "availableJobs": 6,
      "location": "Goa",
      "industryType": "Guest Service"
    },
    {
      "title": "Commi",
      "description": "Prepare meals and assist in kitchen operations, ensuring hygiene and quality standards are maintained.",
      "availableJobs": 4,
      "location": "Goa",
      "industryType": "Kitchen / F&B Production"
    }
  ],
  "qualification": "10+2 / Higher Secondary / Diploma in Hotel Management and Catering Technology or relevant degree",
  "salary": "As per state minimum wages",
  "benefits": "Professional training, work experience in airport hospitality, exposure to multiple locations"
},
 

];

const healthcareCompanies = [
  { name: "Apollo Hospitals", logo: "/assets/health-and-tour/apollo.png", description: "Healthcare services", jobOpenings: 796, location: "Pan India", jobId: "87a39c1d-9665-4cb0-b9a7-22d9c6bd8c85" },
];

const itCompanies = [

  {
    name: "Ancile Services",
    logo: "/assets/IT/ancil.png",
    description: "IT Services",
    jobOpenings: 25,
    location: "Kolkata",
    industry: "IT / Recruitment Services",
    qualification:
      "Excellent verbal and written English; basic computer skills",
    salary: "Highly competitive pay structure",
    benefits:
      "Health Insurance (with options to add parents and dependents), Paid Training",
    jobs: [
      {
        title: "Voice-based US Recruitment Associate",
        description:
          "Work on job boards, manage listings, screen candidates, handle follow-ups, and maintain daily MIS reports.",
        availableJobs: 25,
        location: "Kolkata",
        industryType: "Recruitment - International BPO",
      },
    ],
    jobId: "ec31a997-de8a-4470-9810-82b1ce32de71",
  },

  {
    name: "Aeon Research",
    logo: "/assets/health-and-tour/aeon.png",
    description:
      "Aeon Research is hiring for multiple field and service roles across Delhi NCR, Bihar, and Uttar Pradesh.",
    jobOpenings: 50,
    location: "Delhi NCR, Bihar, Uttar Pradesh",
    industry: "Research & Field Operations",
    qualification: "12th Pass, Graduate, Diploma, or MBA",
    salary: "₹12,000 - ₹18,000",
    benefits: "No",
    jobs: [
      {
        title: "Field Staff",
        description:
          "Conduct on-ground data collection, interact with customers, and support field operations.",
        availableJobs: 15,
        location: "Delhi NCR, Bihar, Uttar Pradesh",
        industryType: "Research - Field Operations",
      },
      {
        title: "Surveyor",
        description:
          "Perform surveys, gather accurate data, and report insights as per project requirements.",
        availableJobs: 10,
        location: "Delhi NCR, Bihar, Uttar Pradesh",
        industryType: "Research - Data Collection",
      },
      {
        title: "F&B Service Associate",
        description:
          "Serve food and beverages, ensure guest satisfaction, and maintain service standards.",
        availableJobs: 10,
        location: "Delhi NCR, Bihar, Uttar Pradesh",
        industryType: "Hospitality - Food & Beverage Service",
      },
      {
        title: "Counter Sales Executive",
        description:
          "Manage customer engagement, assist in product sales, and ensure positive client experience.",
        availableJobs: 15,
        location: "Delhi NCR, Bihar, Uttar Pradesh",
        industryType: "Sales - Retail & Customer Service",
      },
    ],
  },
];

const devyaniCompanies = [
  { name: "KFC", logo: "/assets/retail/kfc.png", description: "Quick service restaurant", jobOpenings: 200, location: "Pan India", jobId: "kfc-11235" },
  { name: "Costa Coffee", logo: "/assets/retail/costa.png", description: "Coffee chain", jobOpenings: 30, location: "Metro Cities", jobId: "costa-coffee-76890" },
  { name: "Vaango", logo: "/assets/retail/vaango.png", description: "South Indian restaurant chain", jobOpenings: 40, location: "Metro Cities", jobId: "vaango-98765" },
  { name: "Airport Food Courts", logo: "/assets/retail/food-court.jpg", description: "Airport dining", jobOpenings: 50, location: "Airports", jobId: "airport-food-courts-11222" },
  { name: "Food Courts", logo: "/assets/retail/food-court.jpg", description: "Multi-brand dining", jobOpenings: 50, location: "Major Cities", jobId: "food-courts-33444" },
  // 🍛 Biriyani by Kilo
{
  "name": "Biriyani by Kilo",
  "logo": "/assets/retail/Biryani.png",
  "description": "Biriyani by Kilo, a popular F&B brand, is hiring for culinary and service roles across metro cities.",
  "jobOpenings": 50,
  "location": "Metro Cities",
  "industry": "F&B / Hospitality",
  "jobs": [
    {
      "title": "Restaurant Manager",
      "description": "Oversee restaurant operations, manage staff, and ensure high-quality service standards.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "F&B Service - Management"
    },
    {
      "title": "Asst Restaurant Manager",
      "description": "Assist the Restaurant Manager in daily operations and staff management.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "F&B Service - Management"
    },
    {
      "title": "Captains / Sr Captains",
      "description": "Serve customers, manage dining area, and ensure smooth service.",
      "availableJobs": 15,
      "location": "Metro Cities",
      "industryType": "F&B Service"
    },
    {
      "title": "Trainee Captains",
      "description": "Learn service standards and assist senior staff in customer service.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "F&B Service"
    },
    {
      "title": "Stewards / Sr Stewards",
      "description": "Maintain hygiene, clean dining areas, and assist in food service.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "F&B Service"
    },
    {
      "title": "CDP / Commi I / Commi II / Commi III",
      "description": "Prepare regional and continental dishes in accordance with recipes and hygiene standards.",
      "availableJobs": 10,
      "location": "Metro Cities",
      "industryType": "F&B Production"
    },
    {
      "title": "Briyani Master",
      "description": "Specialist in preparing authentic biryani maintaining taste and quality standards.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "F&B Production"
    },
    {
      "title": "Housekeeping Supervisor / Staff",
      "description": "Maintain cleanliness and hygiene standards across the restaurant premises.",
      "availableJobs": 5,
      "location": "Metro Cities",
      "industryType": "Housekeeping"
    }
  ],
  "qualification": "HM (1-3 Years), BHM, or Relevant Work Experience",
  "salary": "₹14,000 - ₹35,000",
  "benefits": "Meals Provided"
},

];

const telecomCompanies = [


 // 📱 Vodafone
{
  "name": "Vodafone",
  "logo": "/assets/telecom/vodafone.png",
  "description": "Vodafone is hiring energetic candidates for various telecom and customer engagement roles across North Bengal districts. The roles involve sales, customer support, and service operations.",
  "jobOpenings": 150,
  "location": "Siliguri, Darjeeling, Kalimpong, Cooch Behar, Alipurduar, Jalpaiguri, Malda, Uttar Dinajpur",
  "industry": "Telecom & Customer Service",
  "jobs": [
    {
      "title": "Sales Executive",
      "description": "Handle on-field customer acquisition, promote SIM and data services, and achieve regional sales targets.",
      "availableJobs": 60,
      "location": "Across North Bengal",
      "industryType": "Telecom - Sales & Marketing"
    },
    {
      "title": "Customer Service Executive",
      "description": "Assist customers with queries, billing issues, and service activations both in-store and through field visits.",
      "availableJobs": 50,
      "location": "Across North Bengal",
      "industryType": "Telecom - Customer Support"
    },
    {
      "title": "Retail Store Executive",
      "description": "Manage daily operations at Vodafone stores, ensure smooth customer experience, and handle cash and documentation.",
      "availableJobs": 40,
      "location": "Across North Bengal",
      "industryType": "Telecom - Retail Operations"
    }
  ],
  "qualification": "12th Pass or Graduate (Any Stream)",
  "salary": "₹12,000 - ₹20,000 (including incentives)",
  "benefits": "Mobile Allowance & Performance Incentives"
},


 // 💳 PhonePe
{
  "name": "PhonePe",
  "logo": "/assets/telecom/PhonePe.png",
  "description": "PhonePe, one of India’s leading digital payment and financial service platforms, is hiring for customer engagement and business development roles in Kolkata.",
  "jobOpenings": 100,
  "location": "Kolkata",
  "industry": "Telecom & Fintech",
  "jobs": [
    {
      "title": "Business Development Executive",
      "description": "Acquire and onboard merchants to the PhonePe platform, ensure device activation, and maintain merchant relationships.",
      "availableJobs": 50,
      "location": "Kolkata",
      "industryType": "Fintech - Merchant Acquisition"
    },
    {
      "title": "Customer Support Executive",
      "description": "Assist customers and merchants with app-related queries, resolve payment issues, and provide product support.",
      "availableJobs": 30,
      "location": "Kolkata",
      "industryType": "Fintech - Customer Support"
    },
    {
      "title": "Field Sales Executive",
      "description": "Conduct field visits to promote PhonePe services, generate leads, and achieve monthly sales targets.",
      "availableJobs": 20,
      "location": "Kolkata",
      "industryType": "Telecom - Field Sales"
    }
  ],
  "qualification": "12th Pass or Graduate (Any Stream)",
  "salary": "₹14,000 - ₹22,000 (including incentives)",
  "benefits": "Travel Allowance & Incentives"
},
];

const creativeCompanies = [
  { name: "CREATIVE IMPERIAL PVT LTD", logo: "/assets/creative/creative.png", description: "Creative design and media services", jobOpenings: 20, location: "Siliguri", jobId: "creative-imperial-001" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollingEmployers />
      <CompanySection title="Automobile & Manufacturing" companies={automobileCompanies} />
      <CompanySection title="IT & Manufacturing" companies={manufacturingCompanies} />
      <CompanySection title="Tourism & Hospitality" companies={tourismCompanies} />
      <CompanySection title="Aviation & Airlines" companies={aviationCompanies} />
      <CompanySection title="Training Programs" companies={trainingCompanies} />
      <CompanySection title="Healthcare" companies={healthcareCompanies} />
      <CompanySection title="IT & Business Services" companies={itCompanies} />
      <CompanySection title="Devyani International Ltd. (F&B Group)" companies={devyaniCompanies} />
      <CompanySection title="Telecom" companies={telecomCompanies} />
      <CompanySection title="Creative & Media" companies={creativeCompanies} />
       <CompanySection title="Banking & Finance" companies={bankingCompanies} />
      <EventPosters />
      <FloatingFAQ />
      <Footer />
    </div>
  );
};

export default Index;
