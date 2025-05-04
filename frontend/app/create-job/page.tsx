import { createJob } from "../../lib/actions";

export default function CreateJob() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full mb-12 relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Post a New Job
          </h1>
          <p className="text-lg text-blue-100 text-center max-w-2xl mx-auto">
            Connect with talented professionals in Rwanda by posting your job
            opportunity
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <form action={createJob} className="space-y-8">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
              placeholder="e.g. Acme Inc."
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
              placeholder="e.g. Kigali, Rwanda"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              id="description"
              required
              rows={8}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
              placeholder="Describe the role, responsibilities, and requirements"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500">
              Include details about the role, responsibilities, requirements,
              and benefits.
            </p>
          </div>

          <div>
            <label
              htmlFor="howToApply"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How to Apply <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="howToApply"
              id="howToApply"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors shadow-sm"
              placeholder="e.g. Email your resume to jobs@example.com or https://example.com/careers"
            />
            <p className="mt-2 text-sm text-gray-500">
              Enter an email address, URL, or instructions on how to apply.
            </p>
          </div>

          <div className="flex items-center pt-4">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              required
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="termsAccepted"
              className="ml-2 block text-sm text-gray-700"
            >
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Post Job
            </button>
            <p className="mt-4 text-center text-sm text-gray-500">
              Your job posting will be reviewed and published shortly.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
