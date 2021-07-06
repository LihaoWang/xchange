import React, { Fragment, useState } from "react";

function Nav({ onChangeBase }) {
  const [base, setBase] = useState("USD");
  const changeBase = (e) => {
    setBase(e.target.value);
    onChangeBase(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="logo-wrap"></div>
      <div className="navBar">
        {/* <h2>Base Currency</h2> */}
        <img className="logo" src="xchange.png" />
        {/* <div className="navbar-item">
          <span className="icon is-large">
            <i className="fas fa-dollar-sign fa-2x"></i>
          </span>
        </div> */}
        {/* <div className="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Change base currency</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">USD</a>
            <a className="navbar-item">CAD</a>
            <a className="navbar-item">HKD</a>
          </div>
        </div> */}
        <div>
          <div className="select">
            <select onChange={changeBase} id="lang" value={base}>
              <option value="USD">USD</option>
              <option value="CNY">CNY</option>
              <option value="HKD">HKD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="CAD">CAD</option>
            </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
