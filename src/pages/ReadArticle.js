import React, { useEffect, useState } from 'react'
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import { useParams } from 'react-router-dom';
import CardArticle from "../component/CardArticle";




export default function Articles() {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "article/" + id)
            .then(response => response.json())
            .then(data => setArticles(data))
    }, []);

    console.log(articles)
    console.log(process.env.REACT_APP_API_URL + "article/" + id)
    return (
        <div>
            <HeaderNavbar/>

            <Footer/>
        </div>
    )
}
