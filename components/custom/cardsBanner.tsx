import { useRef, useState } from "react";
import { map } from "./CustomBarChart1";
import useMouseHover from "@/lib/useMouseHover";


export default function CardsBanner() {
    const cards = [
        {
            heading: "Beat Cancer",
            content: "We help you beat cancer."
        },
        {
            heading: "Beat Cancer",
            content: "We help you beat cancer."
        },
        {
            heading: "Beat Cancer",
            content: "We help you beat cancer."
        },
        
    ]

    return (
        <div className=" bg-gradient-to-tr from-[#8346b4] to-[#46b4ab] flex lg:p-32 md:p-16 p-4 gap-16 justify-between relative flex-col md:flex-row flex-wrap ">
            <img src="/images/wallpaper.webp" className="absolute left-0 bottom-0 h-full w-full bg-left bg-repeat" alt="" /> 
            {cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
    );
}

function Card({ heading, content }: {
    heading: string;
    content: string;
}) {
    const ref = useRef<HTMLDivElement>();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });
    const isHovered = useMouseHover(ref);



    return (
        <div
            ref={ref}
            onMouseMove={(e) => {
                if (!ref.current) return;
                const boundingRect = ref.current.getBoundingClientRect();
                const x = (e.clientX - boundingRect.x - boundingRect.width / 2) / boundingRect.width;
                const y = (e.clientY - boundingRect.y - boundingRect.height / 2) / boundingRect.height;;
                setMouse({ x: map(x, -0.5, 0.5, -15, 15), y: map(-y, -0.5, 0.5, -15, 15) });
                const glareX = boundingRect.width - (e.clientX - boundingRect.x);
                const glareY = boundingRect.width - (e.clientY - boundingRect.y);
                const distance = Math.sqrt((glareX - (boundingRect.width / 2)) ** 2 + (glareY - (boundingRect.height / 2)) ** 2);
                const maxDistance = Math.sqrt((boundingRect.width/2) ** 2 + (boundingRect.height / 2) ** 2);
                setGlare(
                    {
                        x: glareX,
                        y: glareY,
                        opacity: map(distance, 0, maxDistance, 0, 0.4)
                    }
                )
                // const cx = 
                // console.log({y, y});
            }}
            onMouseLeave={() => {
                setMouse({ x: 0, y: 0 })
                setGlare({ ...glare, opacity: 0 })
            }}
            className="p-4 z-50 group"
        >
            <div
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(3000px) rotateX(${(mouse.y).toFixed(1)}deg) rotateY(${(mouse.x).toFixed(1)}deg)`,//, ${(mouse.x * 360).toFixed(1)}deg)`
                    transition: !isHovered ? "transform 0.5s ease, box-shadow 0.5s ease" : " box-shadow 0.5s ease",
                }}
                className="overflow-hidden text-white hover:[box-shadow:0_40px_70px_-15px_rgba(0,0,0,0.3)] aspect-square  h-auto lg:p-16 p-8 bg-pink-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-black mb-4">{heading}</h1>
                <p className="lg:text-xl md:text-lg">{content}</p>
                <span
                    style={{
                        top: glare.y,
                        left: glare.x,
                        translate: '-50% -50%',
                        opacity: glare.opacity
                    }}
                    className=" pointer-events-none  absolute block rounded-full w-full h-full  bg-[radial-gradient(circle_at_center,#ffffffff,#ffffff00,#ffffff00)] scale-[2.4] blur-xl group-hover:opacity-35 opacity-0">asd</span>
                {/* <span className=" absolute -z-50 -inset-10 bg-red-500 [transform:translateZ(-100px)]"></span> */}
            </div>
        </div >
    )
}