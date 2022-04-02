import { render } from '@testing-library/react';
import Quotes from '../pages/Quotes';

it('Checking if Quotes page renders correctly', () => {
  const tree = render(<Quotes />);
  expect(tree).toMatchSnapshot();
});
