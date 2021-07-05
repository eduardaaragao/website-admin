import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import Add from './Components/Add'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lgnavbar-light bg-light">
          <a className="navbar-brand" href="/" style={{color:'red',fontWeight:'bold'}}>BizDirect</a>
          <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" arialabel="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            </li>
          </ul>
        </div>
        <Link className="nav-link" to="/">Lista de Gestores</Link>
          <Link className="btn btn-success" to="/add">Adicionar Gestor</Link>
        </nav>
        <div className="container py-4">
          <div className="row">
            <Route path="/" exact component={Home}></Route>
            <Route path="/add" exact component={Add}></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;