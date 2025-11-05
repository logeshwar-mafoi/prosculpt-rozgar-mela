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
  description: string;
  availableJobs?: number;
  location?: string;
  industryType?: string;
}

interface CompanyCardProps {
  name: string;
  logo?: string;
  description: string;
  jobOpenings: number | null;
  location: string;
  qualification?: string;
  salary?: string;
  benefits?: string;
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

  const actionLabel = "Apply Now";
  const actionLink = applicationLink || "#";

  return (
    <>
      {/* 🌟 Company Card */}
      <Card className="group h-full overflow-hidden border-2 border-blue-300 bg-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Logo */}
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
          <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 flex-grow text-center leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-auto">
            <div className="flex items-center gap-2 text-blue-600">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {jobOpenings !== null ? `${jobOpenings} Openings` : "Open Roles"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* View Button */}
          <div className="pt-4 flex flex-col items-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full font-medium"
            >
              View
            </Button>
            <span className="text-xs text-gray-500 mt-2 text-center">
              Click to view job descriptions
            </span>
          </div>
        </CardContent>
      </Card>

      {/* 🌐 Job Popup Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-blue-700 font-semibold">
              {name}
            </DialogTitle>
            <DialogDescription>
              <p className="text-sm text-gray-600 mb-4">
                Explore available roles and their details below.
              </p>
            </DialogDescription>
          </DialogHeader>

          {/* Job List */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 bg-gray-50 hover:bg-blue-50 transition-all"
                >
                  {/* Job Title */}
                  <h4 className="text-base font-semibold text-blue-700 mb-2">
                    {job.title}
                  </h4>

                  {/* Info Row */}
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-2">
                    <span>📍 {job.location || "N/A"}</span>
                    {job.availableJobs && (
                      <span>👥 Openings: {job.availableJobs}</span>
                    )}
                    {job.industryType && (
                      <span>🏢 {job.industryType}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic text-center py-8">
                No job descriptions available at the moment.
              </p>
            )}
          </div>

          {/* Apply Now */}
          {applicationLink && (
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
              >
                <a href={actionLink} target="_blank" rel="noopener noreferrer">
                  {actionLabel} <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompanyCard;
