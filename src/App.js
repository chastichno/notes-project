import React, { useState } from 'react';
import logo from './notes-logo.svg';
import './App.css';

const Note = (props) => {

  const [showAge, setShowAge] = useState(false);

  return (
    <div className="note">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Title: {props.title}</p>
        <p>Short desription: {props.descr}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
        {showAge && <p>Date: {props.date}</p>}
      </div>
    </div>
  )
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">
          <img src={logo} className="App-logo" alt="logo" /><span> Notes to Myself</span>
        </div>
        <div className="header-account">
          <p onClick={() => alert("There is no Account page yet!")}>My Account</p>
        </div>
      </header>
      <div className="notes-list">
        <Note
          avatar="https://via.placeholder.com/150"
          title="Jenny Han"
          descr="jenny.han@notreal.com"
          date={25}
        />

        <Note
          avatar="https://via.placeholder.com/150"
          title="Jason Long"
          descr="jason.long@notreal.com"
          date={45}
        />

        <Note
          avatar="https://via.placeholder.com/150"
          title="Peter Pan"
          descr="peter.pan@neverland.com"
          date={100}
        />
      </div>
    </div>
  );
}

export default App;
