import productStyle from "./Product.module.scss"

const Product = ({heading, description, image}) => {

    return (
        <div className={productStyle.product}>
            <h2 className={productStyle.heading}>{heading}<div></div></h2>
            <p className={productStyle.product__text}>{description}</p>
            <img src={image} alt="Product image" className={productStyle.product__img}/>
        </div>
    )

}

export default Product