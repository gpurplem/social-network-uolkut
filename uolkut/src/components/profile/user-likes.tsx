import './user-likes.css';

const UserLikes: React.FC = () => {
    return (
        <div className="user-likes__wrapper">
            <div className="user-likes-item">
                <span className='user-likes__label'>Músicas:</span>
                <span className='user-likes__data'>Trap</span>
                <a href="." className='user-likes__link'>Ver todos</a>
            </div>

            <div className="user-likes-item">
                <span className='user-likes__label'>Filmes:</span>
                <span className='user-likes__data'>A rede social</span>
                <a href="." className='user-likes__link'>Ver todos</a>
            </div>
        </div>
    );
}

export default UserLikes;