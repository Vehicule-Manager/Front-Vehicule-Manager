import React from 'react'
import { Card,Button, Item } from 'semantic-ui-react';
import logo from '../assets/img/bannerArticle.png';

const CardArticle = ({item}) => {
  const extra = (
    <Button><a href="http://google.fr">Lire l'article</a></Button>
  )
  
  if (item.content.length >= 150) {
     item.content = item.content.substring(0,147)+"...";
  } 
   
  return (
    <Card className="sizeCard" 
      image={logo}
      header={item.title}
      description={item.content}
      extra={extra}
    />

    

  )
}

export default CardArticle;
