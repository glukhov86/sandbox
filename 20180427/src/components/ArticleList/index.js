import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
    const articleElements = articles.map((article, index) =>
        <li key={index.toString()} className="article-list__li">
            <Article article = {article} defaultOpen = {index === 0} />
        </li>
    )
    return (
        <ul className="article-list__ul">
            {articleElements}
        </ul>
    )
}