import { Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import prosculptLogo from "/assets/prosculpt-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Powered By */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-white/70 text-sm mt-4">
              Powered by
            </p>
            <div className="flex items-center gap-3">
              <img src={prosculptLogo} alt="ProSculpt" className="h-16 w-auto object-contain" />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start md:items-end justify-center">
            <h4 className="text-lg font-bold mb-4 text-[hsl(var(--card-accent))]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/prosculpt_mafoi/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/prosculpt/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-white/60 mt-6">
              Stay updated with the latest news and opportunities
            </p>
          </div>
        </div>
        {/* ✅ CTA Section */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf7RQuLo9-xxgxFn_6XD9F6E5KoDNoPN3OA2NbDFKcrUr0Fiw/viewform",
                "_blank"
              )
            }
            className="px-8 py-6 text-lg font-semibold bg-white text-[hsl(var(--primary))] hover:bg-white/90 hover:scale-105 transition-all shadow-2xl"
          >
            Register Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://www.prosculpt.co/", "_blank")
            }
            className="px-8 py-6 text-lg font-semibold bg-white/10 text-white border-2 border-white hover:bg-white hover:text-[hsl(var(--primary))] hover:scale-105 transition-all backdrop-blur-md shadow-2xl"
          >
            Sign Up
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 Prosculpt.co. All rights reserved.</p>
          <p className="mt-2">Rozgar Mela 2.0 - Building Futures Together</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
