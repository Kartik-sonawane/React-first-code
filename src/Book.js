import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-img">
        <img src={props.image} />
      </div>
      <div className="book-info">
        <h2>{props.title}</h2>
        <h5 className="book-author">Author : {props.author}</h5>
        <h4 className="book-price">Price : Rs {props.price}</h4>
        <button> Add To Cart</button>
      </div>
    </div>
  );
};

export default Book;
