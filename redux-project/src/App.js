import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import updateProducts from '../src/store/actions/updateProducts';
import fetchUsers from '../src/store/actions/fetchUsers';

function App(props) {
  return (
    <div className="App">
      REDUX PRODUCT LIST APP
      <br />
      <br />
      <span style={{ color: 'green' }}
      >CURRENT PRODUCT</span>
      {'   '}{':'}{'   '}{props.productData.name}
      <br />
      <br />
      <button onClick={props.updateProducts}>ADD NEW PRODUCT</button>

      <br />
      {props.users.length === 0 ?
        <p> THERE ARE NO USERS</p> :
        props.users.map(user => <p key={user.id}> {user.first_name} - {user.email}</p>)
      }

      <br />
      <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div >
  );
};

const MapStateToProps = (state) => {
  return {
    productData: state.productData,
    users: state.users
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateProducts: () => dispatch(updateProducts),
    fetchUsers: () => dispatch(fetchUsers)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(App);
