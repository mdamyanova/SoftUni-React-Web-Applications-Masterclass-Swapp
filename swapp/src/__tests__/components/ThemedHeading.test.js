import React from "react";
import { shallow, mount } from "enzyme";
import ThemedHeading from "../../components/common/forms/ThemedHeading";

describe("<ThemedHeading />", () => {
  it("should match snapshot", () => {
    expect(shallow(<ThemedHeading text="test" />)).toMatchSnapshot();
  });

  it("should have props", () => {
    const wrapper = mount(<ThemedHeading text="test" />);
    expect(wrapper.props().text).toEqual("test");
  });
});
