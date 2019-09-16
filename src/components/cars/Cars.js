import React from "react";
import CarsList from "./CarsList";
import AddCar from "./AddCar";

const Cars = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <CarsList />
        </div>
        <div className="col offset-1">
          <AddCar />
        </div>
      </div>
    </div>
  );
};

export default Cars;
