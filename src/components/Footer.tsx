import { Linkedin, Instagram } from "lucide-react";
import prosculptLogo from "/assets/prosculpt-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Powered By */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-4">
              Powered by
            </p>
            <div className="flex items-center gap-3">
              <img
                src={prosculptLogo}
                alt="ProSculpt"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-[hsl(var(--card-accent))]">
              Follow Us
            </h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/prosculpt_mafoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/prosculpt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
            <p className="text-xs text-white/60 mt-4 md:mt-6 text-center md:text-right">
              Stay updated with the latest news and opportunities
            </p>
          </div>
        </div>

        {/* Registration Link */}
        <div className="flex justify-center mb-8 md:mb-12 animate-fade-in">
          <a
            href="https://forms.gle/sV2m59xDabsVEC4v5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-semibold text-white underline hover:text-[hsl(var(--accent))] transition-all"
          >
            Click here to register for Helevate
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center text-xs md:text-sm text-white/60">
          <p>&copy; 2025 Prosculpt.co. All rights reserved.</p>
          <p className="mt-2">Rozgar Mela 2.0 - Building Futures Together</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
