import React from 'react'
import SearchBar from './searchBar'

function CallToAction() {
    return (
        <section className='bg-blue-600 text-white m-16 p-16 rounded-2xl text-xl'>
            <p>
                Discover comprehensive cancer treatment options effortlessly.
                Explore our intuitive platform for tailored information, empowering you to make informed decisions confidently. Start now!
            </p>
            <div className="relative mx-auto mt-16 w-full max-w-2xl text-black">
                <input
                    type="text"
                    placeholder="Search for..."
                    className="w-full py-3 pl-10 pr-4 text-lg bg-white rounded-full shadow-lg focus:outline-none"
                />
                <div className="absolute top-0 left-0 flex items-center h-full pl-3">
                    🔍
                </div>
            </div>

        </section>
    )
}

export default CallToAction