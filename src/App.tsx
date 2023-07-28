import React, { useEffect, useState } from 'react';
import './App.css'
import { getUserById } from './api/users';
import SearchComponent from './components/Search';
import { GitHubUser } from './constants/api';
import UserList from './components/UserList';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

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
    console.log(searchUser, order)
  }, [searchUser, order])

  const onChange = (e: RadioChangeEvent) => {
    setOrder(e.target.value);
  };

  return (
    <main>
      <section>
        <SearchComponent setSearchUser={setSearchUser} />
        <Radio.Group onChange={onChange} value={order}>
          <Radio value={'asc'}>Ascending</Radio>
          <Radio value={'desc'}>Descending</Radio>
        </Radio.Group>

      </section>
      <UserList userList={userList} />
    </main>
  )
}

export default App
