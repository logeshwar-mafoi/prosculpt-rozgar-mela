import { useState } from "react";
import { MapPin, Briefcase, ExternalLink } from "lucide-react";
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
  jobs?: JobDetail[];
  applicationLink?: string;
}

const CompanyCard = ({
  name,
  logo,
  description,
  jobOpenings,
  location,
  jobs = [],
  applicationLink,
}: CompanyCardProps) => {
  const [open, setOpen] = useState(false);

  // ✅ Allow popup for IndiGo Airlines & ConnectED (Kukje India Group Initiative)
  const normalizedName = name.trim().toLowerCase();
  const isSpecialCompany =
    normalizedName === "indigo airlines" ||
    normalizedName === "connected (kukje india group initiative)";

  const isIndiGo = normalizedName === "indigo airlines";

  const actionLabel = isIndiGo ? "Take Test" : "Register Now";
  const actionLink = isIndiGo
    ? applicationLink ||
      "https://unstop.com/jobs/aocs-online-hiring-drive-pan-india-2-aocs-online-hiring-drive-pan-india-indigo-1534403"
    : "https://forms.gle/B2ifFxQVmuhP6UHU7";

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

          {/* ✅ View button only for IndiGo or ConnectED */}
          {isSpecialCompany && (
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
          )}
        </CardContent>
      </Card>

      {/* ✅ Popup for IndiGo Airlines & ConnectED */}
      {isSpecialCompany && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{name} — Job Openings</DialogTitle>
              <DialogDescription>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore available roles and their details below.
                </p>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {jobs.length > 0 ? (
                jobs.map((job, index) => (
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
                ))
              ) : (
                <p className="text-sm text-muted-foreground italic text-center py-8">
                  No job descriptions available at the moment.
                </p>
              )}
            </div>

            {/* ✅ Action Button: IndiGo = Take Test, ConnectED = Register Now */}
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className={`${
                  isIndiGo
                    ? "bg-honolulu hover:bg-pacific"
                    : "bg-pacific hover:bg-honolulu"
                } text-white flex items-center gap-2`}
              >
                <a href={actionLink} target="_blank" rel="noopener noreferrer">
                  {actionLabel} <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CompanyCard;
