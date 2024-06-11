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
    <div className="min-h-screen w-full flex flex-col justify-between">
      <main className="flex-grow p-8 w-full">
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-6 gap-24 lg:px-24">
      <div>
        <h2 className="text-orange-600 text-lg mb-2 flex-[3_3_0]">Meet Our Team:</h2>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Bringing Passion and
          <br /> Expertise Together
        </h1>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-12 text-lg flex-1">
        <p>Welcome to our team page, where you get a glimpse into the heart and soul of our organization. We are a diverse group of individuals, each bringing unique talents, perspectives, and passions to the table.</p>
      </div>
    </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-16">
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
