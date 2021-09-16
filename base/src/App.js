import {BrowserRouter as Router, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/vue">vue app</Link>
        <Link to="/react">react app</Link>
      </Router>
      {/* 微应用渲染到container容器中 */}
      <div id="container"></div>
    </div>
  );
}

export default App;
