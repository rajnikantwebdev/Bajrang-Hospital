function HeartPage() {
    return (
    <section className="w-full min-h-screen">
        <div className="bg-gradient-to-b from-amber-500 to-gray-50 px-12 py-12 flex">
            <div className="flex-1">
                <img src="/heart.webp" alt="heart" className="w-44 h-44" />
            </div>
            <div className="flex-[2]">
                <h1 className="font-bold text-4xl tracking-widest">CARDIAC OPERATION</h1>
                <div className="my-4 text-xl">
                    <li>Heart specialist at Bajrang Hospital</li>
                    <li>Heart specialist at Bajrang Hospital</li>
                    <li>Heart specialist at Bajrang Hospital</li>
                    <li>Heart specialist at Bajrang Hospital</li>
                </div>
            </div>
        </div>
        <div className="flex gap-8 py-12 px-12 bg-gradient-to-t from-cyan-400 to-slate-50">
            <div className="w-3/5 shadow-lg"><img src="/doctors-bg.webp" alt="heart surgery" className="rounded-lg w-full h-full object-cover" /></div>
            <div className="flex-1">
                <h1>Bajrang hospital Specialist</h1>
                <div><li>first specialist</li>
                <li>second specialist</li>
                <li>third specialist</li>
                </div>
            </div>
        </div>
    </section>)
}

export default HeartPage;