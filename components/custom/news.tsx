import React from 'react'

type News = {
    title: string
    image?: string
    date: Date
}

function News() {
    const news: News[] = [
        {
            title: 'After eight months of war, here’s what Gaza’s humanitarian crisis looks like',
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            date: new Date('2022-01-03')
        },
        {
            title: 'After eight months of war, here’s what Gaza’s humanitarian crisis looks like',
            date: new Date('2022-01-01')
        },
        {
            title: 'USA pulls off shock defeat of Pakistan at Men’s T20 Cricket World Cup',
            date: new Date('2022-01-02')
        },
        {
            title: 'India’s newly galvanized opposition strikes back with ‘mandate to save democracy’',
            date: new Date('2022-01-03')
        },
    ]

    return (
        <section className='py-16 mb-96 bg-neutral-300 '>
            <h1 className='text-8xl font-bold'>News</h1>
            <div className=' p-16 px-64 flex gap-16 overflow-scroll'>
                {news.map((n, i) => <NewsCard key={i} news={n} />)}
            </div>
        </section>
    )
}

function NewsCard({ news }: { news: News }) {
    return (
        <div className=''>
            <div className=' rounded-xl overflow-hidden h-[450px] w-[300px]'>
                {
                    news.image ?
                    <img src={news.image} alt='img  ' />:
                    <div className='bg-neutral-700 w-full h-full'></div>
                }
            </div>
            <div className='p-4'>
                <h2 className='text-xl'>{news.title}</h2>
                <p className=''>{news.date.toDateString()}</p>
            </div>
        </div>
    )
}



export default News