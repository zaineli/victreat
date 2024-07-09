import { accyearApproved } from '@/app/discover/data';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function map(n: number, start1: number, stop1: number, start2: number, stop2: number) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

const CustomBarChart1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);

    // const accyearApproved = [
    //     {
    //         label: 'Jan',
    //         value: 10,
    //         cards: [
    //             { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
    //         ]
    //     },
    //     {
    //         label: 'Feb',
    //         value: 20,
    //         cards: [
    //             { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
    //             { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
    //         ]
    //     },

    //     {
    //         label: 'Mar',
    //         value: 50,
    //         cards: [
    //             { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
    //         ]
    //     },
    //     {
    //         label: 'Jan',
    //         value: 10,
    //         cards: [
    //             { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
    //         ]
    //     },
    //     {
    //         label: 'Feb',
    //         value: 20,
    //         cards: [
    //             { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
    //             { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
    //         ]
    //     },

    //     {
    //         label: 'Mar',
    //         value: 50,
    //         cards: [
    //             { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
    //         ]
    //     },
    //     {
    //         label: 'Jan',
    //         value: 10,
    //         cards: [
    //             { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
    //         ]
    //     },
    //     {
    //         label: 'Feb',
    //         value: 20,
    //         cards: [
    //             { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
    //             { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
    //         ]
    //     },

    //     {
    //         label: 'Mar',
    //         value: 50,
    //         cards: [
    //             { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
    //         ]
    //     },
    //     {
    //         label: 'Jan',
    //         value: 10,
    //         cards: [
    //             { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
    //             { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
    //         ]
    //     },
    //     {
    //         label: 'Feb',
    //         value: 20,
    //         cards: [
    //             { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
    //             { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
    //         ]
    //     },

    //     {
    //         label: 'Mar',
    //         value: 50,
    //         cards: [
    //             { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
    //             { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
    //         ]
    //     },
    // ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition(true);
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % accyearApproved.length);
                setTransition(false);
            }, 500);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const handleClick = () => {

    };

    // get only five bars
    const inView = accyearApproved.slice(currentIndex, currentIndex + 3);
    // if (currentIndex + 6 > accyearApproved.length) {
    
        inView.unshift(...accyearApproved.slice(Math.max(0, currentIndex-3), currentIndex));
    // }

    if (currentIndex < 3) {
        inView.unshift(...Array.from({length: Math.max(0, 2 - currentIndex)}, (_, i) => 0));
    }

    console.log(inView);

    return (
        <div className="w-4/5 max-w-2xl mx-auto overflow-hidden">
            <div className="flex relative" style={{ width: '100%', overflow: 'hidden' }}>
                <motion.div className="flex w-full h-[400px] bg-gray-400">
                    <AnimatePresence>
                        {inView.map((d, index) => (
                            <motion.div
                                key={currentIndex + d.toString() + index}
                                className="flex flex-col items-center w-1/4 px-2"
                                // initial={{ opacity: index == inView.length - 1 ? 0: 1, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: index == 0 ? 0 : 1, x: "-100%" }}
                                transition={{ duration: 0.5 }}
                                style={{ minWidth: '20%' }}
                            >
                                <span className=' flex-1'></span>
                                <div
                                    className={`bg-blue-600 hover:bg-blue-400 transition-all duration-300 cursor-pointer ${selectedLabel === d.label ? 'opacity-50' : 'opacity-100'}`}
                                    style={{ height: map(d, 0, Math.max(...accyearApproved), 0, 85) + "%", width: '100%' }}
                                ></div>
                                <span className="mt-2 text-center">{currentIndex + 2006 + index - 2}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            {selectedLabel && (
                <div className="flex mt-4 overflow-x-auto scrollbar-hidden">
                    {accyearApproved.find(item => item.label === selectedLabel)?.cards.map((card, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-md mx-2" style={{ minWidth: '300px', maxWidth: '90vw' }}>
                            <p className="text-gray-700">{card.content}</p>
                            <div className="flex mt-2">
                                {card.carousel.map((item, idx) => (
                                    <div key={idx} className="bg-gray-300 rounded-md px-3 py-1 mx-1">
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomBarChart1;
