import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"
import './App.css';
function App() {
  return (
    <div className="App">
        <div className="Card">
          <ProfilePhoto/>
          <FullName/>
          <Address/>
      </div>

    </div>
  );
}
ReactDOM.render(App(), document.getElementById("root"));
export default App;
