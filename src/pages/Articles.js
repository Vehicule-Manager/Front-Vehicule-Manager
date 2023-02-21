import React, {useState} from 'react'
import HeaderNavbar from './../component/layout/headers';
import logo from '../logoCar.png';
import Footer from './../component/layout/footer';
import {Card, Dimmer, Icon, Image} from "semantic-ui-react";
import CardExampleCardProps from "../component/CardAuto";

export default function Articles() {
    return (
        <div>
            <HeaderNavbar/>
            <h1>Article</h1>
            <Image src={logo} size='medium' wrapped/>
            <p>
                Lorem ipsum dolor sit amet. Eos voluptatem accusantium qui incidunt
                perspiciatis in quia ipsam At magni obcaecati ut porro ipsam et placeat nemo qui perspiciatis
                maiores. Et laudantium magnam est optio reiciendis a dolor dolorem aut omnis blanditiis.
            </p>
            <p>
                Ut vitae saepe ea libero quia cum optio eaque et atque iure est quisquam dolores est provident
                eligendi
                non blanditiis culpa. 33 provident cumque id nemo repudiandae eos officia fugit est inventore animi.
                Quo repellendus animi et velit saepe quo atque nesciunt aut earum quasi.
            </p>
            <p>
                Ad aperiam
                dignissimos ex voluptas quibusdam a nostrum quia ut quisquam temporibus. Id fugiat ipsum ut vitae
                accusantium non aperiam expedita? Ut eius neque est quisquam reprehenderit in dolorem esse aut sunt
                quidem qui dolorum possimus.
            </p>
            <div className="ArticleContainer">
                <CardExampleCardProps/>
                <div className="ArticleText">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet. Eos voluptatem accusantium qui incidunt
                        perspiciatis in quia ipsam At magni obcaecati ut porro ipsam et placeat nemo qui perspiciatis
                        maiores. Et laudantium magnam est optio reiciendis a dolor dolorem aut omnis blanditiis. Lorem
                        ipsum
                        dolor sit amet.
                        <br/>
                        Eos voluptatem accusantium qui incidunt
                        perspiciatis in quia ipsam At magni obcaecati ut porro ipsam et placeat nemo qui perspiciatis
                        maiores. Et laudantium magnam est optio reiciendis a dolor dolorem aut omnis blanditiis. Lorem
                        ipsum
                        dolor sit amet.
                        <br/>Eos voluptatem accusantium qui incidunt
                        perspiciatis in quia ipsam At magni obcaecati ut porro ipsam et placeat nemo qui perspiciatis
                        maiores. Et laudantium magnam est optio reiciendis a dolor dolorem aut omnis blanditiis. </p>
                </div>
            </div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet. Eos voluptatem accusantium qui incidunt
                perspiciatis in quia ipsam At magni obcaecati ut porro ipsam et placeat nemo qui perspiciatis
                maiores. Et laudantium magnam est optio reiciendis a dolor dolorem aut omnis blanditiis. </p>
            <Footer/>
        </div>
    )

}