import Link from "next/link";
import { Job } from "@/lib/types";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        &larr; Back to all jobs
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
        <div className="mt-2 text-xl text-gray-700">{job.company}</div>
        <div className="mt-1 text-gray-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
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
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Job Description
        </h2>
        <div className="text-gray-700 whitespace-pre-line">
          {job.description}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          How to Apply
        </h2>
        <div className="text-gray-700">
          {job.howToApply.startsWith("http") ? (
            <a
              href={job.howToApply}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Apply Online
            </a>
          ) : (
            <p>{job.howToApply}</p>
          )}
        </div>
      </div>
    </div>
  );
}
