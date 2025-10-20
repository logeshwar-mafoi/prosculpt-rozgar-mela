// import { allCompanies, CompanySection as SectionType } from '@/data';
import CompanyCard from './CompanyCard';

interface CompanySectionProps {
  title: string;
  companies: Array<{
    name: string;
    logo?: string;
    description: string;
    jobOpenings: number;
    location: string;
  }>;
}

const CompanySection = ({ title, companies }: CompanySectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-federal via-honolulu to-pacific bg-clip-text text-transparent inline-block">
            {title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-marian to-pacific mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
