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
  qualification,
  salary,
  benefits,
  jobs = [],
  applicationLink,
}: CompanyCardProps) => {
  const [open, setOpen] = useState(false);

  const actionLabel = "Apply Now";
  const actionLink = applicationLink || "#";

  return (
    <>
      {/* 🌟 Company Card */}
      <Card className="group h-full overflow-hidden border-2 border-yellow-300 bg-white hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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

          {/* Name */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-yellow-600 transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 flex-grow text-center leading-relaxed">
            {description}
          </p>

          {/* Extra Info */}
          {qualification && (
            <p className="text-sm text-gray-700 mb-1 text-center">
              🎓 <strong>Qualification:</strong> {qualification}
            </p>
          )}
          {salary && (
            <p className="text-sm text-gray-700 mb-1 text-center">
              💰 <strong>Salary:</strong> {salary}
            </p>
          )}
          {benefits && (
            <p className="text-sm text-gray-700 mb-2 text-center">
              🏠 <strong>Benefits:</strong> {benefits}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2 text-yellow-600">
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
              className="bg-yellow-500 hover:bg-yellow-600 text-white w-full font-medium"
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
            <DialogTitle className="text-gray-800 font-semibold">
              {name} — Job Openings
            </DialogTitle>
            <DialogDescription>
              <p className="text-sm text-gray-600 mb-4">
                Explore available roles and their details below.
              </p>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  <h4 className="text-base font-semibold text-gray-800">
                    {job.title}
                  </h4>

                  {job.location && (
                    <p className="text-sm text-gray-600 mb-1">
                      📍 {job.location}
                    </p>
                  )}
                  {job.availableJobs && (
                    <p className="text-sm text-gray-600 mb-1">
                      👥 {job.availableJobs} Openings
                    </p>
                  )}
                  {job.industryType && (
                    <p className="text-sm text-gray-600 mb-1">
                      🏢 {job.industryType}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed mt-2 text-gray-700">
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

          {/* Optional Apply Now Button */}
          {applicationLink && (
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                className="bg-yellow-600 hover:bg-yellow-700 text-white flex items-center gap-2"
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
