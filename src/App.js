
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import {Icon} from 'semantic-ui-react';
import './App.css';
import './assets/style/App.scss';
import CardExampleCardProps from'./component/CardAuto';
import HeaderNavbar from './component/layout/headers';
import Footer from './component/layout/footer';

function App() {

return (
        <div className="App">
            <HeaderNavbar />
            <h2>Nos locations du moment</h2>
            <div className='carousel'>
                <CardExampleCardProps />
                <CardExampleCardProps />
                <CardExampleCardProps />
                <CardExampleCardProps />
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
