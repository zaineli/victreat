import MutationSection from "@/components/custom/mutationSections";
import MutationGraphic from "../components/custom/mutationGraphic";

const mutations = [
  'TP53',
  'KRAS',
  'EGFR',
  'ALK',
  'ROS1',
  'BRAF',]

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MutationSection />
    </div>
  );
}
