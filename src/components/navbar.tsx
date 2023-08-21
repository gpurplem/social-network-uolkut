import './navbar.css'
import mainLogo from '../UOLkut.svg'

interface propsInterface {
    page: string;
}

const Navbar: React.FC<propsInterface> = (props) => {
    let content;

    if (props.page === 'logged-out') {
        content = (
            <>
                <div className="navbar-group__left">
                    <img className='navbar-image' src={mainLogo} alt="Logo for UOLkut" />
                </div>
                <div className="navbar-group__right">
                    <span className='navbar-text navbar-text-loggedout'>Centro de segurança</span>
                </div>
            </>
        );
    } else if (props.page === 'logged-in') {
        <>
            <div className="navbar-group__left">
                <img className='navbar-image' src={mainLogo} alt="Logo for UOLkut" />
            </div>
            <div className="navbar-group__right">
                <span className='navbar-text navbar-text-loggedout'>Centro de segurança</span>
            </div>
        </>
    }

    return (
        <nav className="navbar">
            <div className='navbar-content navbar-content-loogedout'>
                {content}
            </div>
        </nav>
    );
}

export default Navbar;