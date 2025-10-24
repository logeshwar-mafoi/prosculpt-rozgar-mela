import { MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CompanyCardProps {
  name: string;
  logo?: string;
  description: string;
  jobOpenings: number | null;
  location: string;
  jobId?: string; // used for View JD link
}

// Utility to check if jobId is a real UUID
const isRealJobId = (jobId?: string) => {
  if (!jobId) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(jobId);
};

const CompanyCard = ({ name, logo, description, jobOpenings, location, jobId }: CompanyCardProps) => {
  return (
    <Card className="group h-full overflow-hidden border-2 border-border hover:border-pacific transition-all duration-300 hover:shadow-xl hover:shadow-honolulu/20 hover:-translate-y-2 bg-card">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 flex items-center justify-center h-20">
          {logo && (
            <img
              src={typeof logo === "string" ? logo : URL.createObjectURL(logo)}
              alt={`${name} logo`}
              className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>

        <h3 className="text-xl font-bold text-card-foreground mb-3 text-center group-hover:text-[hsl(var(--accent))] transition-colors">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-grow text-center leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-honolulu">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">
              {jobOpenings !== null ? `${jobOpenings} Openings` : "No Openings"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Show View JD button only for real UUID jobIds */}
        {isRealJobId(jobId) && (
          <div className="pt-4 flex justify-center">
            <a
              href={`https://app.prosculpt.co/student/job-campus-drives/job-detail/${jobId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center"
            >
              <button className="bg-pacific hover:bg-honolulu text-white py-2 px-6 rounded-lg font-semibold shadow-md transition-colors duration-300">
                View JD
              </button>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
