'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { jobsData } from '@/app/careers/jobsData';
import { ArrowBigLeftIcon, ArrowLeft, ChevronLeft } from 'lucide-react';

type Job = {
  id: string;
  title: string;
  location: string;
  description: string;
  requirements: string[];
};

type Props = {
  params: {
    jobId: string;
  };
};

function JobDetails({ params }: Props) {
  const { jobId } = params;
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (jobId) {
      const foundJob = jobsData.find(job => job.id === jobId);
      if (foundJob) {
        setJob(foundJob);
      }
    }
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[95rem] mx-auto p-6 bg-white rounded-lg mt-32">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 p-4">

          <div className="text-3xl font-bold mb-4 flex gap-3 items-center">
            <Link href="/careers">
              <ArrowLeft className="h-6 w-6 inline-block hover:cursor-pointer hover:-translate-x-2 hover:scale-[1.05] transition-all " />
            </Link>
            {job.title}
          </div>
          <h2 className="text-xl mb-2">What we expect from our new colleague</h2>
          <p className="text-gray-700 mb-4">{job.expectations}</p>
          <h3 className="text-lg font-semibold mb-2">Wishlist for a {job.title}:</h3>
          <ul className="list-disc list-inside mb-4">
            {job.wishlist.map((requirement, index) => (
              <li key={index} className="text-gray-700">{requirement}</li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-2">What Victreat Solution has to offer</h2>
          <p className="text-gray-700 mb-4">{job.offerings}</p>
          <Link href="/careers">
            <div className="text-blue-500 hover:text-blue-700">Back to Careers</div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-8  rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Apply for this job</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Mail address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+32 *** ** ** **"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                  Resume or CV
                </label>
                <input
                  id="resume"
                  type="file"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                  Cover letter
                </label>
                <textarea
                  id="coverLetter"
                  placeholder="Stand out from the crowd"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">I accept the Demaz privacy and terms</span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
