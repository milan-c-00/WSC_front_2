import React from "react";
import "./Product.css"

const Product = ({heading, description, image}) => {

    return (
        <div className="product">
            <h2 className="product__heading">{heading}<div></div></h2>
            <p className="product__text">{description}</p>
            <img src={image} alt="Product image" className="product__img"/>
        </div>
    )

}

export default Product