'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { jobsData } from '@/app/careers/jobsData';
import { ArrowBigLeftIcon, ArrowLeft, ChevronLeft } from 'lucide-react';

type Job = {
  id: string;
  title: string;
  expectations: string;
<<<<<<< HEAD
  wishlist: string[];
=======
  requirments: string[];
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
      body: formData, 
=======
      body: formData,
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
          <p className="text-gray-700 mb-4">{job.expectations}</p>
=======
          <p className="text-gray-700 mb-4">{job.expectations.replaceAll('\n', '\n-\n').split('\n').map(e => e === '-' ? <br /> : e)}</p>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
=======
                      maxLength={24}
                      required
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
                      id="lastName"
                      name="last_name"
=======
                      required
                      id="lastName"
                      name="last_name"
                      maxLength={24}
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
                      type="text"
                      placeholder="Last name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
<<<<<<< HEAD
                      Mail address
                    </label>
                    <input
                      id="email"
                      type="email"
=======
                      Mail address <span className="text-xs font-normal">(example@example.com)</span>
                    </label>
                    <input
                      required
                      id="email"
                      type="email"
                      pattern='.*@.*\..*'
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
                      name="email"
                      placeholder="Email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
<<<<<<< HEAD
                      Phone number
=======
                      Phone number <span className="text-xs font-normal">(+92 xxx xxxxxxx)</span>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
                    </label>
                    <input
                      id="phone"
                      name='phone'
<<<<<<< HEAD
                      type="tel"
                      placeholder="+32 *** ** ** **"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
=======
                      required
                      type="tel"
                      placeholder="+92 *** *******"
                      pattern='\+92 [0-9]{3} [0-9]{7}'
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
                      id="linkedin"
                      type="text"
                      name='linkedin'
=======
                      
                      id="linkedin"
                      type="text"
                      name='linkedin'
                      required
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
=======
                      required
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
=======
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
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
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
<<<<<<< HEAD
            }          </div>
=======
            }
          </div>
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
