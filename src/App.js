import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './redux/counterSlice';
import { getUsers } from './redux/usersSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { users = [] } = useSelector((state) => state.users) || {};
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h2>User</h2>
      {users && users.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  );
}

export default App;