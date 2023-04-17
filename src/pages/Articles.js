import React, { useEffect, useState, useCallback } from 'react';
import HeaderNavbar from './../component/layout/headers';
import CardArticle from '../component/CardArticle';
import Footer from './../component/layout/footer';
import CardBanner from './../component/CardBannerArticle';
import { Pagination } from "@mui/material";


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}article?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.data);
                setLastPage(data.last_page);
            });
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            <HeaderNavbar />
            <h2>Nos articles</h2>
            <div className='backgroundCover formArticle'>
                {articles.slice(0, 3).map((article) => (
                    <div key={article.id}>
                        <CardBanner item={article} />
                    </div>
                ))}
            </div>

            <div className='formArticle'>
                {articles.map((article) => (
                    <div key={article.id}>
                        <CardArticle item={article} />
                    </div>
                ))}
            </div>
            <div className='pagination'>
                <Pagination count={lastPage} page={currentPage} onChange={handlePageChange} variant="outlined" />
            </div>
            <Footer />
        </div>
    );
}