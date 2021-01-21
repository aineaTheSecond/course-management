// import libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "material-react-toastify";

// components
import { AboutPage, CoursesPage, HomePage } from "./pages";
import {
  CourseForm,
  Header,
  ModuleList,
  ModuleForm,
  EditForm,
  ManageModules,
} from "./components";

// import css files
import "./App.css";
import "material-react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route path="/courses/new" component={CourseForm} />
        <Route exact path="/course/:id" component={ManageModules} />
        <Route exact path="/course/:id/modules/new" component={ModuleForm} />
        <Route exact path="/course/:id/modules/:id" component={EditForm} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
