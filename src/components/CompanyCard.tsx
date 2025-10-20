import { MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CompanyCardProps {
  name: string;
  logo?: string;
  description: string;
  jobOpenings: number;
  location: string;
}

const CompanyCard = ({ name, logo, description, jobOpenings, location }: CompanyCardProps) => {
  return (
    <Card className="group h-full overflow-hidden border-2 border-border hover:border-pacific transition-all duration-300 hover:shadow-xl hover:shadow-honolulu/20 hover:-translate-y-2 bg-card">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Logo */}
        {/* <div className="mb-4 flex items-center justify-center h-20">
          {logo ? (
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--card-accent))] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div> */}
        <div className="mb-4 flex items-center justify-center h-20">
          {logo && (
            <img 
              src={typeof logo === "string" ? logo : URL.createObjectURL(logo)} 
              alt={`${name} logo`} 
              className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>


        {/* Company Name */}
        <h3 className="text-xl font-bold text-card-foreground mb-3 text-center group-hover:text-[hsl(var(--accent))] transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow text-center leading-relaxed">
          {description}
        </p>

        {/* Info Row */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-honolulu">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">{jobOpenings} Openings</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
