import React, { useState } from "react";

function Textarea() {
  const [text, setText] = useState(" ");

  const clear = () => {
    setText("")
  };
  const change = (a) => {
    setText(a.target.value);
  };

  const uppercase = ()=>{
    const upper = text.toUpperCase();
    setText(upper);
  }

  const lowercase = ()=>{
    const lower = text.toLowerCase();
    setText(lower);
  }

  const copy = ()=>{
    navigator.clipboard.writeText(text)
  }
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={change}
          value={text}
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={clear}>
          clear txt
        </button>
        <button className="btn btn-primary" onClick={uppercase}>
          uppercase
        </button>
        <button className="btn btn-primary" onClick={lowercase}>
          lowercase
        </button>
        <button className="btn btn-primary" onClick={copy}>
          Copy
        </button>
      </div>
    </>
  );
}

export default Textarea;
