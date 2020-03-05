import React from "react";
import { shallow, mount } from "enzyme";
import ConstructList from "./construct-list";

const props = {
  listItem: { text: "sample test", complete: false },
  completeItemFn: jest.fn(),
  editItemFn: jest.fn(),
  saveItemFn: jest.fn(),
  removeItemFn: jest.fn()
};

describe("Todo", () => {
  it("renders", () => {
    shallow(<ConstructList {...props} />);
  });

  it("should call completeItemFn", () => {
    const wrapper = mount(<ConstructList {...props} />);
    wrapper
      .find(".todo-container")
      .find("input")
      .simulate("click");
    expect(props.completeItemFn).toHaveBeenCalled();
  });

  it("should call editItemFn", () => {
    const wrapper = mount(<ConstructList {...props} />);
    wrapper
      .find(".todo-container")
      .find("button")
      .first()
      .simulate("click");
    expect(props.editItemFn).toHaveBeenCalled();
  });

  it("should call saveItemFn", () => {
    const wrapper = mount(<ConstructList {...props} />);
    wrapper
      .find(".todo-container")
      .find("button")
      .at(1)
      .simulate("click");
    expect(props.saveItemFn).toHaveBeenCalled();
  });

  it("should call removeItemFn", () => {
    const wrapper = mount(<ConstructList {...props} />);
    wrapper
      .find(".todo-container")
      .find("button")
      .last()
      .simulate("click");
    expect(props.removeItemFn).toHaveBeenCalled();
  });
});
