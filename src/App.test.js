import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("Todo", () => {
  beforeEach(() => {
    const input = document.createElement("input");
    const itemEl = document.createElement("p");
    const editBtnEl = document.createElement("button");
    const saveBtnEl = document.createElement("button");

    input.setAttribute("id", "add");
    itemEl.setAttribute("id", "item-text-1");
    itemEl.setAttribute("contentEditable", true);
    editBtnEl.setAttribute("id", "edit-button-1");
    editBtnEl.setAttribute("display", "none");
    saveBtnEl.setAttribute("id", "save-button-1");
    saveBtnEl.setAttribute("display", "block");

    document.body.appendChild(itemEl);
    document.body.appendChild(editBtnEl);
    document.body.appendChild(saveBtnEl);
    document.body.appendChild(input);
  });

  it("renders", () => {
    shallow(<App />);
  });

  it("displays initial to-dos", () => {
    const wrapper = mount(<App />);
    expect(
      wrapper.find(".todo-container").find("div.todo-container")
    ).toHaveLength(4);
  });

  it("addNewItem", () => {
    const wrapper = mount(<App />);
    wrapper
      .find(".todo")
      .find("#add")
      .instance().value = "sample text";
    wrapper
      .find(".todo")
      .find("#add-button")
      .simulate("click");
    expect(
      wrapper
        .find(".todo")
        .find("#add")
        .instance().value
    ).toEqual("sample text");
    expect(
      wrapper.find(".todo-container").find("div.todo-container")
    ).toHaveLength(5);
  });

  it("removeItem", () => {
    const wrapper = mount(<App />);
    wrapper
      .find(".todo")
      .find(".todo-container")
      .at(0)
      .find(".btn-delete")
      .simulate("click");
    expect(
      wrapper.find(".todo-container").find("div.todo-container")
    ).toHaveLength(3);
  });

  it("completeItem", () => {
    const wrapper = mount(<App />);
    wrapper
      .find(".todo")
      .find(".todo-container")
      .at(0)
      .find(".checkbox-complete")
      .simulate("click");
    expect(
      wrapper.find(".todo-container").find("div.todo-container")
    ).toHaveLength(3);
  });

  it("editItem", () => {
    const wrapper = mount(<App />);
    wrapper
      .find(".todo")
      .find(".todo-container")
      .at(0)
      .find(".btn-edit")
      .simulate("click");
    expect(
      wrapper
        .find(".todo")
        .find(".todo-container")
        .at(0)
        .find("#item-text-1")
        .props()
    ).toEqual({
      suppressContentEditableWarning: "true",
      contentEditable: "false",
      id: "item-text-1",
      className: "input-textarea",
      children: "todo text 2"
    });
  });

  it("saveItem", () => {
    const wrapper = mount(<App />);
    wrapper
      .find(".todo")
      .find(".todo-container")
      .at(0)
      .find(".btn-save")
      .simulate("click");
    expect(
      wrapper
        .find(".todo")
        .find(".todo-container")
        .at(0)
        .find("#item-text-1")
        .props()
    ).toEqual({
      suppressContentEditableWarning: "true",
      contentEditable: "false",
      id: "item-text-1",
      className: "input-textarea",
      children: ""
    });
  });
});
