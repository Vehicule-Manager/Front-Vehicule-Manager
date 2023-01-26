
import 'semantic-ui-css/semantic.min.css';
import React, {useEffect, useState} from 'react'
import {Card, Dimmer, Icon, Menu, Image, Segment} from 'semantic-ui-react'
import './App.css';
import CardExampleCardProps from'./component/CardAuto';

function App() {

    const [activeItem, setActiveItem] = useState("home");


    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
    }

return (
        <div className="App">
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                >
                    <Icon name='car' size='big' circular inverted color='black'/>
                </Menu.Item>
                <Menu.Item
                    name='browse'
                    active={activeItem === 'browse'}
                    onClick={handleItemClick}
                >
                    Browse
                </Menu.Item>

                <Menu.Item
                    name='submit'
                    active={activeItem === 'submit'}
                    onClick={handleItemClick}
                >
                    Submit
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={handleItemClick}
                    >
                        Sign Up
                    </Menu.Item>

                    <Menu.Item
                        name='help'
                        active={activeItem === 'help'}
                        onClick={handleItemClick}
                    >
                        Help
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
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
                    <div>030204204</div>
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
        </div>
    );
}

export default App;
