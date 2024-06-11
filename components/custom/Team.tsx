// pages/index.js
import Head from 'next/head';
import TeamMember from './TeamMember';
import WavyLines from './WavyLines';

export default function Team() {
  const teamMembers = [
    {
      name: 'Kaiya Rhiel Madsen',
      title: 'Senior Developer',
      imageSrc: '/images/neymar.png', // Replace with correct path
      bgColor: 'bg-gray-200'
    },
    {
      name: 'Charlie Stanton',
      title: 'Senior Developer',
      imageSrc: '/images/messi.png', // Replace with correct path
      bgColor: 'bg-yellow-200'
    },
    {
      name: 'Makenna Kenter',
      title: 'Senior Developer',
      imageSrc: '/images/ronaldo.png', // Replace with correct path
      bgColor: 'bg-red-200'
    },
    {
      name: 'Angel Mango',
      title: 'Senior Developer',
      imageSrc: '/images/neymar.png', // Replace with correct path
      bgColor: 'bg-blue-200'
    },
  ];

  

  return (
    <div className="min-h-screen w-full flex flex-col justify-between mb-32" id="team">
      <main className="flex-grow p-8 w-full">
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-6 gap-24 lg:px-24">
      <div>
        <h1 className="text-3xl font-semibold">
          \ Meet Our Team
        </h1>
      </div>
    </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} index={index} {...member} />
          ))}
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in joining our dynamic team?</h2>
          <p className="text-lg text-gray-600">Check out our <a href="/careers" className="text-blue-500">career page</a> for more information.</p>
        </section>
      </main>
      {/* <WavyLines /> */}
    </div>
  );
}
