import Card from "./Cards Holder/Cards";

function IdealandGoal () {
    return (
        <section className="bg-gradient-to-t from-cyan-400 to-slate-50 w-full flex items-start lg:px-0 px-12 gap-4 lg:flex-row flex-col mx-auto justify-between py-8 lg:py-16">
            <Card borderDirection='lg:border-r-8 lg:rounded-r-2xl'/>
            <Card borderDirection='lg:border-l-8 lg:rounded-l-2xl'/>
        </section>
    )
}

export default IdealandGoal;