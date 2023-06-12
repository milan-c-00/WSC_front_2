import productStyle from "./ProductsHeading.module.scss"

const ProductsHeading = () => {

    return (
        <div>
            <h1 className={productStyle.heading}>Take a look at <div>our products</div></h1>
        </div>
    )

}

export default ProductsHeading