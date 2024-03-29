import React from 'react'
import { Card, Button } from 'semantic-ui-react';
import logo from '../assets/img/bannerArticle.png';

const CardArticle = ({ item }) => {
  const extra = (
    <Button><a href={"/article/" + item.id}>Lire l'article</a></Button>
  )

  if (item.content.length >= 150) {
    item.content = item.content.substring(0, 147) + "...";
  }

  return (
    <a href={'article/' + item.id}>
      <Card className="sizeArticleCard"
        image={logo}
        header={item.title}
        description={item.content}
        extra={extra}
      />
    </a>
  )
}

export default CardArticle;
