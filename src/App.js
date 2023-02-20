import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import {Icon} from 'semantic-ui-react';
import './App.css';
import './assets/style/App.scss';
import CardExampleCardProps from './component/CardAuto';
import HeaderNavbar from './component/layout/headers';
import Footer from './component/layout/footer';
import {Routes, Route} from "react-router-dom";
import contact from './pages/Contact';

function App() {
    return (
        <div className="App">

        
            <HeaderNavbar/>
            <h1>Bienvenue sur « Auto Rentals » !</h1>
            <p>
                Vous recherchez un nouveau véhicule en location, que ce soit en LLD ou en LOA, pour votre besoin de déplacement professionnel ou personnel ?</p>

            <p> Nous vous proposons divers choix de marques et de modèles, mais aussi de couleur selon vos préférences
                !</p>

            <p> Si vous le souhaitez, vous pouvez nous contacter par téléphone, par mail ou venir directement sur
                place
                pour obtenir les renseignements souhaités.
            </p>
            <p><strong>*Voir ci-dessous pour obtenir les modalités de contact</strong></p>
            <h2>Nos locations du moment</h2>
            <div className='carousel'>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
                <CardExampleCardProps/>
                <Icon name='angle right' size='big' circular inverted/>

            </div>
            <h2>Nous contacter</h2>
            <div className='contactsContainer'>
                <a className='contactsCard' href='tel:030204204'>
                    <Icon name='phone' size='huge' circular inverted/>
                    <div>03 02 04 20 44</div>
                </a>
                <a className='contactsCard' href='mailto:rien.rien@gmail.com'>
                    <Icon name='mail' size='huge' circular inverted/>
                    <div>rien.rien@gmail.com</div>
                </a>
                <a className='contactsCard' href='https://goo.gl/maps/5WKCjpvjAZpQHQNQ8'>
                    <Icon name='map marker alternate' size='huge' circular inverted/>
                    <div>10 rue belleville <br/>60200 Compiègne</div>
                </a>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
