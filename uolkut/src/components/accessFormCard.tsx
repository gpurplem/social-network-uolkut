import Card from "./card";
import UolkutCircle from "../assets/uolkut-circle.svg";
import './accessFormCard.css'
import { useNavigate } from 'react-router-dom';
import { useScreenSize } from '../useScreenSize';

interface propsInterface {
    form: string;
    setPage: (newValue: string) => void;
}

const AccessFormCard: React.FC<propsInterface> = (props) => {
    let headerText;
    let content;
    let emailPlaceholder = "E-mail";
    const navigate = useNavigate();

    const { isScreenSmall } = useScreenSize();

    function drawSignupPage(event: React.FormEvent) {
        event.preventDefault();
        props.setPage('signup');
    }

    function drawForgotPage(event: React.FormEvent) {
        event.preventDefault();
        props.setPage('forgot-password');
    }

    function drawLoginPage(event: React.FormEvent) {
        event.preventDefault();
        props.setPage('login');
    }

    function loginHandler(event: React.FormEvent) {
        event.preventDefault();
        navigate('/profile');
    }

    if (props.form === 'login') {
        headerText = 'Accesse o UOLkut';

        content = (
            <>
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" />

                <div className="card-body__checkbox-wrapper">
                    <input type="checkbox" name="remember-check" id="" className="card-body__checkbox" />
                    <label htmlFor="remember-check" className="card-body__label">Lembrar minha senha</label>
                </div>

                <button type="submit" className="card-body__login-button" onClick={loginHandler}>Entrar</button>

                <button type="button" className="card-body__signup-button" onClick={drawSignupPage}>Criar conta</button>

                <a href="." className="card-body__link" onClick={drawForgotPage}>Esqueci a minha senha</a>
            </>
        );
    } else if (props.form === 'signup') {
        headerText = 'Cadastre-se no UOLkut';

        content = (
            <>
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" />

                <input type="text" name="" id="" placeholder="Nome" className="card-body__name" />

                <div className="card-body__sigin-wrapper">
                    <div className="card-body__sigin-wrapper-inner">
                        {isScreenSmall ? <input type="text" name="" id="" placeholder="DD/MM/AAAA" className="card-body__date" /> : <input type="text" name="" id="" placeholder="Nascimento" className="card-body__date" />}                  

                        <input type="text" name="" id="" placeholder='Profissão' className="card-body__occupation" />
                    </div>

                    <span className="card-body__date-text">DD/MM/AAAA</span>

                    <div className="card-body__sigin-wrapper-inner">
                        <input type="text" name="" id="" placeholder="País" className="card-body__country" />

                        <input type="text" name="" id="" placeholder="Cidade" className="card-body__city" />
                    </div>
                </div >

                <select name="" id="" className="card-body__select">
                    <option value="" >Relacionamento</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Namorando">Namorando</option>
                    <option value="Preocupado">Preocupado</option>
                </select>

                <button type="submit" className="card-body__login-button">Criar conta</button>
            </>
        );
    } else if (props.form === 'forgot-password') {
        headerText = 'Recupere sua senha';
        emailPlaceholder = "E-mail cadastrado";

        content = (
            <>
                <button type="submit" className="card-body__send-code-button" onClick={drawLoginPage}>Enviar código</button>

                <p className="card-body__remember-subtitle">Lembrou sua Senha?</p>

                <button type="button" className="card-body__return-login-button" onClick={drawLoginPage}>Entrar com as credenciais</button>
            </>
        );
    }

    return (
        <Card>
            <header className="card-header">
                <img src={UolkutCircle} alt="Uolkut ícone" className="card-header__icon" />
                <span className="card-header__text">{headerText}</span>
            </header>

            <section className="card-body">
                <form action="" className="card-body__form">
                    <input type="email" name="" id="" placeholder={emailPlaceholder} className="card-body__email" />

                    {content}

                </form>
            </section>
        </Card>
    );
}

export default AccessFormCard;