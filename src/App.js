import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';
import List from './components/list';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
            <Route path="/about" component={Details} />
          </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
