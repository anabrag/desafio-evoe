import './App.css';

import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import ProfilePage from './pages/profile.page';

export default function App() {
  return (
    <HashRouter basename="/">
          <Switch>
            <Route path="/">
                <ProfilePage />
            </Route>
          </Switch>
    </HashRouter>
  );
}