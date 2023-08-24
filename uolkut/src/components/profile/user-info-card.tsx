import UserWelcome from "./user-welcome";
import UserTags from "./user-tags";
import UserDetails from "./user-details";
import UserLikes from "./user-likes";

const UserInfo: React.FC = () => {
    return (
        <div className="user-info-wrapper">
            <UserWelcome />
            <UserTags />
            <UserDetails />
            <UserLikes />
        </div>
    );
}

export default UserInfo;