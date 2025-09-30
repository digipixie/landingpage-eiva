import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-cebu-blue font-poppins mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 font-poppins mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 font-montserrat mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-cebu-blue text-white font-semibold font-montserrat px-6 py-3 rounded-lg hover:bg-cebu-blue-600 transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
