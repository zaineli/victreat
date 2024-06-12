'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

type News = {
    title: string
    image?: string
    date: Date
}

function News() {
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
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            image: "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: new Date('2022-01-03')
        },
    ]

    return (
        <section className='py-16  overflow-hidden custom-scroll' id="news">
            {/* <h1 className='text-8xl font-bold'>News</h1> */}
            <div className=' p-16 px-64 flex gap-16 overflow-x-scroll ' style={{scrollbarWidth: 'none'}}>
                {news.map((n, i) => <NewsCard key={i} news={n}
                    delay={i * 100}
                />)}
                <NewsCard isLink delay={news.length * 100} />
            </div>
        </section>
    )
}

function NewsCard({ news, delay, isLink }: { news?: News, delay?: number, isLink?: boolean }) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay)
                        // observer.disconnect(); // Optional: Disconnect after first visibility detection
                    } else if (isVisible) {
                        setTimeout(() => {
                            setIsVisible(false);
                        }, delay)
                    }
                });
            },
            { threshold: 0.05 } // Trigger when 20% of the element is visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef.current, isVisible, delay]);

    if (isLink) return (
        <Link
            href='/news'
            style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease-in-out'
            }}
            ref={elementRef} className=''>
            <div

                className=' relative rounded-xl overflow-hidden h-full w-[300px]'>
                <div className='bg-neutral-700 w-full h-full text-2xl text-white flex justify-center items-center'>
                    See More
                </div>
            </div>
        </Link >
    )

    return (
        <div
            style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s ease-in-out'
            }}
            ref={elementRef} className=''>
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



export default News