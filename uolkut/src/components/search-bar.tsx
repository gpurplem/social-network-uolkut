import searchIcon from '../assets/search-icon.svg'
import './search-bar.css'

interface propsInterface {
    parent: string;
}

const SearchBar: React.FC<propsInterface> = (props) => {
    const searchBarClass = props.parent === 'navbar' ? 'navbar__search-bar-wrapper' : 'search-bar-wrapper';

    return (
        <div className={searchBarClass}>
            <img src={searchIcon} alt="Pesquisar" className="navbar__search-icon" />
            <input type="search" placeholder="Pesquisar no UOLkut" className="navbar__search-bar-content" />
        </div>
    );
}

export default SearchBar;