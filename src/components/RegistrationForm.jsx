import { useState } from "react";
import { Button } from "@/components/ui/button";

const RegistrationForm = ({ companies }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    companies: [],
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompanySelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, companies: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("https://script.google.com/a/macros/mafoigroup.com/s/AKfycbwDySF7oFey94oD5O3AA1YaeQAKiPFfcCwzBxZskHSJjfcLpSVSaS0A-G0nW_Z05tpMQQ/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      if (result.result === "success") {
        setStatus("✅ Registered successfully! Check your email for confirmation.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          department: "",
          companies: [],
          message: "",
        });
      } else if (result.result === "duplicate") {
        setStatus("⚠️ You’ve already registered using this email or phone number.");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Failed to submit. Please try again.");
    }
  };

  return (
    <section className="bg-blue-50 py-12 px-4" id="register">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Rozgar Mela 2.0 Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="college" placeholder="College Name" required value={formData.college} onChange={handleChange} className="w-full p-3 border rounded-lg" />
          <input name="department" placeholder="Department / Course" required value={formData.department} onChange={handleChange} className="w-full p-3 border rounded-lg" />

          {/* ✅ Multi-select for companies */}
          <select
            name="companies"
            multiple
            required
            value={formData.companies}
            onChange={handleCompanySelect}
            className="w-full p-3 border rounded-lg h-40"
          >
            {companies.map((c) => (
              <option key={c.jobId} value={c.name}>{c.name}</option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="3"
          />

          <Button type="submit" className="w-full py-3 text-lg font-semibold bg-blue-700 hover:bg-blue-800 text-white">
            Submit Registration
          </Button>
        </form>

        {status && <p className="mt-4 text-center text-sm text-blue-600">{status}</p>}
      </div>
    </section>
  );
};

export default RegistrationForm;
