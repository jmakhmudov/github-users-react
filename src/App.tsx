import { useEffect, useState } from 'react';
import './App.css'
import { getUserById } from './api/users';

function App() {
  const [searchUser, setSearchUser] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value)
  }

  const handleSearch = () => {

  }

  useEffect(() => {
    getUserById('jmakhmudov');
  }, [])

  return (
    <main>
      <input type="text" />
      <button onClick={handleSearch} type='submit'>search</button>
    </main>
  )
}

export default App
