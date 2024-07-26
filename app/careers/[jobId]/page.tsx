'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { jobsData } from '@/app/careers/jobsData';
import { ArrowBigLeftIcon, ArrowLeft, ChevronLeft } from 'lucide-react';

type Job = {
  id: string;
  title: string;
  expectations: string;
  requirments: string[];
  offerings: string;
};

type Props = {
  params: {
    jobId: string;
  };
};

function JobDetails({ params }: Props) {
  const { jobId } = params;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (jobId) {
      const foundJob = jobsData.find(job => job.id === jobId);
      if (foundJob) {
        setJob(foundJob);
      }
    }
  }, [jobId]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setLoading(true);
    fetch('/api/mail', {
      method: 'POST',
      body: formData,
    }).then(() => { setLoading(false); setSent(true) })
    // console.log(data);
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center max-w-[95rem] mx-auto p-6 bg-white rounded-lg pt-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 p-4">

          <div className="text-3xl font-bold mb-4 flex gap-3 items-center">
            <Link href="/careers" className='group '>
              <ArrowLeft className="h-8 w-8 inline-block group-hover:cursor-pointer group-hover:-translate-x-2 group-hover:scale-[1.1] transition-all " />
            </Link>
            {job.title}
          </div>
          <h2 className="text-lg mb-2 font-semibold">What we expect from our new colleague</h2>
          {job.expectations.split('\n').map(p =>
            <p className="text-gray-700 mb-4 first-letter:pl-2">
              {p}
            </p>
          )}
          <h3 className="text-lg font-semibold mb-2">Wishlist for a {job.title}:</h3>
          <ul className="list-disc list-inside mb-4">
            {job.requirments.map((requirement, index) => (
              <li key={index} className="text-gray-700">{requirement}</li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mb-2">What Victreat Solution has to offer</h2>
          <p className="text-gray-700 mb-4">{job.offerings}</p>
          {/* <Link href="/careers">
            <div className="text-blue-500 hover:text-blue-700">Back to Careers</div>
          </Link> */}
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-8  rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Apply for this job</h2>
            {
              sent ? <div className="text-green-500">Application sent!</div> :
                <form onSubmit={submit}>
                  <input type="text" className=' hidden' name='position' value={job.title} />
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="first_name"
                      maxLength={24}
                      required
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
                      required
                      id="lastName"
                      name="last_name"
                      maxLength={24}
                      type="text"
                      placeholder="Last name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Mail address <span className="text-xs font-normal">(example@example.com)</span>
                    </label>
                    <input
                      required
                      id="email"
                      type="email"
                      pattern='.*@.*\..*'
                      name="email"
                      placeholder="Email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone number <span className="text-xs font-normal">(+92 xxx xxxxxxx)</span>
                    </label>
                    <input
                      id="phone"
                      name='phone'
                      required
                      type="tel"
                      placeholder="+92 *** *******"
                      pattern='\+92 [0-9]{3} [0-9]{7}'
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                      Resume or CV
                    </label>
                    <input
                      id="resume"
                      type="file"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /> */}

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                      LinkedIn
                    </label>
                    <input
                      id="linkedin"
                      type="text"
                      name='linkedin'
                      required
                      placeholder='Your linkedIn profile link'
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
                      CV
                    </label>
                    <input
                      id="cv"
                      name='cv'
                      required
                      type='file'
                      placeholder="Your updated CV."
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                      Cover letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name='cover'
                      placeholder="Stand out from the crowd"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary_expectations">
                      Salary Expectations <span className='text-xs font-normal'>(20000)</span>
                    </label>
                    <input
                      min="0"
                      required
                      id="salary_expectations"
                      name='salary_expectations'
                      pattern='[0-9]+'
                      type="number"
                      placeholder="In PKR"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input type="checkbox" required className="form-checkbox h-5 w-5 text-blue-600" />
                      <span className="ml-2 text-gray-700">I have read the job description and I have the skills required.</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="disabled:cursor-not-allowed disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit application
                  </button>
                </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
