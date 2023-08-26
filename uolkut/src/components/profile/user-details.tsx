import "./user-details.css";

interface propsInterface {
  country: string;
  relationship: string;
  birthDate: string;
  occupation: string;
  city: string;
}

const UserDetails: React.FC<propsInterface> = (props) => {

  // Age logic
  const dateParts = props.birthDate.split('/');
  const birthDateObject = new Date(parseInt(dateParts[2]), parseInt(dateParts[1])-1, parseInt(dateParts[0]));
  const birthDateMonth = birthDateObject.toLocaleDateString('pt-BR', {month: 'long'});
  const birthDate = birthDateObject.getDate() + ' de ' + birthDateMonth;
  const todayDate = new Date();
  let yearsDifference = todayDate.getFullYear() - birthDateObject.getFullYear();

  if(todayDate.getMonth() < birthDateObject.getMonth() || (todayDate.getMonth() === birthDateObject.getMonth() && todayDate.getDate() < birthDateObject.getDate())) {
    yearsDifference--;
  }
  const age = yearsDifference;

  return (
    <div className="user-details-wrapper">
      <div className="user-detail-item">
        <span className='user-detail__label'>Relacionamento:</span>
        <span className='user-detail__data'>{props.relationship}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>Aniversário:</span>
        <span className='user-detail__data'>{birthDate}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>Idade:</span>
        <span className='user-detail__data'>{age}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>Quem sou eu:</span>
        <span className='user-detail__data'>{props.occupation}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>Moro:</span>
        <span className='user-detail__data'>{props.city}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>País:</span>
        <span className='user-detail__data'>{props.country}</span>
      </div>

      <div className="user-detail-item">
        <span className='user-detail__label'>Cidade:</span>
        <span className='user-detail__data'>{props.city}</span>
      </div>
    </div>
  );
};

export default UserDetails;
