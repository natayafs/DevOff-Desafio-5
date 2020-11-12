import About from './about';
import Stats from './stats';
import Evolution from './evolution';
import Moves from './moves';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Pokerouter() {
    return (
      <div style={{padding: '0em 2em', color: 'grey'}}>
          <Router>
            <div>
              <nav className="navbar">
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/stats">Base Stats</Link>
                <Link className="link" to="/evolution">Evolution</Link>
                <Link className="link" to="/moves">Moves</Link>
              </nav>
            </div>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/stats" component={Stats} />
              <Route path="/evolution" component={Evolution} />
              <Route path="/moves" component={Moves} />
            </Switch>
          </Router>
      </div>
    );
  }