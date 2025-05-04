import { fetchJobById } from "../../../lib/api";
import JobDetails from "../../../components/JobDetails";
import { notFound } from "next/navigation";

export default async function JobPage({ params }: { params: { id: string } }) {
  try {
    const job = await fetchJobById(params.id);

    return (
      <div className="min-h-screen bg-gray-50 py-8 relative">
        <div className="w-full h-40 absolute top-0 left-0 bg-gradient-to-r from-blue-700 to-blue-500 z-0"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-24">
          <JobDetails job={job} />

          <div className="mt-16 pb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Similar Jobs
              </h2>

              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  More job recommendations coming soon!
                </p>
                <a
                  href="/"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Browse all jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
