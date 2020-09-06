import React, { useState } from 'react';
import { Modal } from './Modal';

function Modalapp() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      
      <Modal show={show} close={closeModalHandler} />
      fgdg
      <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
    </div>
  );
}

export default Modalapp;