import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, GraduationCap, IndianRupee, Gift } from "lucide-react";

const CompanyCard = ({ company }) => {
  return (
    <Card className="p-4 rounded-2xl shadow-md hover:shadow-lg transition-all bg-white">
      <div className="flex items-center gap-4 mb-3">
        {company.logo && (
          <img
            src={company.logo}
            alt={company.name}
            className="w-14 h-14 object-contain"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-yellow-600">{company.name}</h2>
          <p className="text-gray-600 text-sm">{company.industry}</p>
        </div>
      </div>

      <CardContent className="p-0">
        <p className="text-gray-700 text-sm mb-3">{company.description}</p>

        <div className="flex items-center text-gray-700 text-sm mb-1">
          <MapPin size={16} className="mr-2 text-gray-500" />
          <span>{company.location}</span>
        </div>

        <div className="flex items-center text-gray-700 text-sm mb-1">
          <Briefcase size={16} className="mr-2 text-gray-500" />
          <span>{company.jobOpenings} Openings</span>
        </div>

        {/* 🎓 Qualification */}
        {company.qualification && (
          <div className="flex items-center text-gray-700 text-sm mb-1">
            <GraduationCap size={16} className="mr-2 text-gray-500" />
            <span>{company.qualification}</span>
          </div>
        )}

        {/* 💰 Salary */}
        {company.salary && (
          <div className="flex items-center text-gray-700 text-sm mb-1">
            <IndianRupee size={16} className="mr-2 text-gray-500" />
            <span>{company.salary}</span>
          </div>
        )}

        {/* 🎁 Benefits */}
        {company.benefits && (
          <div className="flex items-center text-gray-700 text-sm mb-1">
            <Gift size={16} className="mr-2 text-gray-500" />
            <span>{company.benefits}</span>
          </div>
        )}

        {/* 🧩 Job List */}
        <div className="mt-4 border-t pt-2">
          <h3 className="text-sm font-semibold text-yellow-700 mb-1">
            Available Roles:
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {company.jobs?.map((job, index) => (
              <li key={index}>
                <span className="font-medium">{job.title}</span> –{" "}
                <span>{job.availableJobs} openings</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
