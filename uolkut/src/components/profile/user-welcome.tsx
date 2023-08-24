import './user-welcome.css';

const UserWelcome: React.FC = () => {
    return (
        <div>
            <span className='user-welcome__welcome-text'>Boa tarde, Iuri Silva</span>
            <div className='user-welcome__balloon-wrapper'>
                <div className='user-welcome__balloon-triangle'></div>
                <div className="user-welcome__balloon">Programar sem café é igual poeta sem poesia.</div>
            </div>
        </div>
    );
}

export default UserWelcome;
