import { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './user-edit-card.css';

interface EditProfileButtonProps {
    toggle: () => void;
    name: string;
    country: string;
    relationship: string;
    birthDate: string;
    occupation: string;
    city: string;
}

const UserEditCard: React.FC<EditProfileButtonProps> = (props) => {

    const [urlParams] = useSearchParams();

    function updateProfileHandler(event: React.FormEvent) {
        event.preventDefault();

        //validation
        updateProfile();
        // props.toggle();
    }

    async function updateProfile(){
        if (!urlParams.get('u')) return;
        const userId = urlParams.get('u');

        const response = await fetch('http://localhost:5000/users-data/' + userId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": userId,
                "name": nameRef.current!.value,
                "birthDate": birthDateRef.current!.value,
                "occupation": occupationRef.current!.value,
                "country": countryRef.current!.value,
                "city": cityRef.current!.value,
                "relationship": relationshipRef.current!.value
              }),
        });
    }

    const occupationRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const relationshipRef = useRef<HTMLSelectElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const birthDateRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (passwordRef.current &&
            newPasswordRef.current &&
            nameRef.current &&
            birthDateRef.current &&
            occupationRef.current &&
            countryRef.current &&
            cityRef.current &&
            relationshipRef.current) {
            passwordRef.current.value = '';
            newPasswordRef.current.value = '';
            nameRef.current.value = props.name;
            birthDateRef.current.value = props.birthDate;
            occupationRef.current.value = props.occupation;
            countryRef.current.value = props.country;
            cityRef.current.value = props.city;
            relationshipRef.current.value = props.relationship;
        }
    }, [props.name, props.birthDate, props.occupation, props.country, props.city, props.relationship]);

    return (
        <div className="user-edit-wrapper">
            <span className="user-edit__text">Editar informações</span>

            <div className='user-edit__inputs-wrapper'>
                <div className='user-edit__occupation-wrapper'>
                    <input type="text" name="" id="" placeholder='Profissão' className="user-edit__occupation" ref={occupationRef} />

                    <select name="" id="" className="user-edit__select" ref={relationshipRef}>
                        <option value="" >Relacionamento</option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Namorando">Namorando</option>
                        <option value="Preocupado">Preocupado</option>
                    </select>
                </div>

                <input type="text" name="" id="" placeholder="Nome" className="user-edit__name" ref={nameRef} />
                <input type="text" name="" id="" placeholder="Cidade" className="user-edit__city" ref={cityRef} />
                <input type="text" name="" id="" placeholder="País" className="user-edit__country" ref={countryRef} />
                <input type="text" name="" id="" placeholder="DD/MM/AAAA" className="user-edit__date" ref={birthDateRef} />
                <input type="password" name="" id="" placeholder="Senha" className="user-edit__password" ref={passwordRef} />
                <input type="password" name="" id="" placeholder="Repetir senha" className="user-edit__password" ref={newPasswordRef} />
            </div>

            <button type="submit" className="user-edit__save-button" onClick={updateProfileHandler}>Salvar</button>
        </div>
    );
}

export default UserEditCard;