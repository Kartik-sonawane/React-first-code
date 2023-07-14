import React from "react";
import "./App.css";
import Book from "./Book";
import books from "./books.json";


function App() {
  return (
    <div className="App">
      {books.map((ele) => {
        return (
          <Book
            image={ele.image}
            title={ele.title}
            author={ele.author}
            price={ele.price}
          />
        );
      })}
    </div>
  );
}

export default App;
