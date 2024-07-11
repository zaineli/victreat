

export default function CardsBanner() {
    return (
        <div className="bg-neutral-400">
            
        </div>
    );
}

function Card({heading, content}: {
    heading: string;
    content: string;
}) {

    return (
        <div className="text-white">
            <h1 className="text-2xl">{heading}</h1>
            <p className="text-lg">{content}</p>
        </div>
    )
}