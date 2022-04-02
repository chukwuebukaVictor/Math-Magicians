import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';

// it ('Checking if Navigation Bar renders correctly', () => {
//   const tree = renderer.create(<Router> <NavBar /></Router>).toJSON();
//   expect(tree).toMatchSnapshot();
// });

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
