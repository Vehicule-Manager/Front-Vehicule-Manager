import { Menu, Icon, Divider } from 'semantic-ui-react';
import { useState } from "react";
import React from 'react';

const Footer = () => {

    return (
        <div className='FooterBackground'>
            <h2 className="divider line one-line " contenteditable><Icon name='car' size='large' circular inverted color='black' /></h2>
            <div className='containerFooter'>
                <div>
                    <h3>Horraires d'ouverture garage</h3>
                    <p>Lundi : Fermé</p>
                    <p>Mardi : 10h - 18h</p>
                    <p>Mercredi : 10h - 18h</p>
                    <p>Jeudi : 10h - 18h</p>
                    <p>Vendredi : 10h - 18h</p>
                    <p>Samedi : 10h - 18h</p>
                    <p>Dimanche : Fermé</p>

                </div>
                <div className='borderDivision'></div>
                <div>
                    <h2>Qui sommes-nous ?</h2>
                    <h3>Auto Rentals</h3>
                    <a className='contactsCard' href='https://goo.gl/maps/5WKCjpvjAZpQHQNQ8'>
                        
                        <div><Icon name='map marker alternate' size='small' circular inverted /> 10 rue belleville 60200 Compiègne</div>
                    </a>
                    <a className='contactsCard' href='tel:030204204'>
                        <div> <Icon name='phone' size='small' circular inverted /> 030204204</div>
                    </a>
                    <a className='contactsCard' href='mailto:rien.rien@gmail.com'>
                        <div>  <Icon name='mail' size='small' circular inverted /> rien.rien@gmail.com</div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer;