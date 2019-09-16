import React from "react";
import LocList from "./LocList";
import AddLoc from "./AddLoc";

const Locations = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LocList />
        </div>
        <div className="col">
          <AddLoc />
        </div>
      </div>
    </div>
  );
};

export default Locations;
