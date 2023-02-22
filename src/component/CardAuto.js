import {Card, Dimmer, Icon, Image} from 'semantic-ui-react'
import logo from '../logoCar.png';
import React, {useEffect, useState} from 'react'

const CardExampleCardProps = () => {
  const [active, setActive] = useState(false);

  const [count, setCount] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "employee/1")
            .then(response => response.json())
            .then(data => setCount(data));
        // .then(data => this.setState({ postId: data.id }));
    });
  const handleShow = () => {
    setActive(true);
  }
  const handleHide = () => {
    setActive(false);
  }
    console.log(count['0']?.job)
    return (
    <Card >
        <div className='cardImageContainer' onMouseEnter={handleShow} onMouseLeave={handleHide} >
            <Dimmer active={active} onClick={handleHide} >
                <Image src={logo} size='medium' wrapped />
            </Dimmer>
            <Image src={logo} size='medium' wrapped  />
            <div className='cardBadgeContainer'>
                <div className='cardBadgeIcon'>
                    <Icon name='bolt'/>
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
                Model
            </Card.Header>
            <Card.Description>
                1000€
            </Card.Description>
            <Card.Content extra>
                <a href="https://react.semantic-ui.com/views/card/#types-card" target="_blank" className="btn btn-card">
                    Je commande <Icon name='arrow right'/>
                </a>
            </Card.Content>
        </Card.Content>
    </Card>
    )
}

export default CardExampleCardProps
