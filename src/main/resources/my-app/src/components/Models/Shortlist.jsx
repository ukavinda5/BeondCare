import React, { Component } from 'react';
import './Modal.css';
import Cleave from 'cleave.js/react';
//class Model extends Component {
export const Shortlist = ({clickHandler, show, close }) => {

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
          <h4>successfully added to the short list  !!</h4>
          
          
        </div>
        <div className="modal-footer">
          <button onClick={close} className="nav-item">Close</button>
        
          <button onClick={()=>clickHandler("awa"),close} className="nav-item" >OK</button>
        </div>
      </div>
    </div>
  )
};
// }
export default Shortlist;