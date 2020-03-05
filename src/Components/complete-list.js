import React from "react";

function CompleteList({
    index,
    listItem: { text, complete },
  }) {
    if (complete) {
      return (
        <div key={index}>
          <input type="checkbox" checked disabled></input>
          <span className="strike-through">{text}</span>
        </div>
      );
    }
    return false;
  }

export default CompleteList