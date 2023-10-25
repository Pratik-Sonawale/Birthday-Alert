import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
export default function App() {
  const [data, setData] = useState(Data);

  const handleClick = () => {
    setData([]);
  };

  return (
    <div className="Profile">
      <section className="Card">
        <h3>Today Birthday {data.length} 😀</h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.img} alt=""></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear</button>
      </section>
    </div>
  );
}
