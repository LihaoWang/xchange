import React, { useState } from "react";

const Input = ({ onAdd }) => {
  const [input, setInput] = useState(1);
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
  };
  return (
    <div>
      <form className="input-wrap " onSubmit={onSubmit}>
        <input
          className="input-box"
          type="integer"
          placeholder="Add Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div>
          <input className="convert-button" type="submit" value="Convert" />
        </div>
      </form>
    </div>
  );
};

export default Input;
