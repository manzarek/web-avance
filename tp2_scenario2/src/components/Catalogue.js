import { useState, useEffect } from 'react'
import Header from './Header'
import ManyProducts from './ManyProducts'
import AddProduct from './AddProduct'
import ModifyProduct from './ModifyProduct'

function Catalogue() {
  
  // Global
  const [products, setProducts] = useState([])

 useEffect(()=>{
  const getProducts = async () =>{
    const productFromServer = await fetchProducts()
    setProducts(productFromServer)
  }
  getProducts()
 }, []) 

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

// Delete
const deleteProduct =  async (id) => {

  await fetch(`http://localhost:5000/products/${id}`, {
    method: 'DELETE'
  })
  setProducts(products.filter((product) => product.id !== id))
}

// Insert
const addProduct = async (product) => {

  const res = await fetch('http://localhost:5000/products', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })

  const newProduct = await res.json()
  setProducts([...products, newProduct])
} 

// Modification du produit
const modifyProduct = async (product) => {

  const updProduct = { ...product}
  const id = product.id

  const res = await fetch(`http://localhost:5000/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updProduct)
  })
  const data = await res.json()

  setProducts(products.map((product)=> product.id === id ? {...product, name:data.name, description:data.description, price:data.price, category:data.category} : product))
  setShowModifyProduct(false)
} 

// Toggle form
const [showAddProduct, setShowAddProduct] = useState(false)
const [showModifyProduct, setShowModifyProduct] = useState(false)
const [productIdModification, setProductIdModification] = useState(0);

  return (
      <div className='container'>
        <Header showAdd={showAddProduct} onAdd={() => {setShowAddProduct(!showAddProduct);setShowModifyProduct(false)}}/>

        { showAddProduct &&
          <AddProduct onAdd={addProduct}/>
        }

        { showModifyProduct &&
          <ModifyProduct onModify={modifyProduct} products={products} productId={productIdModification} />
        }

        {products.length > 0 ? (
          <ManyProducts products={products} onModify={(id) => {setShowModifyProduct(!showModifyProduct); setProductIdModification(id); setShowAddProduct(false)}} onDeleteMany={deleteProduct}/> 
        ):(
          'Aucun produit'
        )}


      </div>
  );
        
}

export default Catalogue;