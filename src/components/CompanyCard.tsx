import { useState } from "react";
import { MapPin, Briefcase, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface JobDetail {
  title: string;
  jd: string;
  eligibility?: string;
  salary?: string;
  location?: string;
}

interface CompanyCardProps {
  name: string;
  logo?: string;
  description: string;
  jobOpenings: number | null;
  location: string;
  jobId?: string;
  applicationLink?: string;
  jobs?: JobDetail[]; // ✅ New field for multiple job roles
}

const isRealJobId = (jobId?: string) => {
  if (!jobId) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(jobId);
};

const CompanyCard = ({
  name,
  logo,
  description,
  jobOpenings,
  location,
  jobId,
  applicationLink,
  jobs = [],
}: CompanyCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Company Card */}
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
                {jobOpenings !== null ? `${jobOpenings} Openings` : "Open Roles"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Buttons */}
          {applicationLink ? (
            <div className="pt-4 flex flex-col items-center">
              <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Attend Pre-Assessment Test
                </Button>
              </a>
              <span className="text-xs text-muted-foreground mt-2 text-center">
                Complete this test before HR interaction
              </span>
            </div>
          ) : jobs.length > 0 ? (
            <div className="pt-4 flex flex-col items-center">
              <Button
                onClick={() => setOpen(true)}
                className="bg-pacific hover:bg-honolulu text-white w-full"
              >
                View
              </Button>
              <span className="text-xs text-muted-foreground mt-2 text-center">
                Click to view job descriptions
              </span>
            </div>
          ) : (
            isRealJobId(jobId) && (
              <div className="pt-4 flex flex-col items-center">
                <a
                  href={`https://app.prosculpt.co/student/job-campus-drives/job-detail/${jobId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center"
                >
                  <Button className="bg-pacific hover:bg-honolulu text-white w-full">
                    View
                  </Button>
                </a>
                <span className="text-xs text-muted-foreground mt-2 text-center">
                  Please login/signup to view the Job
                </span>
              </div>
            )
          )}
        </CardContent>
      </Card>

      {/* ✅ Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader className="flex flex-row justify-between items-center">
            <DialogTitle>{name} — Job Openings</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-muted-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogHeader>
          <DialogDescription>
            <p className="text-sm text-muted-foreground mb-4">
              Explore available roles and their descriptions below.
            </p>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 bg-muted/20 hover:bg-muted/30 transition-all"
                >
                  <h4 className="text-base font-semibold text-card-foreground">
                    {job.title}
                  </h4>
                  {job.location && (
                    <p className="text-sm text-muted-foreground mb-1">
                      📍 {job.location}
                    </p>
                  )}
                  {job.salary && (
                    <p className="text-sm text-muted-foreground mb-1">
                      💰 {job.salary}
                    </p>
                  )}
                  {job.eligibility && (
                    <p className="text-sm text-muted-foreground mb-1">
                      🎓 {job.eligibility}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed mt-2">{job.jd}</p>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompanyCard;
