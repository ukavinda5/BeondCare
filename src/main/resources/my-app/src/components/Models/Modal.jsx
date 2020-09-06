import React, { Component } from 'react';
import './Modal.css';
import Cleave from 'cleave.js/react';
// class Model extends Component {
export const Modal = ({clickHandler, show, close }) => {



  

const onCreditCardChange=(event)=> {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
}

const onCreditCardFocus=(event)=> {
    // update some state
}




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
          <h4>Modal</h4>

        
        <input placeholder="Full Name"></input><br></br><br></br>
        <input placeholder="Card Number"></input><br></br><br></br>
        <input placeholder="Expiration Date"></input>
        <input placeholder="cvv"></input>







          <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                onFocus={onCreditCardFocus}
                onChange={onCreditCardChange} /> 

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="nav-item">Close</button>
         
          <button onClick={()=>clickHandler("awa")} className="nav-item">OK</button>
        </div>
      </div>
    </div>
  )
};
export default Modal;