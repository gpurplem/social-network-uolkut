import './user-welcome.css';

const UserWelcome: React.FC = () => {
    return (
        <div>
            <span className='user-welcome__welcome-text'>Boa tarde, Iuri Silva</span>
            <div className="user-welcome__balloon-box">Programar sem café é igual poeta sem poesia.</div>
        </div>
    );
}

export default UserWelcome;
