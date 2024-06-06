import HeroText from "@/components/custom/HeroText";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";

export default function Home() {
  return (
    <div className="bg-customGray h-screen flex items-center flex-col justify-center gap-24">
      <HeroText />
      <SearchBar/>
      <ScrollText text="Unlock the Future of Authentication with Next.js and Tailwind CSS. Experience the power of dynamic styling and seamless scrolling effects." />
    </div>
  );
}
