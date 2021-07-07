import "./App.css";
import Input from "./Input.js";
import Output from "./Output.js";
import Nav from "./Nav.js";
import Footer from "./footer.js";

import React, { useEffect, useState } from "react";
import axios from "axios";

export const CopiedContext = React.createContext();

function App() {
  const [input, setInput] = useState(1);
  const [currency, setCurrency] = useState([]);
  const [base, setBase] = useState(["USD"]);
  const [copied, setCopied] = useState(false);
  const [turboMode, setTurboMode] = useState(false);
  const onAdd = (userInput) => {
    setInput(userInput);
    console.log(userInput);
  };
  const onChangeBase = (baseCurrency) => {
    setBase(baseCurrency);
  };

  useEffect(() => {
    getCurrency();
    //eslint-disable-next-line
  }, [input, base, turboMode]);
  const getCurrency = async () => {
    const apiLink = turboMode
      ? `https://api.exchangerate.host/latest?base=${base}`
      : `https://api.exchangerate.host/latest?base=${base}&source=ecb`;
    const res = await axios.get(apiLink);
    setCurrency(Object.entries(res.data.rates).sort());
  };

  return (
    <CopiedContext.Provider value={{ copied, setCopied }}>
      <div className="App">
        <div className="content">
          <div className="input-bg">
            <Nav onChangeBase={onChangeBase} />
            <h1>Currency Conversion from {base}</h1>
            <Input onAdd={onAdd} output={getCurrency} />
            <p className="tip">*Click currency cards to copy results</p>
          </div>
          {copied ? (
            <div className="alert">
              <i class="fas fa-info-circle"></i>Copied
            </div>
          ) : null}
          <div className="output-wrap ">
            {" "}
            {currency.map((entry, index) => (
              <Output key={index} entry={entry} input={input} />
            ))}
          </div>
          <Footer />
          <button
            className="turboButton"
            onClick={() => {
              turboMode ? setTurboMode(false) : setTurboMode(true);
            }}
          >
            {turboMode ? "Show less" : "Load more"}
          </button>
        </div>
      </div>
    </CopiedContext.Provider>
  );
}

export default App;
