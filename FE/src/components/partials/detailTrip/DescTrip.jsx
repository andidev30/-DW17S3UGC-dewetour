import React from "react";

function DescTrip({ desc }) {
  return (
    <div className="mt-4 mx-2">
      <h5 className="font-weight-bold">Description</h5>
      <div className="text-muted display-5">{desc}</div>
    </div>
  );
}

export default DescTrip;
