import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';

import 'jest-enzyme';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});