import Hero from "@/components/Hero";
import EventPopup from "@/components/EventPopup";
import ScrollingEmployers from "@/components/ScrollingEmployers";
import CompanySection from "@/components/CompanySection";
import EventPosters from "@/components/EventPosters";
import Footer from "@/components/Footer";
import FloatingFAQ from "@/components/FloatingFAQ";

const logisticsCompanies = [
  {
    "name": "Mahindra Logistics",
    "logo": "/assets/manufacturing/mahindra-logistics.jpg",
    "description": "Various skilled and unskilled roles across logistics, supply chain, and facility management operations.",
    "jobOpenings": 486,
    "location": "Pune, Nashik, Mumbai, Haridwar",
    "jobId": "mahindra-logistics-99254",
    "industry": "Logistics & Supply Chain",
    "jobs": [
      {
        "title": "Semi-Skilled Associates",
        "description": "Ensure smooth production flow by supplying required materials, components, and consumables to the line as per schedule.",
        "availableJobs": 100,
        "location": "Chakan MIDC Pune",
        "industryType": "Material Handling & Line Feeding",
        "qualification": "10th Pass",
        "ctc": "₹21,350/month"
      },
      {
        "title": "Skilled Executives",
        "description": "Manage and coordinate outbound and inbound logistics activities, including order preparation, dispatch, and documentation.",
        "availableJobs": 50,
        "location": "Chakan MIDC Pune",
        "industryType": "Logistics / Dispatch / Supply Chain",
        "qualification": "Graduate",
        "ctc": "₹23,000/month"
      },
      {
        "title": "Skilled Drivers",
        "description": "Operate forklifts and material handling equipment safely and efficiently within plant premises.",
        "availableJobs": 50,
        "location": "Chakan MIDC Pune",
        "industryType": "Material Handling Equipment Operator",
        "qualification": "10th Pass with Forklift License/Experience",
        "ctc": "₹23,000/month"
      },
      {
        "title": "Transport Coordinator",
        "description": "Coordinate with transporters, inspect incoming materials, prepare delivery challans, and create MIS reports.",
        "availableJobs": 5,
        "location": "Mumbai",
        "industryType": "Transport Coordination",
        "qualification": "Graduate",
        "ctc": "₹27,500/month"
      },
      {
        "title": "Data Entry Operators",
        "description": "Prepare Excel data for incoming/outgoing inventory and create MIS reports using advanced Excel functions.",
        "availableJobs": 15,
        "location": "Nashik",
        "industryType": "Logistics Data & MIS",
        "qualification": "Graduate (Advanced Excel Required)",
        "ctc": "₹22,900/month"
      },
      {
        "title": "HR Executives",
        "description": "Manage labor law compliances, attendance, onboarding, and manpower coordination within logistics sites.",
        "availableJobs": 3,
        "location": "Nashik",
        "industryType": "Human Resources - Logistics Operations",
        "qualification": "Graduate",
        "ctc": "₹22,500 - ₹28,000/month"
      },
      {
        "title": "Supervisors",
        "description": "Supervise daily warehouse/plant logistics operations and manpower, ensuring timely reporting and MIS.",
        "availableJobs": 5,
        "location": "Nashik / Haridwar",
        "industryType": "Warehouse/Plant Operations",
        "qualification": "Graduate",
        "ctc": "₹20,125 - ₹22,900/month"
      },
      {
        "title": "Unskilled Associates",
        "description": "Support production lines with material handling and feeding tasks ensuring continuous flow of materials.",
        "availableJobs": 40,
        "location": "Sidcul, Haridwar",
        "industryType": "Material Handling & Line Feeding",
        "qualification": "10th Pass",
        "ctc": "₹14,500/month"
      },
      {
        "title": "4-Wheeler Drivers",
        "description": "Drive cars from plant to stockyard; verify delivery documents and maintain vehicle records.",
        "availableJobs": 80,
        "location": "Sidcul, Haridwar",
        "industryType": "Transportation",
        "qualification": "10th Pass with 4-Wheeler License",
        "ctc": "₹18,700/month"
      },
      {
        "title": "Facility Managers",
        "description": "Oversee maintenance and operations of warehouses or commercial facilities ensuring compliance and vendor coordination.",
        "availableJobs": 4,
        "location": "Pune / Mumbai",
        "industryType": "Facility Management",
        "qualification": "Graduate with 2–3 years experience",
        "ctc": "₹35,000 - ₹55,000/month"
      },
      {
        "title": "Accounts Executive",
        "description": "Manage customer billing, GST invoicing, and vendor invoice verification using Excel and SAP.",
        "availableJobs": 8,
        "location": "Mumbai",
        "industryType": "Accounting & Invoicing (Logistics)",
        "qualification": "Graduate with Excel/SAP knowledge",
        "ctc": "₹22,500 - ₹28,000/month"
      }
    ]
  },
  // Add more logistics companies here...
];


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
  
 
 {
  name: "SBOSS",
  logo: "/assets/banking/sboss.jpeg",
  description: "SBOSS is hiring dynamic Feet-on-Street (FOS) executives for field sales and customer acquisition across North Bengal.",
  jobOpenings: 50,
  location: "Siliguri, Darjeeling, Kalimpong, Cooch Behar, Alipurduar, Jalpaiguri, South and North Dinajpur",
  industry: "Field Sales / FOS",
  jobs: [
    {
      title: "Feet-on-Street Executive (FOS)",
      description: "Responsible for on-ground sales, lead generation, and customer onboarding activities. Ideal for candidates passionate about field marketing and client interaction.",
      availableJobs: 50,
      location: "Multiple Districts across North Bengal",
      industryType: "Field Sales / Marketing"
    }
  ],
  qualification: "10th / 12th Pass or Graduate",
  salary: "As per company norms + Incentives",
  benefits: "Travel Allowance + Incentives + Performance Bonus"
},

 
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
  
  // 💰 TVS Collections Siliguri
{
  "name": "TVS Collections Siliguri",
  "logo": null,
  "description": "TVS Collections Siliguri provides finance and debt collection services, hiring across roles in collections, customer support, and operations.",
  "jobOpenings": 50,
  "location": "Siliguri",
  "industry": "Finance / Collections",
  "jobs": [
    {
      "title": "Collections Executive",
      "description": "Manage client accounts, follow up on outstanding payments, coordinate with customers to resolve dues, and maintain accurate records.",
      "eligibility": "Graduate or Diploma, good communication skills, customer-focused.",
      "skills": [
        "Customer communication",
        "Negotiation and persuasion",
        "Record keeping",
        "Teamwork",
        "Problem solving"
      ],
      "location": "Siliguri"
    },
    {
      "title": "Customer Support / Operations Associate",
      "description": "Assist clients with queries, support operational processes, maintain documentation, and ensure compliance with company policies.",
      "eligibility": "Graduate or Diploma, good organizational and communication skills.",
      "skills": [
        "Customer service orientation",
        "Documentation handling",
        "Teamwork",
        "Attention to detail",
        "Problem solving"
      ],
      "location": "Siliguri"
    }
  ],
  "qualification": "Graduate / Diploma in relevant field",
  "salary": "As per company standards",
  "benefits": "Professional development, performance incentives, work experience in finance sector"
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

 // 👟 BATA
{
  "name": "BATA",
  "logo": "/assets/manufacturing/bata.png",
  "description": "BATA, a leading footwear brand, is hiring for roles in fintech operations and retail management in Kolkata.",
  "jobOpenings": 50,
  "location": "Kolkata",
  "industry": "Fintech / Retail",
  "jobs": [
    {
      "title": "Retail Operations / Fintech Associate",
      "description": "Manage day-to-day retail operations, assist in financial transactions, maintain customer accounts, and ensure smooth operations.",
      "eligibility": "Graduate or Diploma in relevant field, good communication skills.",
      "skills": [
        "Customer service orientation",
        "Basic accounting/finance knowledge",
        "Teamwork",
        "Problem solving",
        "Attention to detail"
      ],
      "location": "Kolkata"
    }
  ],
  "qualification": "Graduate / Diploma in relevant field",
  "salary": "As per company standards",
  "benefits": "Employee discounts, professional development opportunities"
},
 
// 🏗️ Mangalam Cement Ltd.
{
  "name": "Mangalam Cement Ltd.",
  "logo": "/assets/manufacturing/mangalam.png", //
  "description": "Mangalam Cement Ltd., a leading cement manufacturing company under the B.K. Birla Group, is hiring Chartered Accountants and Diploma Apprentices for its Timber Plant at Nabarangpura, Odisha.",
  "jobOpenings": 60,
  "location": "Nabarangpura, Odisha",
  "industry": "Cement & Building Materials Manufacturing",
  "jobs": [
    {
      "title": "CA Fresher",
      "description": "Responsible for managing accounts, financial reporting, audits, and compliance during the training period. Exposure to plant accounting and cost control.",
      "availableJobs": 10,
      "qualification": "Chartered Accountant (Freshly Qualified)",
      "salary": "₹5,00,000 – ₹8,00,000 per annum during training period",
      "benefits": "Policy benefits applicable after regularization",
      "additionalInfo": "After successful completion of one year training, deserving candidates will be regularised with a CTC of ₹10 – ₹12 LPA + policy benefits."
    },
    {
      "title": "CA Experienced",
      "description": "Responsible for overseeing financial management, auditing, taxation, cost control, and MIS reporting. Candidates with prior experience in manufacturing or plant finance preferred.",
      "availableJobs": 5,
      "qualification": "CA with relevant experience",
      "salary": "As per industry standards (based on interview and selection)",
      "benefits": "Policy benefits and performance-based incentives"
    },
    {
      "title": "Diploma Apprentice (Mechanical / Electrical / Instrumentation / Electronics & Communication)",
      "description": "Assist in maintenance, operations, and production support at the Timber Plant. Perform hands-on learning under supervision and support technical teams.",
      "availableJobs": 45,
      "qualification": "Diploma in Mechanical, Electrical, Instrumentation, or Electronics & Communication Engineering",
      "salary": "₹10,900 per month (Stipend)",
      "benefits": "Free shared accommodation + subsidised food",
      "additionalInfo": "After successful completion of one-year Apprenticeship, deserving candidates will be offered regular jobs with CTC as per industry standards."
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
  ];

const aviationCompanies = [
  // ✈️ IndiGo Airlines
{
  "name": "IndiGo Airlines",
  "logo": "/assets/aviation/indigo.png",
  "description": "IndiGo Airlines is recruiting for Ground Operations roles across India. Candidates must complete the pre-assessment before HR interaction.",
  "jobOpenings": null,
  "location": "Pan India",
  "industry": "Aviation / Ground Operations",
  "jobs": [
    {
      "title": "Officer (T) – AO&CS (Terminal Service)",
      "description": "Carry out safe and secure operations in accordance with the ground operations manual. Responsibilities include reservations and ticketing, handling departures and arrivals, assisting customers with special requests, coordinating baggage operations, and maintaining post-flight documentation.",
      "eligibility": "Graduate (any discipline), valid passport, no visible tattoos, flexible for rotational shifts including night shifts.",
      "skills": [
        "Good communication skills",
        "Customer-oriented",
        "Teamwork",
        "Ability to work under pressure",
        "Safety awareness"
      ],
      "location": "Pan India",
      "applicationLink": "https://unstop.com/jobs/aocs-online-hiring-drive-pan-india-2-aocs-online-hiring-drive-pan-india-indigo-1534403"
    },
    {
      "title": "Officer (T) – AO&CS (Security)",
      "description": "Maintain company security standards, perform threat assessment, optimize resources, monitor quality system, enforce emergency response procedures, prevent theft and pilferage, and carry out team development dialogues.",
      "eligibility": "Graduate (any discipline), valid passport, no visible tattoos, flexible for rotational shifts including night shifts.",
      "skills": [
        "Good communication skills",
        "Customer-oriented",
        "Teamwork",
        "Ability to work under pressure",
        "Safety awareness"
      ],
      "location": "Pan India",
      "applicationLink": "https://unstop.com/jobs/aocs-online-hiring-drive-pan-india-2-aocs-online-hiring-drive-pan-india-indigo-1534403"
    },
    {
      "title": "Officer (T) – AO&CS (Ramp)",
      "description": "Handle ramp operations including flight ETA confirmation, bay coordination, passenger boarding and deplaning, baggage handling, cleaning, loading as per instructions, and ensure on-time and safe flight operations.",
      "eligibility": "Graduate (any discipline), valid passport, no visible tattoos, flexible for rotational shifts including night shifts.",
      "skills": [
        "Good communication skills",
        "Customer-oriented",
        "Teamwork",
        "Ability to work under pressure",
        "Safety awareness"
      ],
      "location": "Pan India",
      "applicationLink": "https://unstop.com/jobs/aocs-online-hiring-drive-pan-india-2-aocs-online-hiring-drive-pan-india-indigo-1534403"
    }
  ],
  "qualification": "Any Graduation",
  "training": "Candidates will be appointed as Trainee for 3 months. Successful completion leads to confirmation as Officer – AO&CS.",
  "equalOpportunity": "All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability or veteran status."
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
  "logo": "/assets/manufacturing/mahin.png",
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
  
  // 🏨 TAJ/Vivanta Group
{
  "name": "TAJ/Vivanta Group",
  "logo": "/assets/health-and-tour/taj.png",
  "description": "Luxury hospitality group hiring for apprentices and DIWA across Food & Beverage Service, Housekeeping, Food Production, and Front Office roles in major cities.",
  "jobOpenings": 58,
  "location": "Major Cities",
  "industry": "Hospitality",
  "jobs": [
    {
      "title": "Apprentice - Food & Beverage Service",
      "description": "Assist in serving guests, maintain hygiene and presentation standards, and learn service protocols under supervision.",
      "eligibility": "Hotel Management Diploma / BSc in HM",
      "experience": "0-2 Years",
      "stipend": "As per government norms",
      "skills": ["Customer service", "Teamwork", "Attention to detail"],
      "interviewMethod": "Virtual"
    },
    {
      "title": "Apprentice - Housekeeping",
      "description": "Support housekeeping operations, maintain cleanliness and hygiene in guest areas and rooms, and assist supervisors in daily tasks.",
      "eligibility": "Hotel Management Diploma / BSc in HM",
      "experience": "0-2 Years",
      "stipend": "As per government norms",
      "skills": ["Attention to detail", "Time management", "Teamwork"],
      "interviewMethod": "Virtual"
    },
    {
      "title": "Apprentice - Food Production",
      "description": "Assist in kitchen operations, food preparation, and maintaining hygiene standards.",
      "eligibility": "Hotel Management Diploma / BSc in HM",
      "experience": "0-2 Years",
      "stipend": "As per government norms",
      "skills": ["Basic culinary skills", "Hygiene practices", "Teamwork"],
      "interviewMethod": "Virtual"
    },
    {
      "title": "Apprentice - Front Office",
      "description": "Assist front office operations, interact with guests professionally, and learn check-in/check-out procedures under supervision.",
      "eligibility": "Hotel Management Diploma / BSc in HM",
      "experience": "0-2 Years",
      "stipend": "As per government norms",
      "skills": ["Communication", "Customer service", "Teamwork"],
      "interviewMethod": "Virtual"
    },
    {
      "title": "DIWA - Housekeeping / F&B Service",
      "description": "Trained on-the-job in specific departments to support operational activities under guidance of senior staff.",
      "eligibility": "Hotel Management Diploma / BSc in HM",
      "experience": "0-2 Years",
      "stipend": "As per government norms",
      "skills": ["Department-specific skills", "Teamwork", "Professionalism"],
      "interviewMethod": "Virtual"
    }
  ],
  "qualification": "Hotel Management Diploma / BSc in HM",
  "salary": "As per government norms / industry standard",
  "benefits": "Accommodation as per availability, on-the-job training"
},


 {
  name: "Sanook Kitchen",
  logo: "/assets/retail/snook.png",
  description: "Sanook Kitchen, a popular Asian casual dining restaurant chain, is hiring for service and kitchen roles across major cities.",
  jobOpenings: 10,
  location: "Major Cities",
  industry: "F&B / Hospitality",
  jobs: [
    {
      title: "Service Associate / Steward",
      description: "Provide excellent customer service, take orders, and ensure a pleasant dining experience for guests.",
      availableJobs: 4,
      location: "Major Cities",
      industryType: "F&B Service"
    },
    {
      title: "Commis / Cook",
      description: "Assist in food preparation, maintain kitchen hygiene, and ensure food is prepared as per standards.",
      availableJobs: 4,
      location: "Major Cities",
      industryType: "F&B Production"
    },
    {
      title: "Restaurant Supervisor",
      description: "Oversee daily restaurant operations, manage staff schedules, and ensure service quality and hygiene compliance.",
      availableJobs: 2,
      location: "Major Cities",
      industryType: "F&B Management"
    }
  ],
  qualification: "10th / 12th Pass or Diploma in Hotel Management / Culinary Arts",
  salary: "As per industry standards",
  benefits: "Meals & Uniform Provided"
},

 {
  name: "Sri Ganesh Grand",
  logo: "/assets/health-and-tour/sriganesh.jpg",
  description: "Sri Ganesh Grand, a well-known FMCG distributor and retail chain, is hiring for multiple roles across Kolkata.",
  jobOpenings: 50,
  location: "Kolkata",
  industry: "FMCG",
  jobs: [
    {
      title: "Sales Executive",
      description: "Handle customer relationships, manage retail sales, and ensure product availability in stores.",
      availableJobs: 20,
      location: "Kolkata",
      industryType: "FMCG Sales"
    },
    {
      title: "Store Assistant",
      description: "Assist in daily store operations, manage inventory, and maintain product displays.",
      availableJobs: 20,
      location: "Kolkata",
      industryType: "Retail Operations"
    },
    {
      title: "Delivery Staff",
      description: "Responsible for delivering FMCG products across assigned routes ensuring timely service.",
      availableJobs: 10,
      location: "Kolkata",
      industryType: "Logistics"
    }
  ],
  qualification: "10th / 12th Pass preferred",
  salary: "As per company norms",
  benefits: "Incentives + Allowances"
},


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
  
  {
  name: "Sumi Yashshree",
  logo: "/assets/health-and-tour/yumi.png",
  description: "Hospitality and lodging services hiring for service, housekeeping, and F&B roles across tourist destinations.",
  jobOpenings: 20,
  location: "Tourist Destinations",
  industry: "Hospitality",
  jobId: "d64ca8c7-020c-4514-9fb6-c787220a3234",
  jobs: [
    {
      title: "Housekeeping / F&B / Front Office Staff",
      description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
      availableJobs: 20,
      location: "Tourist Destinations",
      industryType: "Hospitality Service",
      salary: "As per Minimum Wages of respective state"
    }
  ]
},

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
  
  // 🏨 Apollo Sindoori Hotels Ltd.
{
  "name": "Apollo Sindoori Hotels Ltd.",
  "logo": "/assets/health-and-tour/apollo-sindoori.png",
  "description": "Apollo Sindoori Hotels Ltd. provides hospitality and catering services across multiple tourist destinations, hiring for culinary, housekeeping, and service roles.",
  "jobOpenings": 85,
  "location": "Tourist Destinations",
  "industry": "Hospitality and Catering",
  "jobs": [
    {
      "title": "Waiter",
      "description": "Maintain personal hygiene and professional grooming, organize and deliver meals accurately and on time, ensure service clearance, and adhere to safety standards.",
      "eligibility": "10th / 12th / Graduate / Diploma in Hotel Management & Catering Technology",
      "skills": [
        "Customer service",
        "Teamwork",
        "Time management",
        "Attention to detail"
      ],
      "location": "Tourist Destinations"
    },
    {
      "title": "Cook",
      "description": "Prepare and cook food as per menu, maintain kitchen hygiene, ensure food safety, assist in menu planning, and support the kitchen team.",
      "eligibility": "Graduate / Diploma in Hotel Management & Catering Technology",
      "skills": [
        "Culinary skills",
        "Food safety and hygiene",
        "Teamwork",
        "Time management"
      ],
      "location": "Tourist Destinations"
    },
    {
      "title": "Assistant Cook",
      "description": "Assist the cook in food preparation, cutting, and cleaning; maintain kitchen hygiene and ensure ingredients are fresh and ready.",
      "eligibility": "10th / 12th",
      "skills": [
        "Basic culinary skills",
        "Kitchen hygiene",
        "Teamwork",
        "Attention to detail"
      ],
      "location": "Tourist Destinations"
    },
    {
      "title": "Utility Staff",
      "description": "Maintain hygiene and cleanliness in the kitchen, clean utensils and equipment, handle dishwashing safely, and assist in daily kitchen tasks.",
      "eligibility": "No qualification required",
      "skills": [
        "Cleaning and sanitation",
        "Teamwork",
        "Attention to detail"
      ],
      "location": "Tourist Destinations"
    }
  ],
  "qualification": "Varies by role",
  "salary": "₹14,000 - ₹17,000",
  "benefits": "Meals & Uniform Provided"
},


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
  // 🏥 Apollo Hospitals
{
  "name": "Apollo Hospitals",
  "logo": "/assets/health-and-tour/apollo.png",
  "description": "Apollo Hospitals is a leading healthcare service provider in India, hiring for roles across nursing, homecare, pharmacy, and hospital operations.",
  "jobOpenings": 796,
  "location": "Pan India",
  "industry": "Healthcare Services",
  "jobs": [
    {
      "title": "Homecare Nurse",
      "description": "Deliver high-quality professional nursing care in line with Apollo Homecare’s clinical standards, maintain patient safety, follow best nursing practices, and ensure compliance with protocols.",
      "eligibility": "Nursing qualification (GNM / BSc Nursing), 0-10 years experience",
      "skills": [
        "Patient care",
        "Medical knowledge",
        "Teamwork",
        "Communication skills",
        "Attention to detail"
      ],
      "location": "Pan India"
    },
    {
      "title": "Call Centre Executive",
      "description": "Communicate with customers professionally, integrate with hospital departments, and ensure courteous and cooperative service.",
      "eligibility": "Graduate / Diploma, 0-5 years experience",
      "skills": [
        "Customer service",
        "Communication",
        "Problem solving",
        "Teamwork"
      ],
      "location": "Pan India"
    },
    {
      "title": "Patient Relationship Executive",
      "description": "Generate leads, maintain discharge patient database, coordinate with hospitals, and convert leads through in-person follow-ups.",
      "eligibility": "Graduate / Diploma, 0-5 years experience",
      "skills": [
        "Customer relationship management",
        "Communication",
        "Data management",
        "Teamwork"
      ],
      "location": "Pan India"
    },
    {
      "title": "Pharmacist",
      "description": "Dispense medications accurately, ensure prescription compliance, counsel patients, and maintain stock and regulatory records.",
      "eligibility": "BPharm / DPharm, 0-5 years experience",
      "skills": [
        "Pharmacy knowledge",
        "Customer service",
        "Attention to detail",
        "Record keeping"
      ],
      "location": "Pan India"
    },
    {
      "title": "Assistant Nursing Supervisor",
      "description": "Supervise nursing staff, ensure quality patient care, manage shift schedules, and maintain compliance with hospital protocols.",
      "eligibility": "Nursing qualification, 5+ years experience",
      "skills": [
        "Leadership",
        "Nursing care",
        "Team management",
        "Problem solving"
      ],
      "location": "Pan India"
    }
  ],
  "qualification": "Varies by role",
  "salary": "₹9,000 - ₹50,000 depending on role and experience",
  "benefits": "Health insurance, professional development, performance incentives"
},

];

const itCompanies = [
// 🏢 Eventity Global Solution (P) Ltd.
  {
  "name": "Eventity Global Solution (P) Ltd.",
  "logo": "/assets/IT/eventity.jpg",
  "description": "ISO/IEC 27001:2002 certified IT & ITeS company delivering BPM, KPM, and outsourcing solutions across industries, with service delivery centers in Siliguri catering to clients in India, the UK, and the USA.",
  "jobOpenings": 150,
  "location": "Siliguri, West Bengal",
  "jobId": "eventity-global-2025",
  "industry": "IT & Business Services",
  "jobs": [
    {
      "title": "Customer Support Executive (Voice/Chat)",
      "description": "Handle inbound and outbound calls, live chat, and email support for domestic and international clients ensuring high customer satisfaction.",
      "availableJobs": 40,
      "location": "Siliguri - Webel IT Park",
      "industryType": "BPM / Customer Support",
      "qualification": "Graduate / 12th Pass (Good English Communication)",
      "ctc": "₹15,000 - ₹22,000/month"
    },
    {
      "title": "Technical Support Associate",
      "description": "Provide remote technical support for clients’ IT products and services, troubleshoot issues, and escalate complex cases.",
      "availableJobs": 25,
      "location": "Siliguri - Webel IT Park",
      "industryType": "Technical Support / IT Helpdesk",
      "qualification": "Graduate (Computer / IT Background Preferred)",
      "ctc": "₹18,000 - ₹25,000/month"
    },
    {
      "title": "Back Office Executive (Data Processing)",
      "description": "Perform document management, record summarization, and backend operations for healthcare, insurance, and legal clients.",
      "availableJobs": 30,
      "location": "Siliguri",
      "industryType": "KPO / Data Processing",
      "qualification": "Graduate (Knowledge of MS Office & English Writing)",
      "ctc": "₹16,000 - ₹20,000/month"
    },
    {
      "title": "SEO & Digital Marketing Analyst",
      "description": "Work on SEO, digital content, and online marketing campaigns to improve client visibility and lead generation.",
      "availableJobs": 10,
      "location": "Siliguri - Webel IT Park",
      "industryType": "Digital Marketing / SEO",
      "qualification": "Graduate (Marketing or IT Background Preferred)",
      "ctc": "₹20,000 - ₹28,000/month"
    },
    {
      "title": "Accounts Executive (Finance Process)",
      "description": "Assist clients in accounting, bookkeeping, taxation, and financial data management processes.",
      "availableJobs": 10,
      "location": "Siliguri",
      "industryType": "Finance & Accounting (BPM)",
      "qualification": "B.Com / M.Com / BBA (Finance)",
      "ctc": "₹18,000 - ₹25,000/month"
    },
    {
      "title": "Process Trainer",
      "description": "Conduct training sessions for new hires in BPM/KPO processes, communication, and compliance as per project requirements.",
      "availableJobs": 5,
      "location": "Siliguri - Webel IT Park",
      "industryType": "Training & Quality Management",
      "qualification": "Graduate with 2–3 years experience in BPO Training",
      "ctc": "₹25,000 - ₹32,000/month"
    }
  ]
},

// 🏢 WNS Limited
{
  "name": "WNS Limited",
  "logo": "/assets/IT/wns.png",
  "description": "WNS Limited (NYSE: WNS) is a digital-led business transformation company serving 700+ clients across 10 industries. With AI-driven platforms and analytics, it helps enterprises innovate, scale, and adapt. The company operates in 13 countries with 65 centers and 66,000+ professionals worldwide.",
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

 {
  name: "Piston Technologies",
  logo: "/assets/IT/piston.png",
  description: "Piston Technologies is a Fintech and IT solutions company based in Kolkata, providing AI-driven and full-stack development services for global clients.",
  jobOpenings: 6,
  location: "Kolkata",
  industry: "IT / Fintech",
  jobId: "piston-technologies-90234",
  jobs: [
    {
      title: "AI Engineer",
      eligibility: "6 months + of relevant experience",
      education: "B.Tech or Diploma in Computer Science",
      location: "Kolkata (No Relocation benefit)",
      salary: "₹22,000 - ₹24,000 (not a constraint for an exceptionally good candidate)",
      benefits: [
        "Working for Fintech SF (USA) Product",
        "Visit to USA",
        "Health Insurance",
        "Provident Fund (PF)"
      ],
      mandatoryRequirements: "Good knowledge in Python, Big Data, and ML Architecture",
      shift: "10 AM to 7 PM (Saturday and Sunday off)",
      availableJobs: 2,
      industryType: "AI / Machine Learning"
    },
    {
      title: "Frontend Developer",
      eligibility: "6 months + of relevant experience",
      education: "B.Tech or Diploma in Computer Science",
      location: "Kolkata (No Relocation benefit)",
      salary: "₹22,000 - ₹24,000 (not a constraint for an exceptionally good candidate)",
      benefits: [
        "Working for Fintech SF (USA) Product",
        "Visit to USA",
        "Health Insurance",
        "Provident Fund (PF)"
      ],
      mandatoryRequirements: "Good knowledge in React.js",
      shift: "10 AM to 7 PM (Saturday and Sunday off)",
      availableJobs: 2,
      industryType: "Frontend Development"
    },
    {
      title: "Backend Developer",
      eligibility: "6 months + of relevant experience",
      education: "B.Tech or Diploma in Computer Science",
      location: "Kolkata (No Relocation benefit)",
      salary: "₹22,000 - ₹24,000 (not a constraint for an exceptionally good candidate)",
      benefits: [
        "Working for Fintech SF (USA) Product",
        "Visit to USA",
        "Health Insurance",
        "Provident Fund (PF)"
      ],
      mandatoryRequirements: "Good knowledge in Node.js, Express.js, and PostgreSQL",
      shift: "10 AM to 7 PM (Saturday and Sunday off)",
      availableJobs: 2,
      industryType: "Backend Development"
    }
  ]
},


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
];

const devyaniCompanies = [
  {
    name: "KFC",
    logo: "/assets/retail/kfc.png",
    description: "Quick service restaurant chain hiring for culinary and service roles across India.",
    jobOpenings: 200,
    location: "Pan India",
    industry: "F&B / Hospitality",
    jobId: "kfc-11235",
    jobs: [
      {
        title: "Crew / Trainee",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 200,
        location: "Pan India",
        industryType: "F&B Service",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  },
  {
    name: "Costa Coffee",
    logo: "/assets/retail/costa.png",
    description: "Coffee chain hiring for barista and service roles across metro cities.",
    jobOpenings: 30,
    location: "Metro Cities",
    industry: "F&B / Hospitality",
    jobId: "costa-coffee-76890",
    jobs: [
      {
        title: "Barista / Crew",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 30,
        location: "Metro Cities",
        industryType: "F&B Service",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  },
  {
    name: "Vaango",
    logo: "/assets/retail/vaango.png",
    description: "South Indian restaurant chain hiring for service and kitchen roles across metro cities.",
    jobOpenings: 40,
    location: "Metro Cities",
    industry: "F&B / Hospitality",
    jobId: "vaango-98765",
    jobs: [
      {
        title: "Crew / Captains",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 40,
        location: "Metro Cities",
        industryType: "F&B Service",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  },
  {
    name: "Airport Food Courts",
    logo: "/assets/retail/food-court.jpg",
    description: "Hiring for airport dining and service roles at various airport locations.",
    jobOpenings: 50,
    location: "Airports",
    industry: "F&B / Hospitality",
    jobId: "airport-food-courts-11222",
    jobs: [
      {
        title: "Crew / Service Staff",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 50,
        location: "Airports",
        industryType: "F&B Service",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  },
  {
    name: "Food Courts",
    logo: "/assets/retail/food-court.jpg",
    description: "Hiring for multi-brand dining outlets across major cities.",
    jobOpenings: 50,
    location: "Major Cities",
    industry: "F&B / Hospitality",
    jobId: "food-courts-33444",
    jobs: [
      {
        title: "Crew / Service Staff",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 50,
        location: "Major Cities",
        industryType: "F&B Service",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  },
  {
    name: "Biriyani by Kilo",
    logo: "/assets/retail/Biryani.png",
    description: "Hiring across culinary, service, and housekeeping roles in metro cities.",
    jobOpenings: 50,
    location: "Metro Cities",
    industry: "F&B / Hospitality",
    jobId: "biriyani-by-kilo-55677",
    jobs: [
      {
        title: "Restaurant Manager / Asst Restaurant Manager / Captains / Trainee Captains / Stewards / CDP / Commi / Briyani Master / Housekeeping Staff",
        description: "Customer Interaction & Brand Representation\nFood Preparation & Service\nMaintaining Food Quality\nCleanliness & Hygiene\nCash Handling & Billing\nTeam Work",
        availableJobs: 50,
        location: "Metro Cities",
        industryType: "F&B Service & Production / Housekeeping",
        salary: "As per Minimum Wages of respective state"
      }
    ]
  }
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
      <EventPopup />
      <Hero />
      <ScrollingEmployers />
      <CompanySection title="Automobile & Manufacturing" companies={automobileCompanies} />
      <CompanySection title="Logistics & Supply Chain" companies={logisticsCompanies} />
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
