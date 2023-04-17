import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react';

const CardBanner = ({ item }) => {
    item.updated_at = item.updated_at.substring(0,10);
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Meta>Mise à jour le : {item.updated_at}</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default CardBanner;
