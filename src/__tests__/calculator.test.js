import { render } from '@testing-library/react';
import CalcInterface from '../components/calculator';

describe('Test component', () => {
  it('Renders correctly', () => {
    const tree = render(<CalcInterface />);
    expect(tree).toMatchSnapshot();
  });
});
