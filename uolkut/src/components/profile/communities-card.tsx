import "./communities-card.css";
import photo1 from "../profile/images/community-pic (1).jpg";
import photo2 from "../profile/images/community-pic (2).jpg";
import photo3 from "../profile/images/community-pic (3).jpg";
import photo4 from "../profile/images/community-pic (4).jpg";
import photo5 from "../profile/images/community-pic (5).jpg";
import photo6 from "../profile/images/community-pic (6).jpg";
import photo7 from "../profile/images/community-pic (7).jpg";
import photo8 from "../profile/images/community-pic (8).jpg";
import photo9 from "../profile/images/community-pic (9).jpg";

const Communities: React.FC = () => {
    return (
        <div className='communities-card__card-outer'>
            <div className='communities-card__card-inner'>
                <header className="communities-card__header">
                    <span>Comunidade (42)</span>
                    <span>Ver todos</span>
                </header>
                <section className="communities-card__body">
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo1} alt="Community" />
                            <span>Carros</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo2} alt="Community" />
                            <span>Desenhos</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo3} alt="Community" />
                            <span>Crazy</span>
                        </div>
                    </div>
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo4} alt="Community" />
                            <span>Fofos</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo5} alt="Community" />
                            <span>Animes</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo6} alt="Community" />
                            <span>Leitura</span>
                        </div>
                    </div>
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo7} alt="Community" />
                            <span>Meu ovo</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo8} alt="Community" />
                            <span>My books</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-thumb" src={photo9} alt="Community" />
                            <span>Cafeeee</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Communities;
