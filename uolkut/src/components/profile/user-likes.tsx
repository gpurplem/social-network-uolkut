const UserLikes: React.FC = () => {
    return (
        <div className="user-info-all">
            <div>
                <span className='user-likes__label'>Músicas:</span>
                <span className='user-likes__data'>Trap</span>
                <a href="." className='user-likes__link'>Ver todos</a>
            </div>

            <div>
                <span className='user-likes__label'>Filmes:</span>
                <span className='user-likes__data'>A rede social</span>
                <a href="." className='user-likes__link'>Ver todos</a>
            </div>
        </div>
    );
}

export default UserLikes;