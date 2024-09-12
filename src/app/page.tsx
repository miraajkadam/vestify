import Link from "next/link";
import { DashboardContent } from "../components/dashboard/DashboardContent";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Here Sign Up logic will be written </h1>
        <Link href="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
