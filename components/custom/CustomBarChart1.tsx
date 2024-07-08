import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomBarChart1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null);

    const data = [
        {
            label: 'Jan',
            value: 10,
            cards: [
                { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
            ]
        },
        {
            label: 'Feb',
            value: 20,
            cards: [
                { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
                { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
            ]
        },
        
        {
            label: 'Mar',
            value: 50,
            cards: [
                { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
            ]
        },
        {
            label: 'Jan',
            value: 10,
            cards: [
                { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
            ]
        },
        {
            label: 'Feb',
            value: 20,
            cards: [
                { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
                { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
            ]
        },
        
        {
            label: 'Mar',
            value: 50,
            cards: [
                { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
            ]
        },
        {
            label: 'Jan',
            value: 10,
            cards: [
                { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
            ]
        },
        {
            label: 'Feb',
            value: 20,
            cards: [
                { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
                { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
            ]
        },
        
        {
            label: 'Mar',
            value: 50,
            cards: [
                { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
            ]
        },
        {
            label: 'Jan',
            value: 10,
            cards: [
                { id: 1, content: 'Card 1 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 2, content: 'Card 2 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] },
                { id: 3, content: 'Card 3 for Jan', carousel: ['Card 1', 'Card 2', 'Card 3'] }
            ]
        },
        {
            label: 'Feb',
            value: 20,
            cards: [
                { id: 4, content: 'Card 1 for Feb', carousel: ['Card 1', 'Card 2'] },
                { id: 5, content: 'Card 2 for Feb', carousel: ['Card 1', 'Card 2'] }
            ]
        },
        
        {
            label: 'Mar',
            value: 50,
            cards: [
                { id: 6, content: 'Card 1 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 7, content: 'Card 2 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 8, content: 'Card 3 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] },
                { id: 9, content: 'Card 4 for Mar', carousel: ['Card 1', 'Card 2', 'Card 3', 'Card 4'] }
            ]
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTransition(true);
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
                setTransition(false);
            }, 500);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const handleLabelClick = (label: string) => {
        if (selectedLabel === label) {
            setSelectedLabel(null); // Deselect if already selected
        } else {
            setSelectedLabel(label);
        }
    };

    // get only four bars
    const inView = data.slice(currentIndex, currentIndex + 5);
    if (currentIndex + 5 > data.length) {
        inView.push(...data.slice(0, 5 - inView.length));
    }

    console.log(inView.map(i => i.label))

    return (
        <div className="w-4/5 max-w-2xl mx-auto overflow-hidden">
            <div className="flex relative" style={{ width: '100%', overflow: 'hidden' }}>
                <motion.div
                    className="flex w-full"
                    style={{
                        // width: `${data.length * 25}%`,
                        // transform: `translateX(-${currentIndex * 27}%)`,
                        // transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <AnimatePresence>

                        {inView.map((d, index) => (
                            <motion.div
                                key={currentIndex + d.label + index}
                                className="flex flex-col items-center w-1/4 px-2"
                                // initial={{ opacity: index == inView.length - 1 ? 0: 1, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: index == 0 ? 0: 1, x: "-100%" }}
                                transition={{ duration: 0.5 }}
                                style={{ minWidth: '25%' }}
                            >
                                <span className=' flex-1'></span>
                                <div
                                    className={`bg-blue-600 hover:bg-blue-400 transition-all duration-300 cursor-pointer ${selectedLabel === d.label ? 'opacity-50' : 'opacity-100'}`}
                                    style={{ height: `${d.value}px`, width: '100%' }}
                                    onClick={() => handleLabelClick(d.label)}
                                ></div>
                                <span className="mt-2 text-center">{d.label}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            {selectedLabel && (
                <div className="flex mt-4 overflow-x-auto scrollbar-hidden">
                    {data.find(item => item.label === selectedLabel)?.cards.map((card, index) => (
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
