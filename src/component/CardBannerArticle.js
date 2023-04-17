import React from 'react'
import { Card, Button, Image, Icon } from 'semantic-ui-react';

const CardBanner = ({ item }) => {

    if (item.content.length >= 150) {
        item.content = item.content.substring(0, 147) + "...";
    }

    item.updated_at = item.updated_at.substring(0, 10);
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <div className='headerBannerArticle'>
                        <Icon name='bullhorn' size='small' circular inverted color='grey' />
                    </div>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Meta>Mise à jour le : {item.updated_at}</Card.Meta>
                    <Card.Description>
                        {item.content}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default CardBanner;
