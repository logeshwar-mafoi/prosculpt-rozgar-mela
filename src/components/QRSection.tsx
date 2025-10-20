import { QrCode, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const QRSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] text-white">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden border-2 md:border-4 border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
            {/* QR Code */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--card-accent))] rounded-xl flex items-center justify-center">
                  <QrCode className="w-36 h-36 md:w-48 md:h-48 text-white" />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Register for the Event
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm md:text-base">
                    1
                  </div>
                  <p className="text-sm md:text-base lg:text-lg">Scan the QR code with your mobile device</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm md:text-base">
                    2
                  </div>
                  <p className="text-sm md:text-base lg:text-lg">Fill in your details in the registration form</p>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm md:text-base">
                    3
                  </div>
                  <p className="text-sm md:text-base lg:text-lg">Receive your confirmation email with event details</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-[hsl(var(--card-accent))] font-semibold text-sm md:text-base">
                <span>Don't have a QR scanner?</span>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="underline cursor-pointer hover:text-white transition-colors">
                    Click here to register
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QRSection;
