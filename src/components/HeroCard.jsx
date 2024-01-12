const HeroCard = ({ logo, text, alt }) => {
  return (
    <div className="cursor-pointer transform-gpu transition-transform ease-in-out duration-300 sm:hover:scale-110 hover:scale-100 flex items-center shadow-lg bg-gradient-to-br from-white via-white to-cyan-100 rounded-xl px-2 py-4">
      <div className="w-3/4">
        <img src={logo} alt={alt} className="lg:w-16 lg:h-16 object-cover" />
      </div>
      <div className="ml-4 w-full">
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default HeroCard;
