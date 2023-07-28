import { GitHubUser } from "../constants/api";
import { Avatar, Typography } from "antd";
import { useState, useEffect } from 'react';
import { getNumberRepos } from "../api/users";

const { Text, Link, Title } = Typography;

interface UserListItemProps {
    user: GitHubUser
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [numberRepos, setNumberRepos] = useState<number>(0);

    const handleClick = () => {
        setShowDetails(!showDetails);
    }

    useEffect(() => {
        getNumberRepos(user.login)
            .then(res => {
                setNumberRepos(res.length);
            })
    }, [])

    return (
        <div className="list-item" onClick={handleClick}>
            <Avatar className="avatar" size="large" src={user.avatar_url} />
            <div className="details-box">
                <Title level={5}>{user.login}</Title>
                {showDetails ?
                    <div className="details">
                        <Link target="_blank" href={user.html_url}>Go to profile</Link>
                        <Text className="repos">Number of repositories: <span>{numberRepos}</span></Text>
                    </div>
                    :
                    <></>}
            </div>
        </div>
    );
}

export default UserListItem;