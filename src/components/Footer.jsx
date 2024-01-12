import Map from "./Map";
import { Button, Typography } from "@material-tailwind/react";

function Footer() {
    return  (
        <section className="w-full bg-gradient-to-b from-cyan-400 to-slate-50 text-white">
           <div className="w-full flex lg:px-12 px-8 py-8 lg:py-12">
                <div className="w-1/2"><Map/></div>
                <div className="flex-1 flex justify-start items-end gap-4 flex-col">
                    <Button>Whatsapp</Button>
                    <Button>Whatsapp</Button>
                    <Typography color="black" className="lg:text-4xl text-2xl tracking-widest font-bold">Bajrang Hospital</Typography>
                    <Typography color='black' className="lg:text-lg">Suite 470 84348 Donnelly Ridge, Hermanville, NM 11965</Typography>
                </div>
           </div>
        </section>
    )
}

export default Footer;