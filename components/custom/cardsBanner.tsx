

export default function CardsBanner() {
    return (
        <div className="bg-neutral-400">

        </div>
    );
}

function Card({ heading, content }: {
    heading: string;
    content: string;
}) {

    const ref = useRef();
    const [mouse,setMouse] = useState();

    return (
        <div
            ref={ref}
            onMouseMove={(e) => {
                if (!ref.current) return;
                const boundingRect = ref.current.getBoundingClientRect();
                const x = (e.clientX - boundingRect.x - boundingRect.width / 2) / boundingRect.width;
                const y = (e.clientY - boundingRect.y - boundingRect.height / 2) / boundingRect.height;;
                setMouse({ x: map(x, -0.5, 0.5, -30, 30), y: map(-y, -0.5, 0.5, -30, 30) });
                const glareX = boundingRect.width - (e.clientX - boundingRect.x);
                const glareY = boundingRect.width - (e.clientY - boundingRect.y);
                const distance = Math.sqrt((glareX - (boundingRect.width / 2)) ** 2 + (glareY - (boundingRect.height / 2)) ** 2);
                const maxDistance = Math.sqrt((boundingRect.width / 2) ** 2 + (boundingRect.height / 2) ** 2);
                setGlare(
                    {
                        x: glareX,
                        y: glareY,
                        opacity: map(distance, 0, maxDistance, 0, 1)
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
                className="overflow-hidden text-white hover:[box-shadow:0_40px_70px_-15px_rgba(0,0,0,0.3)] aspect-square  h-auto lg:p-16 p-8 bg-gray-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
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