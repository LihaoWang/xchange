import React, { useState } from "react";

function Nav({ onChangeBase }) {
  const [base, setBase] = useState("USD");
  const changeBase = (e) => {
    setBase(e.target.value);
    onChangeBase(e.target.value);
  };
  return (
    <div className="navBar">
      <img className="logo" alt="logo" src="xchange.png" />
      <div>
        <div className="select">
          <select onChange={changeBase} id="lang" value={base}>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CNY">CNY</option>
            <option value="EUR">EUR</option>
            <option value="HKD">HKD</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="INR">INR</option>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Nav;
