import React from "react";
import { shallow, mount } from "enzyme";
import NormalText from "../../components/common/forms/NormalText";

describe("<NormalText />", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<NormalText className="testText" text="Test Normal Text" />)
    ).toMatchSnapshot();
  });

  it("should have props", () => {
    const wrapper = mount(
        <NormalText className="testText" text="Test Normal Text" />
    );
    expect(wrapper.props().className).toEqual("testText");
    expect(wrapper.props().text).toEqual("Test Normal Text");
  });
});
