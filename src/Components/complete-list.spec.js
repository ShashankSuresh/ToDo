import React from "react";
import { shallow } from "enzyme";
import CompleteList from "./complete-list";

const props = {
  listItem: { text: "sample test", complete: false }
};

describe("CompleteList", () => {
  it("renders", () => {
    shallow(<CompleteList {...props} />);
  });
});
