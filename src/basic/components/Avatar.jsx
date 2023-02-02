import React from "react";

export default function avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img src={image} alt="profile" className="photo"></img>
      {isNew && <span className="new">new</span>}
    </div>
  );
}
