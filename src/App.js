import logo from './logoCar.png';
import 'semantic-ui-css/semantic.min.css';
import React, {useEffect, useState} from 'react'
import {Card, Dimmer, Icon, Menu, Image, Segment} from 'semantic-ui-react'
import './App.css';

function App() {
    const [dimmerActive, setDimmerActive] = useState(true);
    const [activeItem, setActiveItem] = useState("home");

    useEffect(() => {

    }, [dimmerActive])

    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
    }
    const handleShow = () => {
        setDimmerActive(true);
    }
    const handleHide = () => {
        setDimmerActive(true);
    }
    const badge = (
        <div className="badgeCar">
            <Icon name='bolt' size='small'/>
        </div>
    )

    const header = (
        <p>
            Model&nbsp;
            <Icon name='user'/>
        </p>
    )

    const CardExampleCardProps = () => (
        <Card>
            <div>
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={false}
                    onMouseEnter={handleShow}
                    onMouseLeave={handleHide}
                    size='medium'
                    src={logo}
                    wrapped
                />
            </div>
            <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description>
                    1000€
                </Card.Description>
            </Card.Content>
        </Card>
    )

    return (
        <div className="App">
            <Menu>
                <Menu.Item
                    name='browse'
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
                <Icon name='angle right' size='huge' circular inverted/>

            </div>
            <h2>Nous contacter</h2>
            <div className='contactsContainer'>
                <div className='contactsCard'>
                    <Icon name='phone' size='huge' circular inverted color='black'/>
                    <a>030204204</a>
                </div>
                <div className='contactsCard'>
                    <Icon name='mail' size='huge' circular inverted color='black'/>
                    <a>rien.rien@gmail.com</a>
                </div>
                <div className='contactsCard'>
                    <Icon name='map marker alternate' size='huge' circular inverted color='black'/>
                    <a>10 rue belleville <br/>60200 Compiègne</a>
                </div>
            </div>
        </div>
    );
}

export default App;
