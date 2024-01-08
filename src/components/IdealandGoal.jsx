import Card from "./Cards Holder/Cards";

function IdealandGoal () {
    return (
        <section className="bg-gradient-to-t from-cyan-400 to-slate-50 w-full flex justify-between py-8 lg:py-16">
            <Card borderDirection='border-r-8 rounded-r-2xl'/>
            <Card borderDirection='border-l-8 rounded-l-2xl'/>
        </section>
    )
}

export default IdealandGoal;