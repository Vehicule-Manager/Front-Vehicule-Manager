import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import {Icon} from 'semantic-ui-react';
import './../App.css';
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';

export default function Leasing() {
    return (
        <div className="Home">
            <HeaderNavbar/>
            <div className='carousel'>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
            </div>
            <div className='carousel'>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
            </div>
            <Footer/>
        </div>
    );
}
