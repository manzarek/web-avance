import SingleProduct from './SingleProduct'

const ManyProducts = ({products, onDeleteMany, onModify}) => {
    return(
        <>
            {products.map((product)=>(
                <SingleProduct product={product} key={product.id} onModify={onModify} onDelete={onDeleteMany}/>
            ))}
        </>
    )
}

export default ManyProducts