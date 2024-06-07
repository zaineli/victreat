import HeroText from "@/components/custom/HeroText";
import Carousel from "@/components/custom/caruosel";
import ScrollText from "@/components/custom/scrollText";
import SearchBar from "@/components/custom/searchBar";
import TextReveal from "@/components/custom/textReveal";

export default function Home() {
  return (
    // <div className="bg-customGray ">
    //   <section className="h-screen flex items-center flex-col justify-center gap-24">

    //     <HeroText />
    //     <SearchBar />
    //   </section>
    //   <ScrollText text="Our mission is to empower cancer patients by providing clear, comprehensive information about the treatment options available for their specific diagnosis. We support patients and their families by offering up-to-date resources, expert insights, and personalized guidance. Whether newly diagnosed or exploring new treatments, our platform helps you make informed decisions and navigate your path to recovery with confidence and hope." />
    //   <section className="h-screen flex items-center flex-col justify-center gap-24">
    //     <Carousel />
    //   </section>
    // </div>
    <div style={{ height: '150vh', padding: '50px' }}>
      <div style={{ marginBottom: '100vh' }}>
        <h1>Scroll down to see the animation</h1>
      </div>
      <TextReveal>
        <h1>This is the text that will reveal from bottom to top</h1>
      </TextReveal>
    </div>
  );
}
