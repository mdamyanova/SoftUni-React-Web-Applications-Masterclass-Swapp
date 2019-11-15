import React from "react";
import { shallow, mount } from "enzyme";
import InputField from "../../components/common/forms/InputField";

describe("<InputField />", () => {
  it("should match snapshot", () => {
    expect(
      shallow(<InputField name='email' type='email' placeholder='email' onChange={() => {}} />)
    ).toMatchSnapshot();
  });

  it("should have props", () => {
    const wrapper = mount(
        <InputField name='email' type='email' placeholder='email' onChange={() => {}} />
    );
    expect(wrapper.props().name).toEqual("email");
    expect(wrapper.props().type).toEqual("email");
    expect(wrapper.props().placeholder).toEqual("email");
  });
});
