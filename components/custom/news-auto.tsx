'use client';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from '@/components/ui/marquee';

type News = {
    title: string
    image?: string
    date: Date
}

function Newss() {
    const news: News[] = [
        {
            title: 'After eight months of war, here’s what Gaza’s humanitarian crisis looks like',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2149987620.jpg?c=16x9&q=h_438,w_780,c_fill',
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            image: 'https://images.unsplash.com/photo-1717313303951-515678b73c8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-03')
        },
        {
            title: 'After eight months of war, here’s what Gaza’s humanitarian crisis looks like',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2149987620.jpg?c=16x9&q=h_438,w_780,c_fill',
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            image: 'https://images.unsplash.com/photo-1717313303951-515678b73c8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-03')
        },
        {
            title: 'After eight months of war, here’s what Gaza’s humanitarian crisis looks like',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2149987620.jpg?c=16x9&q=h_438,w_780,c_fill',
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            image: 'https://images.unsplash.com/photo-1717313303951-515678b73c8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-03')
        },
    ]


    return (
        <section className='py-28 overflow-hidden' id="news">
            <div className="px-4 md:px-12 lg:px-40">
                <h1 className="text-3xl font-semibold mb-8 ">\ News</h1>
            </div>
            <div className=' flex gap-16 max-w-screen overflow-hidden relative' >
                <Marquee pauseOnHover className=''>
                    {news.map((n, i) => <NewsCard news={n} />)}
                </Marquee>
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div> */}
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
            </div>
        </section>
    )
}


function NewsCard({ news }: { news?: News }) {
    const ref = useRef(null);


    // if (isLink) return (
    //     <Link
    //         href='/news'
    //         ref={elementRef} className=''>
    //         <div

    //             className=' card-autoflow relative rounded-xl overflow-hidden h-full w-[300px]'>
    //             <div className='bg-neutral-700 w-full h-full text-2xl text-white flex justify-center items-center'>
    //                 See More
    //             </div>
    //         </div>
    //     </Link >
    // )

    // useEffect(() => {
    //     if (!ref.current) return;

    //     const element = ref.current as HTMLDivElement;
    //     element.animate([
    //         { transform: 'translateX(calc(100% + 2rem))' },
    //         { transform: 'translateX(0)' }
    //     ], {
    //         duration: 1000,
    //         delay: 0,
    //         easing: 'linear',
    //         fill: 'forwards'
    //     });

    // }, [target])

    return (
        <div className='relative'>
            <div

                className=' rounded-xl overflow-hidden h-[450px] w-[300px]'>
                {
                    news!.image ?
                        <img src={news!.image} className='w-full h-full object-cover' alt='img  ' /> :
                        <div className='bg-neutral-700 w-full h-full'></div>
                }
                <div className='absolute inset-0 p-4 group flex flex-col hover:opacity-100 opacity-0 justify-end transition-all cursor-pointer custom-mask'>
                    <div className="absolute inset-0 z-[1] bg-black opacity-55 rounded-xl"></div>
                    <div className=" text-white z-10">

                        <h2 className='text-xl'>{news!.title}</h2>
                        <p className=''>{news!.date.toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Newss