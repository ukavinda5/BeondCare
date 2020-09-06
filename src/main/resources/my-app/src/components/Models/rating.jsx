import React, { useState,Component } from 'react';
import './Modal.css';
import Cleave from 'cleave.js/react';
import StarRatingComponent from 'react-star-rating-component';

// const { rating } = this.state;



export const Rating = ({clickHandler, show, close }) => {
  const [rating, setRating] = useState(1);

  const onStarClick=(nextValue, prevValue, name)=> {
    setRating(nextValue)
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
          <h4>Rating</h4>
          
        
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={onStarClick}
            />
          </div>
          
        </div>
        <div className="modal-footer">
          <button onClick={close} className="nav-item">Close</button>
        
          <button onClick={()=>clickHandler(rating)} className="nav-item" >OK</button>
        </div>
      </div>
    </div>
  )
};
// }
export default Rating;