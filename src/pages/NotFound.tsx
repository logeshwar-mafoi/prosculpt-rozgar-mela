import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-federal via-marian to-honolulu">
      <div className="text-center text-white px-4">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-8 text-blue-100">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
