import Link from "next/link";
import { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/job/${job.id}`}
      className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 bg-white"
    >
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <div className="mt-2 text-gray-600">{job.company}</div>
      <div className="mt-1 text-gray-500 text-sm flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
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
    </Link>
  );
}
