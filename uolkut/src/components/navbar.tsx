import './navbar.css'
import mainLogo from '../assets/uolkut-logo.svg'
import userImage from '../assets/profile-pic-user.jpg'
import SearchBar from './search-bar'

interface propsInterface {
    page: string;
    name: string;
}

const Navbar: React.FC<propsInterface> = (props) => {
    let content;
    let navbarContentClass = 'navbar-content ';

    if (props.page === 'logged-out') {
        navbarContentClass += 'navbar-content-loggedout';

        content = (
            <>
                <div className="navbar-group__left">
                    <img className='navbar-logo' src={mainLogo} alt="Logo UOLkut" />
                </div>
                <div className="navbar-group__right">
                    <span className='navbar-text navbar-text-loggedout'>Centro de segurança</span>
                </div>
            </>
        );
    } else if (props.page === 'logged-in') {
        navbarContentClass += 'navbar-content-loggedin';

        content = (
            <>
                <div className="navbar-group__left">
                    <img className='navbar-logo' src={mainLogo} alt="Logo for UOLkut" />
                    <span className="navbar__link">Início</span>
                    <span className="navbar__link navbar__link--active">Perfil</span>
                    <span className="navbar__link">Comunidades</span>
                    <span className="navbar__link">Jogos</span>
                </div>
                <div className="navbar-group__right">
                    <SearchBar parent='navbar' />
                    <div className="navbar__user-profile">
                        <img src={userImage} alt="Usuário" />
                        <span className="navbar__user-name">{props.name}</span>
                        <i className="navbar__arrow-down"></i>
                    </div>
                </div>
            </>
        );
    }

    return (
        <nav className="navbar">
            <div className={navbarContentClass}>
                {content}
            </div>
        </nav>
    );
}

export default Navbar;