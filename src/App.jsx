import React from 'react'
import Search from "./components/Search"
import SideBar from "./components/SideBar"
import './App.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from "redux";
// import { actionsCreators } from "./state/index";
import { connect } from 'react-redux';
import { getUsersRequest } from './state/actions/users'

const App = (props) => {

  props.getUsersRequest();
  const users = props.users.items
  // console.log("SAGA usersProps", usersProps)
  // console.log("SAGAS", usersProps)
  // console.log("SAGas USERS", users)
  
  
  // const account = useSelector((state) => state.account);
  // const dispatch = useDispatch();

  // console.log("account", account)
  // console.log("dispatch", dispatch)
  
  // const { depositMoney, withdrawMoney } = bindActionCreators(actionsCreators, dispatch);
  
  // console.log("SAGA PROPS", usersProps)
  
  // const users = props.users
  // console.log("SAGA users", users);
  return (
    <div className="App">
      <h3>HOLA</h3>
      <ul>
        { users.map((user) => {
          return <li key={user.id}>{ user.firstName }</li>
        })}
      </ul>
      {/* <h5>Account: {account}</h5>
      <button onClick={() => depositMoney(2000)}>+</button>
      <button onClick={() => withdrawMoney(1000)}>-</button> */}
      <SideBar />
      <Search />
    </div>
  )
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);