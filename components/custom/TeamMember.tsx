// components/TeamMember.js
import Image from "next/image";

const TeamMember = ({ name, title, imageSrc, bgColor, index }) => {
  function currentIndex(index) {
    return (
      <div
        className={`overflow-hidden w-72 h-96 flex items-center justify-center ${index % 2 === 0 ? "rounded-full" : "rounded-[2rem]"} ${bgColor}`}
      >
        <img
          src={imageSrc}
          alt={`${name}'s photo`}
          className={`object-cover `}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      {currentIndex(index)}
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default TeamMember;
