import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <div>
      {props.cards.map(card => {
        return (
          <Link to={`/cards/${card.id}`} key={card.id}>
            <Card card={card} />
          </Link>
        )
      })}
    </div>
  );
}

export default Cards;