import React, { Component } from 'react';
import './Modal.css';
import Cleave from 'cleave.js/react';
//class Model extends Component {
export const Complain = ({clickHandler, show, close }) => {

// render(){
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Complain</h4>
          <input placeholder="subject"></input>
          <input placeholder="Complain"></input>
        
          
        </div>
        <div className="modal-footer">
          <button onClick={close} className="nav-item">Close</button>
         
          <button onClick={()=>clickHandler("awa"),close} className="nav-item">OK</button>
        </div>
      </div>
    </div>
  )
};
// }
export default Complain;