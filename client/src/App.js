import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutPage, CoursesPage, HomePage } from "./pages";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
