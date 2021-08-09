import Navbar from './Navbar';
import RouteList from './RouteList';
import { BrowserRouter as Router, } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Navbar />
          <RouteList />
        </div>
      </div>
    </Router>
  );
}

export default App;
