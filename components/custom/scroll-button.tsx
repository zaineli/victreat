import { FaChevronUp } from "react-icons/fa";
import React, { useEffect, useState } from 'react'

function ScrollButton() {
    const [percent, setPercent] = useState(0)
    useEffect(() => {
        function handler() {
            const scroll = window.scrollY
            const height = document.body.scrollHeight - window.innerHeight
            const percent = scroll / height
            setPercent(percent)
        }
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])


    return (
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed bottom-0 right-0 translate-x-[-50%] cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300 translate-y-[-50%] bg-[#D2F2BF] md:w-24 md:h-24 h-20 w-20 rounded-full z-[100] p-1' style={{
                background: `conic-gradient( #342433 ${percent * 100}%, #D2F2BF 0)`
            }}>
            <span className='w-full h-full   bg-[#D2F2BF] rounded-full flex pointer-events-none justify-center items-center'>
                <FaChevronUp className='text-white text-4xl pointer-events-none' />
            </span>
        </div>
    )
}

export default ScrollButton