import { GitHubUser } from "../constants/api";
import { List, Avatar } from "antd";

interface UserListItemProps {
    user: GitHubUser
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {


    return (
        <>
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Avatar src={user.avatar_url} />
                    }
                    title={<a href="https://ant.design">{user.login}</a>}
                    description={user.login}
                />
            </List.Item>
        </>
    );
}

export default UserListItem;