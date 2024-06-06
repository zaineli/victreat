import HeroText from "@/components/custom/HeroText";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";

export default function Home() {
  return (
    <div className="bg-customGray ">
      <section className="h-screen flex items-center flex-col justify-center gap-24">

        <HeroText />
        <SearchBar />
      </section>
      <ScrollText text="Our mission is to empower cancer patients by providing clear, comprehensive information about the treatment options available for their specific diagnosis." />
      {/* <section className="h-screen"></section> */}
    </div>
  );
}
