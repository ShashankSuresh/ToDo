import React, { useState } from "react";
import ConstructList from "./Components/construct-list";
import AddItem from "./Components/add-to-list";
import CompleteList from "./Components/complete-list";
import "./App.scss";

function App() {
  const [todoList, createNewList] = useState([
    {
      text: "todo text 1",
      complete: true
    },
    {
      text: "todo text 2",
      complete: false
    },
    {
      text: "todo text 3",
      complete: false
    },
    {
      text: "todo text 4",
      complete: false
    },
    {
      text: "todo text 5",
      complete: false
    }
  ]);

  const clearInputFields = () => {
    document.getElementById("add").value = "";
  };

  const addNewItem = text => {
    const newItemObj = {
      text: text,
      complete: false
    };
    const updatedList = [...todoList, { ...newItemObj }];
    createNewList(updatedList);
    clearInputFields();
  };

  const removeItem = index => {
    const newItemObj = [...todoList];
    newItemObj.splice(index, 1);
    return createNewList(newItemObj);
  };

  const completeItem = index => {
    const newItemObj = [...todoList];
    todoList[index].complete = true;
    return createNewList(newItemObj);
  };

  const editItem = index => {
    const itemEl = document.getElementById("item-text-" + index);
    const editBtnEl = document.getElementById("edit-button-" + index);
    const saveBtnEl = document.getElementById("save-button-" + index);
    itemEl.setAttribute("contentEditable", true);
    itemEl.focus();
    editBtnEl.style.display = "none";
    saveBtnEl.style.display = "block";
  };

  const saveItem = index => {
    const newItemObj = [...todoList];
    const itemEl = document.getElementById("item-text-" + index);
    const editBtnEl = document.getElementById("edit-button-" + index);
    const itemElVal = itemEl.textContent;
    const saveBtnEl = document.getElementById("save-button-" + index);
    itemEl.setAttribute("contentEditable", false);
    editBtnEl.style.display = "block";
    saveBtnEl.style.display = "none";
    todoList[index].text = itemElVal;
    return createNewList(newItemObj);
  };

  return (
    <div className="todo">
      <h2>Add Item</h2>
      <AddItem addNewItemFn={addNewItem} />

      <h2>To Do</h2>
      <div className="container">
        {todoList.map((todo, index) => (
          <ConstructList
            key={index}
            index={index}
            listItem={todo}
            editItemFn={editItem}
            saveItemFn={saveItem}
            removeItemFn={removeItem}
            completeItemFn={completeItem}
          />
        ))}
      </div>

      <h2>Complete</h2>
      {todoList.map((todo, index) => (
        <CompleteList index={index} key={index} listItem={todo} />
      ))}
    </div>
  );
}

export default App;
