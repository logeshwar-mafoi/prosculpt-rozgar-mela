import { useState } from "react";

const faqs = [
  {
    question: "1. What is Rozgar Mela 2025?",
    answer: `Rozgar Mela 2025 is a large-scale employment and skill development initiative inspired by the 
Pradhan Mantri Viksit Bharat Rozgar Yojana (PM-VBRY) under the visionary leadership of Hon’ble 
Prime Minister Shri Narendra Modi ji. It aims to connect job seekers with leading employers, 
create meaningful employment opportunities, and empower youth to contribute to the vision of a Viksit Bharat (Developed India).`,
  },
  {
    question: "2. When and where will it take place?",
    answer: `Dates: 15th & 16th November 2025
Venue: Salesian College, Ward 42, Don Bosco Colony, Siliguri – 734004, West Bengal`,
  },
  {
    question: "3. Who is organizing Rozgar Mela 2025?",
    answer: `The event is organized by the Darjeeling Welfare Society (DWS) under the leadership of Shri Harsh 
Vardhan Shringla, Hon’ble Member of Parliament (Rajya Sabha) and Founder-President of DWS.`,
  },
  {
    question: "4. What is the main objective of the event?",
    answer: `The Mela aims to:
• Provide job opportunities to youth from North Bengal and the Northeast.
• Facilitate skill development and training for employability.
• Bridge the gap between job seekers and employers.
• Support the Prime Minister’s vision of Atmanirbhar Bharat through self-reliance and empowerment.`,
  },
  {
    question: "5. Who can participate in Rozgar Mela 2025?",
    answer: `• Students, graduates, diploma holders, and skilled youth looking for jobs.
• While the Rozgar Mela is focused on candidates from North Bengal, candidates from other parts of the country are also eligible to apply.
• Freshers and experienced candidates seeking better career opportunities.`,
  },
  {
    question: "6. How many companies are expected to participate?",
    answer: `More than 43 leading companies from across India will participate, representing various sectors.`,
  },
  {
    question: "7. Which sectors are offering jobs?",
    answer: `• Hospitality & Tourism
• Information Technology (IT)
• Banking & Finance
• Insurance
• Retail
• Healthcare & Nursing
• Manufacturing & MSME
• Education, Logistics & Aviation`,
  },
  {
    question: "8. How many job openings are available?",
    answer: `Over 7,444 job openings are being offered across multiple categories and levels. A separate form has to be filled for each post being applied for.`,
  },
  {
    question: "9. How can I register for Rozgar Mela 2025?",
    answer: `You can register by:
• Scanning the QR code on the official Rozgar Mela poster, or
• Visiting the official website of the Darjeeling Welfare Society (DWS): https://darjeelingwelfaresociety.com/
On-the-spot registration will also be available at the venue.
✅ Can one apply for more than one post? – Yes.`,
  },
  {
    question: "10. Is there any registration fee?",
    answer: `No. Participation is completely free of cost. There are NO charges.`,
  },
  {
    question: "11. What documents should I bring?",
    answer: `• Updated Resume (3–5 copies)
• Passport-size photographs
• Educational certificates (originals and photocopies)
• Valid photo ID (Aadhaar, Voter ID, PAN, etc.)
• Experience certificates (if any)`,
  },
  {
    question: "12. What is the selection process?",
    answer: `• Applications will be received and screened by CIEL HR Services (Technical Partner).
• Eligible candidates will be called for interviews with participating companies.
• Final selections will be made at the venue, and appointment/offer letters will be handed over on 16th November evening.`,
  },
  {
    question: "13. Who are the partners in this initiative?",
    answer: `• Tourism & Hospitality Skill Council (THSC) – Knowledge Partner
• CIEL HR Services – Technical Partner
• Salesian College, Siliguri – Venue & Academic Partner`,
  },
  {
    question: "14. Will there be any counselling or guidance sessions?",
    answer: `Yes. Expert-led career counselling, skill orientation, and motivational sessions will help candidates 
prepare for interviews and career pathways.`,
  },
  {
    question: "15. What are the event timings?",
    answer: `• 15th November: Inaugural session and first round of interviews – from 10:00 AM onwards
• 16th November: Final interviews and appointment letter ceremony – from 10:00 AM onwards`,
  },
  {
    question: "16. Who are the dignitaries attending the event?",
    answer: `• The event will be inaugurated by the Hon’ble Minister of State for Labour & Employment and Minister of State for MSMEs.
• The Hon’ble Governor of West Bengal has kindly consented to preside over the valedictory function and hand over appointment letters on 16th November evening.`,
  },
  {
    question: "17. Will there be facilities at the venue?",
    answer: `Yes. The venue will have:
• Registration and information helpdesks
• Career guidance counters
• Drinking water facilities
• First aid and medical assistance`,
  },
  {
    question: "18. Will accommodation be provided for participants?",
    answer: `No. Participants must make their own arrangements.`,
  },
  {
    question: "19. Can students who have not yet graduated participate?",
    answer: `Yes. Final-year students seeking early exposure or internships are welcome to participate. Jobs are available for different academic and skill levels, including non-graduates.`,
  },
  {
    question: "20. What are the benefits of attending Rozgar Mela 2025?",
    answer: `• Access to thousands of job opportunities under one roof
• Interaction with leading recruiters and HR professionals
• Opportunity for on-the-spot selection
• Career guidance and networking opportunities`,
  },
  {
    question: "21. Will appointment letters be given on the spot?",
    answer: `Yes. Selected candidates will receive appointment or offer letters on 16th November evening during the valedictory session.`,
  },
  {
    question: "22. Will there be information on training or skill development?",
    answer: `Yes. Dedicated stalls and experts will share details on government-recognized training programmes, sectoral courses, and entrepreneurship support schemes.`,
  },
  {
    question: "23. How will I know if I’m shortlisted for an interview?",
    answer: `Candidates will be informed via email, SMS, or at the registration desk about interview schedules and company details.`,
  },
  {
    question: "24. What should I wear for the Rozgar Mela?",
    answer: `Participants should dress formally and neatly, as they will meet company representatives and HR professionals.`,
  },
  {
    question: "25. Can I bring a friend or family member?",
    answer: `Yes, but only registered candidates can enter interview and counselling zones. Companions may wait in designated public areas.`,
  },
  {
    question: "26. What precautions are being taken for smooth conduct?",
    answer: `Adequate arrangements for application management, medical support, and coordination with local authorities have been made to ensure smooth operations.`,
  },
  {
    question: "27. How can I stay informed about future Rozgar Melas or related programmes?",
    answer: `Follow the Darjeeling Welfare Society (DWS) on social media and visit the official website for updates on upcoming fairs, workshops, and community initiatives.`,
  },
  {
    question: "28. Can I apply for more than one job?",
    answer: `Yes. Candidates may apply for multiple sectors or positions as per their qualifications and skills. 
👉 For each job applied, a separate registration and application is required.
✅ Last Date to Apply: 31st October 2025
✅ Download Employer List: https://darjeelingwelfaresociety.com`,
  },
];

const FloatingFAQ = () => {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-16 sm:bottom-6 right-4 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        FAQ
      </button>

      {/* Floating Panel */}
      {open && (
        <div className="fixed bottom-16 right-6 w-80 max-h-[70vh] overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-3">FAQs</h3>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left py-2 font-medium flex justify-between items-center"
                  >
                    {faq.question}
                    <span>{openIndex === idx ? "-" : "+"}</span>
                  </button>
                  {openIndex === idx && (
                    <p className="text-sm text-gray-700 py-2 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingFAQ;
