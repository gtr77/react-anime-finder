import React from 'react'
import Search from "./components/Search/Search"
import SideBar from "./components/Sidebar/SideBar"
import './App.scss'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionsCreators } from "./state/index";
// import { withdrawMoney } from './state/action-creators';

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  
  const { depositMoney, withdrawMoney, updatePosition, restartPosition } = bindActionCreators(actionsCreators, dispatch);
  
  return (
    <div className="App">
      <h5>Account: {account}</h5>
      <button onClick={() => depositMoney(2000)}>+</button>
      <button onClick={() => withdrawMoney(1000)}>-</button>
      <SideBar />
      <Search />
    </div>
  )
}

export default App;