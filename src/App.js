
import * as ROUTES from './constants/route';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {Home, Browse, Signin , Signup} from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

function App() {

  const {user} = useAuthListener();

  return (
    <>
    <Router>
      <Switch>
        <IsUserRedirect
          loggedInPath={ROUTES.BROWSE}
          user={user}
          path={ROUTES.SIGN_IN}
          exact
          >
            <Signin />
          </IsUserRedirect>

        <IsUserRedirect
          loggedInPath={ROUTES.BROWSE}
          user={user}
          path={ROUTES.SIGN_UP}
          exact
          >
            <Signup />
          </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          loggedInPath={ROUTES.BROWSE}
          user={user}
          path={ROUTES.HOME}
          exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
    </Router> 
    </>
  );
}

export default App;
