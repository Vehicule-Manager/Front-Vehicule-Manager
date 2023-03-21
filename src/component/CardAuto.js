import { Card, Dimmer, Icon, Image } from 'semantic-ui-react';
import logo from '../logoCar.png';
import React, { useState, useCallback } from 'react';

const CardExampleCardProps = ({ item }) => {
    const [{ active }, setState] = useState({ active: false });

    const handleShow = useCallback(() => {
        setState({ active: true });
    }, []);

    const handleHide = useCallback(() => {
        setState({ active: false });
    }, []);

    const getCarEnergy = () => {
        switch(item.id_energies) {
            case 1:
                return <i className="tint icon gasoline"></i>;
            case 2:
                return <i className="tint icon diesel"></i>;
            case 3:
                return <i className="bolt icon"></i>;
            case 4:
                return (
                    <>
                        <i className="tint icon"></i>/
                        <i className="bolt icon"></i>
                    </>
                );            default:
                return <i className="tint icon gasoline"></i>;
        }
    }

    return (
        <Card >
            <div className='cardImageContainer' onMouseEnter={handleShow} onMouseLeave={handleHide}>
                <Dimmer active={active} onClick={handleHide}>
                    <Image src={logo} size='medium' wrapped />
                </Dimmer>
                <Image src={logo} size='medium' wrapped />
                <div className='cardBadgeContainer'>
                    <div className='cardBadgeIcon'>
                        {getCarEnergy()}
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
                    {item.brand?.name} {item.model?.name}
                </Card.Header>
                <Card.Description>
                    { item.price }€
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
