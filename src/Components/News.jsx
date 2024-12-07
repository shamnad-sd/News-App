import React, { useEffect, useState } from 'react'
import noImg from '../assets/images/no-img.png'
import './News.css'
import axios from 'axios'

const Categories = [
    'General',
    'World',
    'business',
    'Technology',
    'Entertainment',
    'Sports',
    'Health',
    'Nation',
    
]


const News = () => {
    const [headline , setHeadline]=useState(null)
    const [news,setNews]=useState([])

    const [selectedCategory, setSelectedCategory]= useState ('General')

    useEffect(()=>{
        const fetchNews = async () => {
            const url ="https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=ff18467843face6da195189500c10392";
            const response = await axios.get(url)
            

            const fetchedNews = response.data.articles;
            
            fetchedNews.forEach((article)=>{
                if (!article.image) {
                    article.image = noImg;
                }
            })

            setHeadline(fetchedNews[0])
            setNews(fetchedNews.slice(1 , 7))
        }

        

        // fetchNews()
    },[selectedCategory])


    return (
        <div className='news-app'>
            <div className="news-header">
                <h1 className='logo'>News App</h1>
            </div>
            <div className="news-content">
                <nav className='navbar'>
                    <h1 className='nav-heading'>
                        Categories
                    </h1>
                    <div className="Categories">
                        <a href="" className="nav-link">General</a>
                        <a href="" className="nav-link">World</a>
                        <a href="" className="nav-link">business</a>
                        <a href="" className="nav-link">Technology</a>
                        <a href="" className="nav-link">Entertainment</a>
                        <a href="" className="nav-link">Sports</a>
                        <a href="" className="nav-link">Science</a>
                        <a href="" className="nav-link">Health</a>
                        <a href="" className="nav-link">Nation</a>
                    </div>
                </nav>
                <div className="news-section">
                    {headline && (
                        <div className="headline">
                        <img src={headline.image || noImg} alt={headline.title} />
                        <h2 className="headline-title">
                        {headline.title}</h2>
                    </div>
                    )}
                    
                    <div className="news-grid">
                    {news.map((article, index)=>(

                        <div className="news-grid-item" key={index}>
                            <img src={article.image || noImg} alt={article.title} />
                            <h3>{article.title}</h3>
                        </div>
                    ))}   
                    </div>
                </div>
            </div>
            <footer>
                <p className="copyright">
                    <span>News App</span>
                </p>
                <p>&copy; All Rights Reserved.
                        By Code And Create
                    </p>
            </footer>
        </div>
    )
}

export default News