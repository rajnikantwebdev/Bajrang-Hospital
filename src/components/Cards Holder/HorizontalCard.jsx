function HorizontalCard() {
    return (
        <section id="" className="max-h-[40rem] ">
           <div id='first-image-container' className="h-full w-full flex items-center">
          <div className='text-container absolute z-20 md:ml-40 ml-6'>
            <h2 className='uppercase text-white md:font-extrabold md:text-4xl'>Donate</h2>
            <p className='text-slate-400 md:text-sm text-xs'>Donations can provide access to education, healthcare,< br className='md:hidden block' /> and basic necessities, empowering <br className='hidden md:block' />individuals to break<br className='md:hidden block' /> the cycle of poverty and build a brighter future.</p>         
          </div>
          <div id='gradient-overlay' className='text-black text-4xl bg-gradient-to-t from-amber-500 to-gray-50"'>
          </div>
          <img src="/doctors-bg.webp" alt="doctors" className="w-full h-full object-cover max-h-[40rem]" />
        </div>
        </section>
    )
}

export default HorizontalCard;