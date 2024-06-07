import HeroText from "@/components/custom/HeroText";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";
import { FadeText } from "@/components/magicui/fadetext";

export default function Home() {
  return (
    <div className="bg-customGray ">
      <section className="h-screen flex items-center flex-col justify-center gap-24">
        <HeroText />
        <SearchBar />
      </section>
      <ScrollText text="Our mission is to empower cancer patients by providing clear, comprehensive information about the treatment options available for their specific diagnosis. We support patients and their families by offering up-to-date resources, expert insights, and personalized guidance. Whether newly diagnosed or exploring new treatments, our platform helps you make informed decisions and navigate your path to recovery with confidence and hope." />
      <section className="h-screen flex items-center flex-col justify-center gap-24">
        <FadeText
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias debitis ad nulla minus nesciunt nostrum consequuntur repellat autem eos error?"
        />
      </section>
    </div>
  );
}

