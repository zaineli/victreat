import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalSlider = ({ onScrollLeft, onScrollRight, currentIndex, maxIndex }) => {
    return (
        <div className="flex items-center justify-center mt-4">
            <button 
                onClick={onScrollLeft} 
                className="p-2 bg-gray-300 rounded-full mr-2 disabled:opacity-50" 
                disabled={currentIndex <= 0}
            >
                <FaChevronLeft />
            </button>
            <div className="flex-1 h-2 bg-gray-200 rounded-full relative mx-2">
                <div 
                    className="bg-blue-500 h-2 rounded-full absolute" 
                    style={{ width: `${(currentIndex / maxIndex) * 100}%` }}
                ></div>
            </div>
            <button 
                onClick={onScrollRight} 
                className="p-2 bg-gray-300 rounded-full ml-2 disabled:opacity-50" 
                disabled={currentIndex >= maxIndex}
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default HorizontalSlider;
