import './navbar.css'
import mainLogo from '../assets/uolkut-logo.svg'
import searchIcon from '../assets/search-icon.svg'
import userImage from '../assets/profile-pic-user.jpg'

interface propsInterface {
    page: string;
}

const Navbar: React.FC<propsInterface> = (props) => {
    let content;

    if (props.page === 'logged-out') {
        content = (
            <>
                <div className="navbar-group__left">
                    <img className='navbar-image' src={mainLogo} alt="Logo UOLkut" />
                </div>
                <div className="navbar-group__right">
                    <span className='navbar-text navbar-text-loggedout'>Centro de segurança</span>
                </div>
            </>
        );
    } else if (props.page === 'logged-in') {
        content = (
            <>
                <div className="navbar-group__left">
                    <img className='navbar-image' src={mainLogo} alt="Logo for UOLkut" />
                    <span className="navbar__link">Início</span>
                    <span className="navbar__link profile-link">Perfil</span>
                    <span className="navbar__link">Comunidades</span>
                    <span className="navbar__link">Jogos</span>
                </div>
                <div className="navbar-group__right">
                    <div className="navbar__search-bar-wrapper">
                        <img src={searchIcon} alt="Pesquisar" className="search-icon" />
                        <input type="search" placeholder="Pesquisar no UOLkut" className="navbar__search-bar-content" />
                    </div>
                    <div className="navbar__user-profile">
                        <img src={userImage} alt="Usuário" />
                        <span className="navbar__user-name">Iuri Silva</span>
                        <i className="navbar__arrow-down"></i>
                    </div>
                </div>
            </>
        );
    }

    return (
        <nav className="navbar">
            <div className='navbar-content navbar-content-loggedout'>
                {content}
            </div>
        </nav>
    );
}

export default Navbar;