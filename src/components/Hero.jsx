import HeroCard from "./HeroCard";
import brain from '/brain.svg'
import heart from '/heart.svg'
import bone from '/bone.svg'
import mother from '/mother.svg'

const Hero = () => {
  return (
    <section className="w-full flex bg-gradient-to-b from-cyan-400 to-slate-50 h-[90vh] lg:px-12">
        <div className="w-1/2 flex items-center flex-wrap gap-2 text-4xl">
            {/* <HeroCard logo={brain} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={heart} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={bone} text={'Brain Surgery'} alt={'Brain'} />
            <HeroCard logo={mother} text={'Brain Surgery'} alt={'Brain'} /> */}
            
        </div>

        <div className="w-2/4  second flex items-center justify-center">
          <div className= "px-4 pt-4 rounded-xl shadow-xl bg-gradient-to-t from-amber-500 to-gray-50">
            <div className="w-1/2">
              <img
                src="/doctor.png"
                alt="Doctor"
                className="object cover w-full"
              />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
