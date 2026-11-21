// import React from 'react';
// import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById("increment").addEventListener("click", inc);

document.getElementById("decrement").addEventListener("click", dec);

document.getElementById("random").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

// ReactDOM.render(
//   <React.StrictMode>
//     <>

//     </>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
