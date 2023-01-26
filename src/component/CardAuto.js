import {Card, Dimmer, Icon, Image} from 'semantic-ui-react'
import logo from '../logoCar.png';
import React, {useState} from 'react'

const CardExampleCardProps = () => {
  const [active, setActive] = useState(false);
  const handleShow = () => {
    setActive(true);
  }
  const handleHide = () => {
    setActive(false);
  }

    return (
    <Card onMouseEnter={handleShow} onMouseLeave={handleHide}>
        <div className='cardImageContainer' >
            <Dimmer active={active} onClick={handleHide}>
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
        </Card.Content>
    </Card>
    )
}

export default CardExampleCardProps
