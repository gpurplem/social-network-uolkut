import "./friends-card.css";
import photo1 from "../profile/images/profile-pic (1).jpg";
import photo2 from "../profile/images/profile-pic (2).jpg";
import photo3 from "../profile/images/profile-pic (3).jpg";
import photo4 from "../profile/images/profile-pic (4).jpg";
import photo5 from "../profile/images/profile-pic (5).jpg";
import photo6 from "../profile/images/profile-pic (6).jpg";
import photo7 from "../profile/images/profile-pic (7).jpg";
import photo8 from "../profile/images/profile-pic (8).jpg";
import photo9 from "../profile/images/profile-pic (9).jpg";


const Friends: React.FC = () => {
    return (
        <div className='friends-card__card-outer'>
            <div className='friends-card__card-inner'>
                <header className="friends-card__header">
                    <span>Amigos (248)</span>
                    <span>Ver todos</span>
                </header>
                <section className="friends-card__body">
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo1} alt="Friend" />
                            <span>Fernando</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo2} alt="Friend" />
                            <span>Ana</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo3} alt="Friend" />
                            <span>Carlos</span>
                        </div>
                    </div>
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo4} alt="Friend" />
                            <span>Vitor</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo5} alt="Friend" />
                            <span>Matheus</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo6} alt="Friend" />
                            <span>Ramos</span>
                        </div>
                    </div>
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo7} alt="Friend" />
                            <span>Eiji</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo8} alt="Friend" />
                            <span>Julia</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-thumb" src={photo9} alt="Friend" />
                            <span>Carol</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Friends;
