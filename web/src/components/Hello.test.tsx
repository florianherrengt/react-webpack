import * as React from "react";
import { Hello } from "./Hello";
import { shallow, mount, render } from "enzyme";

describe("Hello", () => {
  it("should render", () => {
    const wrapper = shallow(<Hello compiler="a" framework="t" />);
    expect(wrapper.find("h1").text()).toEqual("Hello from a and t!");
  });
});
