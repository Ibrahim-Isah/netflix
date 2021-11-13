
import * as ROUTES from './constants/route';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import {Home, Browse, Signin , Signup} from './pages';

function App() {
  return (
    <>
    <Router>
      <Route path={ROUTES.BROWSE} exact>
        <Browse />
      </Route>

      <Route path={ROUTES.SIGN_IN} exact>
        <Signin />
      </Route>

      <Route path={ROUTES.SIGN_UP} exact>
        <Signup />
      </Route>

      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>

    </Router> 
    </>
  );
}

export default App;
