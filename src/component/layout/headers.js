import {Menu, Icon} from 'semantic-ui-react';
import { useState} from "react";
import React from 'react';

const HeaderNavbar = () => {
    const [activeItem, setActiveItem] = useState("home");
    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
    }

    return (
        <Menu>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            >
                <a href="/"><Icon name='car' size='big' circular inverted color='black'/></a>
            </Menu.Item>
            <Menu.Item
                name='location'
                active={activeItem === 'location'}
                onClick={handleItemClick}
            >
                <a href="/location">Location</a>
            </Menu.Item>
            {/*<Menu.Item*/}
            {/*    name='contact'*/}
            {/*    active={activeItem === 'contact'}*/}
            {/*    onClick={handleItemClick}*/}
            {/*>*/}
            {/*    <a href="/contact">Contact</a>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item*/}
            {/*    name='service'*/}
            {/*    active={activeItem === 'services'}*/}
            {/*    onClick={handleItemClick}*/}
            {/*>*/}
            {/*    <a href="/services">Service</a>*/}
            {/*</Menu.Item>*/}
            <Menu.Item
                name='article'
                active={activeItem === 'article'}
                onClick={handleItemClick}
            >
                <a href="/article">Articles</a>
            </Menu.Item>
            {/*<Menu.Menu position='right'>
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
            </Menu.Menu>*/}
        </Menu>)
}

export default HeaderNavbar
