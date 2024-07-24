import { useRef, useState } from "react";
import { map } from "@/lib/utils";
import useMouseHover from "@/lib/useMouseHover";

export default function CardsBanner() {
    const cards = [
        {
            number: 1,
            heading: "Stay Updated",
            content: "Staying informed about the latest advancements in cancer treatment is essential, as the field is rapidly evolving with groundbreaking discoveries."
        },
        {
            number: 2,
            heading: "Navigate With Ease and Confidence",
            content: "Victreat serves as a portal that simplifies the complex treatment landscape and guides individuals through treatment guidelines with ease and confidence."
        },
        {
            number: 3,
            heading: "Take Informed Decision",
            content: "By keeping abreast of new developments, patients and healthcare professionals can make informed decisions for better healthcare and enhanced quality of life."
        },
    ];

    return (
        <div className="bg-[#F3FFEB] to-[#DBE5EB] flex w-full lg:px-16 lg:gap-16 md:gap-8 md:px-8 gap-4 px-4 justify-between relative flex-col md:flex-row flex-wrap ">
            {cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
    );
}

export function Card({ number, heading, content }: {
    number: number;
    heading: string;
    content: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
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
                const y = (e.clientY - boundingRect.y - boundingRect.height / 2) / boundingRect.height;
                setMouse({ x: map(x, -0.5, 0.5, -15, 15), y: map(-y, -0.5, 0.5, -15, 15) });
                const glareX = boundingRect.width - (e.clientX - boundingRect.x);
                const glareY = boundingRect.width - (e.clientY - boundingRect.y);
                const distance = Math.sqrt((glareX - (boundingRect.width / 2)) ** 2 + (glareY - (boundingRect.height / 2)) ** 2);
                const maxDistance = Math.sqrt((boundingRect.width / 2) ** 2 + (boundingRect.height / 2) ** 2);
                setGlare({
                    x: glareX,
                    y: glareY,
                    opacity: map(distance, 0, maxDistance, 0, 0.4)
                });
            }}
            onMouseLeave={() => {
                setMouse({ x: 0, y: 0 });
                setGlare({ ...glare, opacity: 0 });
            }}
            className="px-4 z-50 group w-full lg:flex-1"
        >
            <div
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(3000px) rotateX(${(mouse.y).toFixed(1)}deg) rotateY(${(mouse.x).toFixed(1)}deg)`,
                    transition: !isHovered ? "transform 0.5s ease, box-shadow 0.5s ease" : "box-shadow 0.5s ease",
                }}
                className=" text-gray-600 h-full hover:[box-shadow:0_40px_70px_-15px_rgba(0,0,0,0.3)] lg:p-16 md:p-12 p-8 bg-[#DEF5D2] rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 border border-gray-100"
            >
                <div className="flex items-center mb-4">
                    <div className="text-5xl lg:text-7xl font-bold text-[#3C6E71] mr-4">{number}</div>
                    <h1 className="lg:text-3xl md:text-2xl text-[1.25rem] font-black">{heading}</h1>
                </div>
                <p className="lg:text-xl md:text-lg text-base">{content}</p>
                <span
                    style={{
                        top: glare.y,
                        left: glare.x,
                        translate: '-50% -50%',
                        opacity: glare.opacity
                    }}
                    className="pointer-events-none absolute block rounded-full bg-[radial-gradient(circle_at_center,#ffffffff,#ffffff00,#ffffff00)] blur-xl group-hover:opacity-35 opacity-0"
                ></span>
            </div>
        </div >
    )
}
