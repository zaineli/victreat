import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Home, Target, Search, PieChart, LineChartIcon } from 'lucide-react';

console.log({ Home, Target, Search, PieChart });
=======
import { Home, Goal, FlaskConical, PieChart, Map, Pill } from 'lucide-react';

console.log({ Home, Goal, Pill, PieChart });
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0

const ProgressTracker = ({ sections }: {
  sections: string[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sections.map((section) => document.getElementById(section));

      const newActiveIndex = sectionElements.findIndex((section) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      });

      setActiveIndex(newActiveIndex === -1 ? sections.length - 1 : newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

<<<<<<< HEAD
  const icons = [Home, Target, Search, PieChart, LineChartIcon ];
=======
  const icons = [Home, Goal, Pill, FlaskConical, Map ];
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0

  return (
    <div className="hidden md:flex fixed right-14 top-[30%] z-[2000]">
      <div className="relative flex flex-col items-center h-full">
        {sections.map((id, index) => {
          const Icon = icons[index];
          return (
            <a href={'#' + id} key={index} className="flex flex-col items-center z-10">
              <div
<<<<<<< HEAD
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
=======
                className={`w-10 h-10 p-2  rounded-full flex items-center justify-center ${
>>>>>>> a1387e0df96df296f8c132b0bfd1c64d4a64fee0
                  index <= activeIndex ? 'bg-[#aade8d]' : 'bg-gray-300'
                }`}
              >
                {/* <Home /> */}
                <Icon
                  className=  {`text-white ${index === activeIndex ? 'animate-pulse' : ''}`}
                />
              </div>
              {index !== sections.length - 1 && (
                <div className={`w-1 h-8 ${index < activeIndex ? 'bg-[#92e665aa]' : 'bg-gray-300'}`}></div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;

// export default function ProgressTracker() {
//   return (
//     <div>
//       <h1>ProgressTracker</h1>
//     </div>
//   );
// }

