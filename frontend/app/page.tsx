import { fetchJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";

export default async function Home() {
  const jobs: Job[] = await fetchJobs();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Latest Jobs in Rwanda
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No jobs found. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
