import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../components/Navbar';

describe('Test for Navbar component', () => {
  test('The component should render', () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
