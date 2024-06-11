import React from 'react'
import SearchBar from './searchBar'

function CallToAction() {
    return (
        <section className='bg-[#DBE2EC] text-black m-16 p-16 rounded-2xl text-xl'>
            <p>
                Discover comprehensive cancer treatment options effortlessly.
                Explore our intuitive platform for tailored information, empowering you to make informed decisions confidently. Start now!
            </p>
            <div className="w-[36rem] mx-auto mt-8 bg-white rounded-full flex p-1">
            <input type="text" name="" className=" flex-1 bg-transparent text-white py-2 px-4 placeholder:text-grey" id="" placeholder="Search Cancer ..." />
            <button className="px-4 bg-[#DBE2EC] text-white rounded-full">Search</button>
          </div>

        </section>
    )
}

export default CallToAction