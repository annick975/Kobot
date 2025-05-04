import { fetchJobById } from "@/lib/api";
import JobDetails from "@/components/JobDetails";
import { notFound } from "next/navigation";

export default async function JobPage({ params }: { params: { id: string } }) {
  try {
    const job = await fetchJobById(params.id);

    return <JobDetails job={job} />;
  } catch (error) {
    notFound();
  }
}
