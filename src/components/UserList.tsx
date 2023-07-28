import { GitHubUser } from "../constants/api";
import UserListItem from "./UserListItem";
import { List } from 'antd';

interface ListProps {
    userList: GitHubUser[];
}

const UserList: React.FC<ListProps> = ({ userList }) => {

    return (
        <>
            <List
            size="small"
                pagination={{ position: "bottom", align: "end" }}
                dataSource={userList}
                renderItem={(user) => (
                    <UserListItem user={user} />
                )}
            />
        </>
    );
}

export default UserList;