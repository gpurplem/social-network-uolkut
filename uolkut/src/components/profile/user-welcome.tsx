import './user-welcome.css';

interface propsInterface {
    name: string;
}

const UserWelcome: React.FC<propsInterface> = (props) => {
    return (
        <div>
            <span className='user-welcome__welcome-text'>Boa tarde, {props.name}</span>
            <div className='user-welcome__balloon-wrapper'>
                <div className='user-welcome__balloon-triangle'></div>
                <div className="user-welcome__balloon">Programar sem café é igual poeta sem poesia.</div>
            </div>
        </div>
    );
}

export default UserWelcome;
