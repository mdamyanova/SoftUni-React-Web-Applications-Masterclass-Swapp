import React from "react";
import { shallow, mount } from "enzyme";
import TwoInlineTexts from "../../components/common/forms/TwoInlineTexts";

describe("<TwoInlineTexts />", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<TwoInlineTexts firstText="first" secondText="second" />)
    ).toMatchSnapshot();
  });

  it("should have props", () => {
    const wrapper = mount(
      <TwoInlineTexts firstText="first" secondText="second" />
    );
    expect(wrapper.props().firstText).toEqual("first");
    expect(wrapper.props().secondText).toEqual("second");
  });
});
