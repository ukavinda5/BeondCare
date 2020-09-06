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
        {/* <span onClick={close} className="close-modal-btn">x</span> */}
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Unlock just onle for a Rs 2000/-</h4>

        
        <input style={{width: "340px"}}
        className="cardinput" placeholder="Full Name"></input><br></br><br></br>

        <Cleave style={{width: "340px"}} className="cardinput"
          placeholder="credit card number"
                options={{creditCard: true}}
                onFocus={onCreditCardFocus}
                onChange={onCreditCardChange} /> <br></br><br></br>
       
        <span><i class="fab fa-2x fa-cc-visa"></i> <input style={{width: "60px",margin:"0px 50px"}} className="cardinput" placeholder="Expiration Date"></input>
        <input style={{width: "50px"}} className="cardinput" placeholder="cvv"></input></span>


        
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