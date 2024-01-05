const HeroCard = ({logo, text, alt}) => {
    return (
        <div className="flex items-center shadow-lg bg-white rounded-xl px-2 py-2">
            <div className="w-1/2"><img src={logo} alt={alt} className="w-24 h-24" /></div>
            <div className="w-1/2"><p className="text-2xl">{text}</p></div>
        </div>
    )
}

export default HeroCard