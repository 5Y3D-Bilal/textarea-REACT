import React, { useState } from "react";
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Textarea() {
  const [text, setText] = useState(" ");

  const clear = () => {
    setText("");
    toast.success("Text is cleared", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const change = (a) => {
    setText(a.target.value);
  };

  const uppercase = () => {
    const upper = text.toUpperCase();
    setText(upper);
    toast.success("Converted into uppercase", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const lowercase = () => {
    const lower = text.toLowerCase();
    setText(lower);
    toast.success("Converted into lowercase", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    toast.success("text is copied", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const lighttheme = () => {
    document.getElementById("themes").style.backgroundColor = "white";
    document.getElementById("themes").style.color = "black";
    toast.warn('Theme Changed To Light Mode', {
      position: "bottom-right",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  const draktheme = () => {
    document.getElementById("themes").style.backgroundColor = "black";
    document.getElementById("themes").style.color = "white";
    toast.error('Theme Changed To Dark Mode', {
      position: "bottom-left",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <>
      <div className="container textarea" >
        <div className=" mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Text Editer
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
          <button className="btn btn-primary" onClick={lighttheme}>light theme</button>
          <button className="btn btn-primary" onClick={draktheme}>dark theme</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Textarea;
