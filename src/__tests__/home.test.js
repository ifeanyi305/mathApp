import { render } from '@testing-library/react';
import HomePage from '../components/home';

describe('test Homepage component', () => {
  it('renders correctly', () => {
    const tree = render(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
