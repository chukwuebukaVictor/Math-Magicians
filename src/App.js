import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </Router>
);

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       digitObj: {
//         total: 0,
//         next: 0,
//         operation: null,
//       },
//     };
//     this.updateState = this.updateState.bind(this);
//   }

//   updateState(obj) {
//     this.setState({
//       digitObj: obj,
//     });
//   }

//   render() {
//     const { digitObj } = this.state;
//     return (
//       <div className="App">
//         <Calculator updateState={this.updateState} digitObj={digitObj} />
//       </div>
//     );
//   }
// }
// export default App;
