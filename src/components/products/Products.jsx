import React from "react";
import ProductsHeading from "./products-heading/ProductsHeading.jsx";
import Product from './product/Product.jsx'
import "./Products.css"
import viaImage from "../../assets/img/via/via_2.png"
import shiftIMage from "../../assets/img/shift/shift_2.png"

const Products = () => {

    return(
        <>
            <ProductsHeading></ProductsHeading>
            <div className="products__container">
                <Product heading="Via" description="Business travel automatization software." image={viaImage}></Product>
                <Product heading="Shift" description="Central base of transfered mobile and fixed numbers." image={shiftIMage}></Product>
            </div>
        </>
    )

}

export default Products