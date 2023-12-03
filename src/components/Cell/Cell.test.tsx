import { render } from '@testing-library/react';
import Cell from './Cell';

describe('Cell component', () => {
  it('renders correctly', () => {
    const {container} = render(<Cell />);

    expect(container).toMatchSnapshot();
  });
});