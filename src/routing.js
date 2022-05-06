import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Extra from "./component/Extra";
import Personal from "./component/Personal";
import Projects from "./component/Projects";
const routing = (
  <Router>
    <div>
      <div>
        <Link to="/"></Link>
      </div>
      <br />
      <div>
        <Link to="/Education"></Link>
      </div>
      <br />
      <div>
        <Link to="/Projects"></Link>
      </div>
      <br />
      <div>
        <Link to="/Experience"></Link>
      </div>
      <br />
      <div>
        <Link to="/Extra"></Link>
      </div>
      <br />

      <Route exact path="/" component={Personal} />
      <Route path="/Education" component={Education} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Experience" component={Experience} />
      <Route path="/Extra" component={Extra} />
    </div>
  </Router>
);
export default routing;