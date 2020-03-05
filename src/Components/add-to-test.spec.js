import React from "react";
import { shallow, mount } from "enzyme";
import AddItem from "./add-to-list";

const props = {
  addNewItemFn: jest.fn()
};

describe("CompleteList", () => {
  beforeEach(() => {
    const input = document.createElement("input");
    input.setAttribute("id", "add");
    document.body.appendChild(input);
  });

  it("renders", () => {
    shallow(<AddItem {...props} />);
  });

  it("should call onClick with a sample value", () => {
    const wrapper = mount(<AddItem {...props} />);
    wrapper.find("#add").instance().value = "sample text";
    wrapper.find("button").simulate("click");
    expect(wrapper.find("#add").instance().value).toEqual("sample text");
  });
});
