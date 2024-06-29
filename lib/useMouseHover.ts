import { useEffect, useState } from "react";

export default function useMouseHover<T=HTMLDivElement>(ref: React.RefObject<T>) {
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        function handleMouseOver() {
            setIsHovered(true);
        }

        function handleMouseOut() {
            setIsHovered(false);
        }

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseout', handleMouseOut);
        }

    })

    return isHovered;
}