import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props, i) => (


    <div className="list-attributes" key={props.card.id}>
        <Link to={`/product/${props.card.id}`}>
            <img alt={props.card.title} src={props.card.image} />
            <h3>{props.card.title}</h3>
            <h2>Price : &#8377;{props.card.price}</h2>
            <h3>SKU : {props.card.id}</h3>
        </Link>
        <button>&#x1F6D2; Add to Cart</button>
        <hr />
    </div>
);

export default Card;
