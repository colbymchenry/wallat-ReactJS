import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './main.scss'
import Register from './pages/Register';

function Routing() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
