import React from "react";

function AddItem({addNewItemFn}) {
    return (
      <div>
        <input type="text" id="add" />
        <button id="add-button" onClick={() => addNewItemFn(document.getElementById("add").value)}>Add</button>
      </div>
    )
  }

export default AddItem