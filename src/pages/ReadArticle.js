import React, { useEffect, useState } from 'react'
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import { useParams } from 'react-router-dom';
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import CardArticle from "../component/CardArticle";




export default function Articles() {
    const [article, setArticle] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "article/" + id)
            .then(response => response.json())
            .then(data => setArticle(data['0']))
    }, []);

    console.log(article)
    return (
        <div>
            <HeaderNavbar/>
            <div className="ArticleContainer">
                <h1>{article.title}</h1>
                <div className="content">
                    <p>{article.content}</p>
                </div>
                <div className="likes">
                    <Button>Like&nbsp;<Icon name='thumbs up outline' circular inverted color='white'/></Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
