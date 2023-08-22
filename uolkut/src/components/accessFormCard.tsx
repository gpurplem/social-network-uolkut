import Card from "./card";
import UolkutCircle from "../assets/uolkut-circle.svg";
import './accessFormCard.css'

interface propsInterface {
    form: string;
}

const AccessFormCard: React.FC<propsInterface> = (props) => {
    let headerText;
    let content;
    let emailPlaceholder = "E-mail";

    if (props.form === 'login') {
        headerText = 'Accesse o UOLkut';

        content = (
            <>
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" />

                <div className="card-body__checkbox-wrapper">
                    <input type="checkbox" name="remember-check" id="" className="card-body__checkbox" />
                    <label htmlFor="remember-check" className="card-body__label">Lembrar minha senha</label>
                </div>

                <button type="submit" className="card-body__login-button">Entrar</button>

                <button type="button" className="card-body__signup-button">Criar conta</button>

                <a href="." className="card-body__link">Esqueci a minha senha</a>
            </>
        );
    } else if (props.form === 'signup') {
        headerText = 'Cadastre-se no UOLkut';

        content = (
            <>
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" />

                <div className="card-body__sigin-wrapper">
                    <div className="card-body__sigin-wrapper-inner">
                        <input type="text" name="" id="" placeholder="Nascimento" className="card-body__date" />

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
                <button type="submit" className="card-body__send-code-button">Enviar código</button>

                <a href="." className="card-body__remember-link">Lembrou sua Senha?</a>

                <button type="button" className="card-body__return-login-button">Entrar com as credenciais</button>
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