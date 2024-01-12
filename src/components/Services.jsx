import HeroCard from "./HeroCard";
import brain from "/brain.svg";
import heart from "/heart.svg";
import bone from "/bone.svg";
import mother from "/mother.svg";

function Services() {
  return (
    <section className="bg-whtite w-full py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-12">
        <HeroCard logo={brain} text={"Brain Surgery"} alt={"Brain"} />
        <HeroCard logo={heart} text={"Heart Surgery"} alt={"Heart"} />
        <HeroCard logo={bone} text={"Bone Surgery"} alt={"Brain"} />
        <HeroCard logo={mother} text={"Mother Surgery"} alt={"Brain"} />
        <HeroCard logo={bone} text={"Bone Surgery"} alt={"Brain"} />
        <HeroCard logo={mother} text={"Mother Surgery"} alt={"Brain"} />
      </div>
    </section>
  );
}

export default Services;
