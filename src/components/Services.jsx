import HeroCard from "./HeroCard";
import brain from '/brain.svg'
import heart from '/heart.svg'
import bone from '/bone.svg'
import mother from '/mother.svg'

function Services() {
  return <section className="bg-whtite w-full">
    <div className="grid grid-cols-2 sm:grid-cols-2 w-3/5 gap-4 px-12">
         <HeroCard logo={brain} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={heart} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={bone} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={mother} text={'Brain Surgery'} alt={'Brain'} />
            </div>
            
  </section>;
}

export default Services;
