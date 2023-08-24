import "./user-details.css";

const UserDetails: React.FC = () => {

  return (
    <div className="user-info-all">
      <div>
        <span className='user-detail__label'>Relacionamento:</span>
        <span className='user-detail__data'>Solteiro</span>
      </div>

      <div>
        <span className='user-detail__label'>Aniversário:</span>
        <span className='user-detail__data'>21 de julho</span>
      </div>

      <div>
        <span className='user-detail__label'>Idade:</span>
        <span className='user-detail__data'>22</span>
      </div>

      <div>
        <span className='user-detail__label'>Quem sou eu:</span>
        <span className='user-detail__data'>Programador</span>
      </div>

      <div>
        <span className='user-detail__label'>Moro:</span>
        <span className='user-detail__data'>Guarantã</span>
      </div>

      <div>
        <span className='user-detail__label'>País:</span>
        <span className='user-detail__data'>Brasil</span>
      </div>

      <div>
        <span className='user-detail__label'>Cidade:</span>
        <span className='user-detail__data'>São Paulo</span>
      </div>
    </div>
  );
};

export default UserDetails;
