import React from 'react'
import WheelCarousel from './wheelCarousel'

function MutationSection() {
  return (
    <div className='flex gap-16 p-32 rounded-2xl bg-neutral-500  text-white'>
        <WheelCarousel className='flex-1'/>
        <div className="flex">
            <svg width={"128px"} height={'128px'} viewBox='0 0 100 100'>
                <path d="M0,100 C50,100 50,0 100,0 " fill='none' stroke='black' strokeWidth={2}/>
            </svg>         
        </div>
    </div>
  )
}

export default MutationSection