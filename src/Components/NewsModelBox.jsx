import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewsModelBox.css'


const NewsModelBox = ({ show, article, onClose }) => {
  if (!show) {
    return null
  }
  return (
    <div className='model-overlay'>
      <div className="model-content">
        <span className="close-button" onClick={onClose}>
          <i className='fa solid fa-xmark'></i>
        </span>
        {article && (
          <>
            <img src={article.image} alt={article.title} className='model-image' />
            <h2 className='modal-title'>{article.title}</h2>
            <p className="model-source">source : {article.source.name}</p>
            <p className="model-date">
              {new Date(article.publishedAt).toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <p className="model-content-text">{article.content}</p>
            <a 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className='read-more-link'>Read more</a>
          </>
        )}

      </div>
    </div>
  )
}

export default NewsModelBox