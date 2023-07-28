import React, { useEffect, useState } from 'react';
import './App.css'
import { getUserById } from './api/users';
import SearchComponent from './components/Search';
import { GitHubUser } from './constants/api';
import UserList from './components/UserList';
import { Radio } from 'antd';
import { RadioChangeEvent, Typography } from 'antd';

const { Text } = Typography;

const App: React.FC = () => {
  const [searchUser, setSearchUser] = useState<string>('');
  const [userList, setUserList] = useState<GitHubUser[]>([]);
  const [order, setOrder] = useState<string>('desc');

  useEffect(() => {
    if (searchUser !== '') {
      getUserById(searchUser, order).then((res: GitHubUser[]) => {
        setUserList(res);
      })
    }
  }, [searchUser, order])

  const onChange = (e: RadioChangeEvent) => {
    setOrder(e.target.value);
  };

  return (
    <main>
      <section className='search-section'>
        <SearchComponent setSearchUser={setSearchUser} />

        <div className='sort'>
          <Text>Order:</Text>
          <Radio.Group onChange={onChange} value={order}>
            <Radio value={'asc'}>Ascending</Radio>
            <Radio value={'desc'}>Descending</Radio>
          </Radio.Group>
        </div>

      </section>
      <UserList userList={userList} />
    </main>
  )
}

export default App
