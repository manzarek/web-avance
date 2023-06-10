import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAdd, onAdd}) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            text={showAdd ? 'Fermer' : 'Ajouter'}  
            color={showAdd ? 'red' : 'green'}
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Liste des produits'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/*const headingStyle = {
    color: 'red', 
    backgroundColor: 'Black'
}*/
export default Header