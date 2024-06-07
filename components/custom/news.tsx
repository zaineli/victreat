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
        }
    ]
    
   return (
        <section className=''>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>News</h1>
                <div className='flex gap-2'>
                    <button>Latest</button>
                    <button>Popular</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {news.map((n, i) => <NewsCard key={i} news={n} />)}
            </div>
        </section>
    )
}

function NewsCard({ news }: { news: News }) {
    return (
        <div className=''>
            <div className=''>
                <img src={news.image} alt={news.title} />
            </div>
            <div className=''>
                <h2>{news.title}</h2>
                <p>{news.date.toDateString()}</p>
            </div>
        </div>
    )
}

export default News