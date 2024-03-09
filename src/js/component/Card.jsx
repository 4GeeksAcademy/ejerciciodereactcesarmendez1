import React from "react";


//include images into your bundle



//create your first component
const Card = (props) => {
  return (
    <div className="d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.parrafo}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
