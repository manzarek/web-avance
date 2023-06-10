import { FaTimes } from 'react-icons/fa'
import { ImPencil2 } from 'react-icons/im'

const SingleProduct = ({product, onDelete, onModify}) => {
    return(
        <div className='product'>
            <h3>{product.name}
                <div className='btn-group'>
                    <ImPencil2 onClick = {() =>onModify(product.id)}/>
                    <FaTimes
                    style={{ color: 'red'}}
                    onClick = {() =>onDelete(product.id)}/>
                </div>
            </h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
        </div>
    )
}

export default SingleProduct