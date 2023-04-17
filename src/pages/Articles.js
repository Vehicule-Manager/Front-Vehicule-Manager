import React, { useEffect, useState } from 'react'
import HeaderNavbar from './../component/layout/headers';
import CardArticle from '../component/CardArticle';
import Footer from './../component/layout/footer';
import CardBanner from './../component/CardBannerArticle';



export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "article")
            .then(response => response.json())
            .then(data => setArticles(data))
    }, []);


    return (
        <div>
            <HeaderNavbar />
            <h2>Nos articles</h2>
            <div className='backgroundCover formArticle'>
                {articles.slice(0,3).map(article => (
                    <div>
                        <CardBanner key={article.id} item={article} />
                    </div>
                ))}
            </div>

            <div className='formArticle '>
                {articles.map(article => (
                    <div>
                        <CardArticle key={article.id} item={article} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
