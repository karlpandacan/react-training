import HealthDeclaration from './pages/HealthDeclaration';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import {
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact strict path="/" component={HealthDeclaration} />
      <Route exact strict path="/login" component={Login} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}

export default App;