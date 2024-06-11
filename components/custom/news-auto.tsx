'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

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

    const scrollRef = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [indicies, setIndicies] = useState([0, 1, 2, 3, 4, 5]);

    useEffect(() => {
        // timeoutRef.current = setTimeout(() => {
        //     setIndicies((prev) => {
        //         const newIndicies = [...prev];
        //         newIndicies.push(newIndicies.shift()!);
        //         return newIndicies;
        //     });
        // }, 3000);

        // return () => {
        //     if (timeoutRef.current) {
        //         clearTimeout(timeoutRef.current);
        //     }
        // }
        function handler() {
            setIndicies((prev) => {
                const newIndicies = [...prev];
                newIndicies.push(newIndicies.shift()!);
                return newIndicies;
            });
        }
        if (cardRef.current) {
            cardRef.current.addEventListener('animationend', handler);
        }
        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener('animationend', handler);
            }
        }
    })

    useEffect(() => {
        function handler() {
            if (scrollRef.current) {
                setScroll(scrollRef.current!.scrollLeft / scrollRef.current!.scrollWidth)
            }
            console.log(scrollRef.current?.scrollLeft, scrollRef.current?.scrollWidth, scrollRef.current?.clientWidth)
        }

        function calculateThumbWidth() {
            if (scrollRef.current) {
                const { clientWidth, scrollWidth } = scrollRef.current;
                const thumbWidth = (clientWidth / scrollWidth);
                // const thumbWidth = (clientWidth / scrollWidth) * clientWidth;
                setScrollWidth(thumbWidth);
            }
        };

        calculateThumbWidth();

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handler);
            window.addEventListener('resize', calculateThumbWidth);
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handler);
                window.removeEventListener('resize', calculateThumbWidth);
            }
        }
    }, [scrollRef.current]);

    const indexedNews = indicies.map(i => news[i]);

    return (
        <section className='py-16  overflow-hidden custom-scroll' id="news">
            {/* <h1 className='text-8xl font-bold'>News</h1> */}
            <div ref={scrollRef} className=' p-16 flex gap-16 overflow-x-scroll ' style={{ scrollbarWidth: 'none' }}>
                {indexedNews.map((n, i) => <NewsCard key={i} news={n}
                    delay={i * 100}
                />)}
                <Link
                    href='/news'
                    ref={cardRef} className='card-autoflow'
                    style={{
                        '--start': 'calc(100% + 4rem)',
                    }}
                >
                    <div

                        className=' relative rounded-xl overflow-hidden h-full w-[300px]'>
                        <div className='bg-neutral-700 w-full h-full text-2xl text-white flex justify-center items-center'>
                            See More
                        </div>
                    </div>
                </Link >
            </div>
            <CustomScroll {...{ scroll, scrollWidth }} />
        </section>
    )
}

function CustomScroll({ scroll, scrollWidth }: { scroll: number, scrollWidth: number }) {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='relative w-[40%] min-w-[400px] h-1 bg-neutral-500 rounded-full overflow-hidden'>
                <div style={{
                    width: `${scrollWidth * 100}%`,
                    left: `${scroll * 100}%`,
                }} className='h-full bg-blue-500 absolute rounded-full'></div>
            </div>
        </div>
    )
}

function NewsCard({ news, isLink }: { news?: News, delay?: number, isLink?: boolean }) {
    const elementRef = useRef(null);


    if (isLink) return (
        <Link
            href='/news'
            ref={elementRef} className=''>
            <div

                className=' card-autoflow relative rounded-xl overflow-hidden h-full w-[300px]'>
                <div className='bg-neutral-700 w-full h-full text-2xl text-white flex justify-center items-center'>
                    See More
                </div>
            </div>
        </Link >
    )

    return (
        <div
            ref={elementRef} className='card-autoflow' style={{
                '--start': 'calc(100% + 4rem)',
            }}>
            <div

                className=' relative rounded-xl overflow-hidden h-[450px] w-[300px]'>
                {
                    news!.image ?
                        <img src={news!.image} className='w-full h-full object-cover' alt='img  ' /> :
                        <div className='bg-neutral-700 w-full h-full'></div>
                }
                <div className='absolute inset-0 p-4 group flex flex-col hover:opacity-100 opacity-0 justify-end transition-all cursor-pointer custom-mask'>
                    <div className="absolute inset-0 z-[1] bg-black opacity-55"></div>
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