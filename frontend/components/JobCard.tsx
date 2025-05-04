import Link from "next/link";
import { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/job/${job.id}`}
      className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white transform hover:-translate-y-1 hover:border-blue-200"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
            {job.title}
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            New
          </span>
        </div>

        <div className="mt-3 text-gray-600 font-medium flex items-center">
          <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2 text-blue-700 font-bold text-sm border border-blue-100">
            {job.company.charAt(0)}
          </span>
          {job.company}
        </div>

        <div className="mt-3 text-gray-500 text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {job.location}
        </div>

        <div className="mt-4 text-sm text-gray-600 line-clamp-2">
          {job.description.slice(0, 120)}...
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="inline-block text-sm text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200">
            View Details
            <span className="ml-1 group-hover:ml-2 transition-all duration-200">
              →
            </span>
          </span>

          <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1">
            Full-time
          </span>
        </div>
      </div>
    </Link>
  );
}
