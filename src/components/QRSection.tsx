import { QrCode, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const QRSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] text-white">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden border-4 border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* QR Code */}
            <div className="flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--card-accent))] rounded-xl flex items-center justify-center">
                  <QrCode className="w-48 h-48 text-white" />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Register for the Event
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-lg">Scan the QR code with your mobile device</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-lg">Fill in your details in the registration form</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-lg">Receive your confirmation email with event details</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[hsl(var(--card-accent))] font-semibold">
                <span>Don't have a QR scanner?</span>
                <ArrowRight className="h-5 w-5" />
                <span className="underline cursor-pointer hover:text-white transition-colors">
                  Click here to register
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QRSection;
