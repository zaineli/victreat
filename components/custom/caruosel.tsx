'use client'
import { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

const Carousel = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const { y } = useWindowScroll();

    useEffect(() => {
        setScrollLeft(y / 2);
    }, [y]);

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex space-x-4 transition-transform duration-300"
                style={{ transform: `translateX(-${scrollLeft}px)` }}
            >
                <div className="min-w-[300px] h-[300px] bg-blue-500 flex items-center justify-center">
                    <img src="/images/image1.png" alt="Item 1" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-[300px] h-[300px] bg-blue-500 flex items-center justify-center">
                    <img src="/images/image2.png" alt="Item 2" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-[300px] h-[300px] bg-blue-500 flex items-center justify-center">
                    <img src="/images/image3.png" alt="Item 3" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
