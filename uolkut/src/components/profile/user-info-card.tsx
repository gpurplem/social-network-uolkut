import UserWelcome from "./user-welcome";
import UserTags from "./user-tags";
import UserDetails from "./user-details";
import UserLikes from "./user-likes";
import './user-info-card.css';

interface propsInterface {
    name: string;
    country: string;
    relationship: string;
    birthDate: string;
    occupation: string;
    city: string;
}

const UserInfoCard: React.FC<propsInterface> = (props) => {
    return (
        <div className="user-info-wrapper">
            <UserWelcome name={props.name} />
            <UserTags />
            <UserDetails country={props.country} relationship={props.relationship} birthDate={props.birthDate} occupation={props.occupation} city={props.city} />
            <UserLikes />
        </div>
    );
}

export default UserInfoCard;