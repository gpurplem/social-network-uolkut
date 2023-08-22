import Card from "./card";
import UolkutCircle from "../assets/uolkut-circle.svg";
import './accessFormCard.css'

interface propsInterface {
    form: string;
}

const AccessFormCard: React.FC<propsInterface> = (props) => {
    return (
        <Card>
            <header className="card-header">
                <img src={UolkutCircle} alt="Uolkut ícone" className="card-header__icon" />
                <span className="card-header__text">Accesse o UOLkut</span>
            </header>

            <section className="card-body">
                <form action="" className="card-body__form">
                    <input type="email" name="" id="" placeholder="E-mail" className="card-body__email" />

                    <input type="password" name="" id="" placeholder="Senha" className="card-body__password" />

                    <div className="card-body__checkbox-wrapper">
                        <input type="checkbox" name="remember-check" id="" className="card-body__checkbox" />
                        <label htmlFor="remember-check" className="card-body__label">Lembrar minha senha</label>
                    </div>

                    <button type="submit" className="card-body__login-button">Entrar</button>

                    <button type="button" className="card-body__signup-button">Criar conta</button>

                    <a href="." className="card-body__link">Esqueci a minha senha</a>

                </form>
            </section>
        </Card>
    );
}

export default AccessFormCard;