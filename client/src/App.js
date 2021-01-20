import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutPage, CoursesPage, HomePage } from "./pages";
import "./App.css";
import { CourseForm, Header, ModuleList } from "./components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path="/courses/new" component={CourseForm} />
        <Route path="/course/:id" component={ModuleList} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
