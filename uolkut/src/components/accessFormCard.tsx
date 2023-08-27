import Card from "./card";
import UolkutCircle from "../assets/uolkut-circle.svg";
import './accessFormCard.css'
import { useNavigate } from 'react-router-dom';
import { useScreenSize } from '../hooks/useScreenSize';
import { useRef } from 'react';

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

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const birthDateRef = useRef<HTMLInputElement>(null);
    const occupationRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const relationshipRef = useRef<HTMLSelectElement>(null);

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

    async function logIn() {
        const user = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }

        const queryString = user.email + '&password=' + user.password;

        const response = await fetch('http://localhost:5000/users/?email=' + queryString, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        await navigate('/profile/?u=' + data[0].id);
    }

    function loginHandler(event: React.FormEvent) {
        event.preventDefault();

        logIn();
    }

    async function saveNewProfile() {
        const user = {
            id: Math.floor(Math.random() * 1000000000),
            email: emailRef.current?.value,
            password: newPasswordRef.current?.value,
        };

        const userData = {
            id: user.id,
            name: nameRef.current?.value,
            birthDate: birthDateRef.current?.value,
            occupation: occupationRef.current?.value,
            country: countryRef.current?.value,
            city: cityRef.current?.value,
            relationship: relationshipRef.current?.value,
            picture: '1.jpg',
        }

        const responseUser = await fetch('http://localhost:5000/users', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseUserData = await fetch('http://localhost:5000/users-data', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (responseUser.status === 201 && responseUserData.status === 201) {
            if (emailRef.current &&
                newPasswordRef.current &&
                nameRef.current &&
                birthDateRef.current &&
                occupationRef.current &&
                countryRef.current &&
                cityRef.current &&
                relationshipRef.current) {
                emailRef.current.value = '';
                newPasswordRef.current.value = '';
                nameRef.current.value = '';
                birthDateRef.current.value = '';
                occupationRef.current.value = '';
                countryRef.current.value = '';
                cityRef.current.value = '';
                relationshipRef.current.value = '';
            }
        }
    }

    function createProfile(event: React.FormEvent) {
        event.preventDefault();
        saveNewProfile();
    }

    if (props.form === 'login') {
        headerText = 'Accesse o UOLkut';

        content = (
            <>
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" ref={passwordRef} />

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
                <input type="password" name="" id="" placeholder="Senha" className="card-body__password" ref={newPasswordRef} />

                <input type="text" name="" id="" placeholder="Nome" className="card-body__name" ref={nameRef} />

                <div className="card-body__sigin-wrapper">
                    <div className="card-body__sigin-wrapper-inner">
                        {isScreenSmall ? <input type="text" name="" id="" placeholder="DD/MM/AAAA" className="card-body__date" ref={birthDateRef} /> : <input type="text" name="" id="" placeholder="Nascimento" className="card-body__date" ref={birthDateRef} />}

                        <input type="text" name="" id="" placeholder='Profissão' className="card-body__occupation" ref={occupationRef} />
                    </div>

                    <span className="card-body__date-text">DD/MM/AAAA</span>

                    <div className="card-body__sigin-wrapper-inner">
                        <input type="text" name="" id="" placeholder="País" className="card-body__country" ref={countryRef} />

                        <input type="text" name="" id="" placeholder="Cidade" className="card-body__city" ref={cityRef} />
                    </div>
                </div >

                <select name="" id="" className="card-body__select" ref={relationshipRef} >
                    <option value="" >Relacionamento</option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Namorando">Namorando</option>
                    <option value="Preocupado">Preocupado</option>
                </select>

                <button type="submit" className="card-body__login-button" name="create-account" onClick={createProfile}>Criar conta</button>
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
                    <input type="email" name="" id="" placeholder={emailPlaceholder} className="card-body__email" ref={emailRef} />

                    {content}

                </form>
            </section>
        </Card>
    );
}

export default AccessFormCard;