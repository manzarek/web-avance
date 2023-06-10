import { Link } from 'react-router-dom'

function PageHeader() {
    return (
        <div className='container'>
            <div className='header-container'>   
                <h1>Distribution Maisonneuve</h1>
                <Link className='link' to='/'>Accueil</Link>
                <Link className='link' to='/catalogue'>Produits</Link>
                <Link className='link' to='/about'>A propos</Link>
            </div>

        </div>
    )

}

export default PageHeader;