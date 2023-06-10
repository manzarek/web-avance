import { useState } from 'react'

// Pour ajouter un produit
const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()  

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('SVP ajouter un nom de produit')
            return
        }
        if(!description){
            alert('SVP ajouter une description de produit')
            return
        }
        if(!price){
            alert('SVP ajouter un prix au produit')
            return
        }
        if(!category){
            alert('SVP ajouter une catégorie au produit')
            return
        }
        onAdd({name, description, price, category})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nom du produit</label>
                <input
                type="text"
                placeholder="Ajouter un nom de produit"
                value={name}
                onChange = { (e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input
                type="text"
                placeholder="Ajouter une description de produit"
                value={description}
                onChange = { (e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Prix</label>
                <input
                type="number"
                step="0.01"
                placeholder="Ajouter un prix pour le produit"
                value={price}
                onChange = { (e) => setPrice(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Catégorie</label>
                <input
                type="text"
                placeholder="Ajouter une catégorie de produit"
                value={category}
                onChange = { (e) => setCategory(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Sauvegarder le produit"/>
        </form>
    )
}
export default AddProduct