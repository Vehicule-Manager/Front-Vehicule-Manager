import { Card, Dimmer, Icon, Image } from 'semantic-ui-react';
import logo from '../logoCar.png';
import React, { useEffect, useState, useCallback } from 'react';

const CardExampleCardProps = ({ item: { id_brands, price } }) => {
    const [{ active }, setState] = useState({ active: false });
    const [brand, setBrand] = useState([]);

    const handleShow = useCallback(() => {
        setState({ active: true });
    }, []);

    const handleHide = useCallback(() => {
        setState({ active: false });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL + "brand/" + id_brands);
            const data = await response.json();
            setBrand(data);
        };
        fetchData();
    }, [id_brands]);

    return (
        <Card >
            <div className='cardImageContainer' onMouseEnter={handleShow} onMouseLeave={handleHide}>
                <Dimmer active={active} onClick={handleHide}>
                    <Image src={logo} size='medium' wrapped />
                </Dimmer>
                <Image src={logo} size='medium' wrapped />
                <div className='cardBadgeContainer'>
                    <div className='cardBadgeIcon'>
                        <Icon name='bolt' />
                    </div>
                    <div className='cardBadgeText'>
                        <p>LDD</p>
                    </div>
                    <div className='cardBadgeText'>
                        <p>particulier</p>
                    </div>
                </div>
            </div>
            <Card.Content>
                <Card.Header>
                    { brand['0']?.name }
                </Card.Header>
                <Card.Description>
                    { price }€
                </Card.Description>
                <Card.Content extra>
                    <a href="https://react.semantic-ui.com/views/card/#types-card" target="_blank" className="btn btn-card">
                        Je commande <Icon name='arrow right' />
                    </a>
                </Card.Content>
            </Card.Content>
        </Card>
    );
};

export default CardExampleCardProps;
