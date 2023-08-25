import './user-edit-card.css';

const UserEditCard: React.FC = () => {
    return (
        <div className="user-edit-wrapper">
            <span className="user-edit__text">Editar informações</span>

            <div className='user-edit__inputs-wrapper'>
                <div className='user-edit__occupation-wrapper'>
                    <input type="text" name="" id="" placeholder='Profissão' className="user-edit__occupation" />

                    <select name="" id="" className="user-edit__select">
                        <option value="" >Relacionamento</option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Namorando">Namorando</option>
                        <option value="Preocupado">Preocupado</option>
                    </select>
                </div>

                <input type="text" name="" id="" placeholder="Nome" className="user-edit__name" />
                <input type="text" name="" id="" placeholder="Cidade" className="user-edit__city" />
                <input type="text" name="" id="" placeholder="País" className="user-edit__country" />
                <input type="text" name="" id="" placeholder="DD/MM/AAAA" className="user-edit__date" />
                <input type="password" name="" id="" placeholder="Senha" className="user-edit__password" />
                <input type="password" name="" id="" placeholder="Repetir senha" className="user-edit__password" />
            </div>

            <button type="submit" className="user-edit__save-button">Salvar</button>
        </div>
    );
}

export default UserEditCard;