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
                <Icon name='car' size='big' circular inverted color='black'/>
            </Menu.Item>
            <Menu.Item
                name='location'
                active={activeItem === 'location'}
                onClick={handleItemClick}
            >
                Location
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
