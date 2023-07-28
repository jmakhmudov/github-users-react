import { GitHubUser } from "../constants/api";
import UserListItem from "./UserListItem";
import { Pagination, Empty } from 'antd';
import { useState } from 'react';

interface ListProps {
    userList: GitHubUser[];
}

const UserList: React.FC<ListProps> = ({ userList }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);


    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            {
                userList.length > 0 ?
                    <div className="user-list">
                        {currentItems.map((user) => (
                            <UserListItem key={user.id} user={user} />
                        ))}

                        <Pagination
                            simple
                            current={currentPage}
                            total={userList.length}
                            onChange={handlePageChange}
                        />
                    </div>
                    :
                    <Empty />
            }
        </>
    );
}

export default UserList;