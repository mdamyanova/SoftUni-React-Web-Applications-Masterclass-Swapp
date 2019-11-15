import React from "react";
import { shallow, mount } from "enzyme";
import SolidButton from "../../components/common/forms/SolidButton";

describe("<SolidButton />", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<SolidButton onClick={() => {}} text="Button Text" />)
    ).toMatchSnapshot();
  });

  it("should have props", () => {
    const wrapper = mount(
      <SolidButton onClick={() => {}} text="Button Text" />
    );
    expect(wrapper.props().text).toEqual("Button Text");
  });
});
