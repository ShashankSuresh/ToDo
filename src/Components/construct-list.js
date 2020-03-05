import React from "react";

function ConstructList({
  index,
  listItem: { text, complete },
  editItemFn,
  saveItemFn,
  removeItemFn,
  completeItemFn
}) {
  if (!complete) {
    return (
      <div key={index} className="todo-container" id={"todo-item-" + index}>
        <div className="text-elements-container">
          <input
            className="checkbox-complete"
            type="checkbox"
            onClick={() => completeItemFn(index)}
          ></input>
          <p
            suppressContentEditableWarning="true"
            contentEditable="false"
            id={"item-text-" + index}
            className="input-textarea"
          >
            {text}
          </p>
        </div>
        <div className="btn-container">
          <button
            onClick={() => editItemFn(index)}
            id={"edit-button-" + index}
            className="btn-edit not-hidden"
          >
            Edit
          </button>
          <button
            onClick={() => saveItemFn(index)}
            id={"save-button-" + index}
            className="btn-save hidden"
          >
            Save
          </button>
          <button className="btn-delete" onClick={() => removeItemFn(index)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  return false;
}

export default ConstructList;
