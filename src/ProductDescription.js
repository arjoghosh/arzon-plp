import React from 'react';

const ProductDetails = (props) => {
    return (
        <div>
        <h4>{props.card.title}</h4>
        <h5>{props.card.description}</h5>
        <h3>Price : &#8377;{props.card.price}</h3>
		<img alt={props.card.title} src={props.card.image} height={250}/>
        </div>
    )
}
 
export default ProductDetails;