import React, { useEffect, useState } from 'react'
import HeaderNavbar from './../component/layout/headers';
import CardArticle from '../component/CardArticle';
import logo from '../logoCar.png';
import Footer from './../component/layout/footer';
import { Card, Dimmer, Icon, Image } from "semantic-ui-react";
import CardExampleCardProps from "../component/CardAuto";



export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "article/" + id)
            .then(response => response.json())
            .then(data => setArticles(data))
    }, []);

    return (
        <div>
            <HeaderNavbar/>

            <div className='formArticle '>
                {articles.map(article => (
                    <div>
                        <CardArticle key={article.id} item={article}/>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}