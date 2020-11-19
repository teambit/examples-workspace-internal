import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

export const adapterConfig = () => configure({ adapter: new Adapter() });