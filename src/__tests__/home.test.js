import { render } from '@testing-library/react';
import Home from '../pages/Home';

it('Checking if Home page renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
