import React, { useState } from "react";
import Modal from "./Modal";

function MenuItem({ image, name, price }) {
  const [modalState, setModalState] = useState(false);

  function modalStateOpen() {
    setTimeout(() => {
      setModalState(true);
    }, 2000);
    
  }
  function modalStateClose() {
    setTimeout(() => {
      setModalState(false);
    }, 2000);
  }

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <div className="quickView">
        <button onClick={modalStateOpen}>Quick View</button>
      </div>
      
      <Modal modalState={modalState} modalClose={modalStateClose} productImage = {image} productName = {name} productPrice = {price}/>
    </div>
  );
}

export default MenuItem;