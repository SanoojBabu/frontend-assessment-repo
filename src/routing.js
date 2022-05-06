import React, { useState } from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Extra from "./component/Extra";
import Personal from "./component/Personal";
import Projects from "./component/Projects";
import Download from "./component/Download";

const useRouting = () => {
  let [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phnumber: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    college: "",
    date1: "",
    date2: "",
    qualification1: "",
    desc1: "",
    school: "",
    date3: "",
    date4: "",
    desc2: "",
    title1: "",
    link1: "",
    desc3: "",
    title2: "",
    link2: "",
    desc4: "",
    institute1: "",
    position1: "",
    duration1: "",
    desc5: "",
    institute2: "",
    position2: "",
    duration2: "",
    desc6: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });
  return (
    <div>
      <Router>
        <Link to="/"></Link>
        <Link to="/Education"></Link>
        <Link to="/Projects"></Link>
        <Link to="/Experience"></Link>
        <Link to="/Extra"></Link>
        <Link to="/Download"></Link>
        <Route exact path="/">
          <Personal key={[values, setValues]} />
        </Route>
        <Route path="/Education">
          <Education key={[values, setValues]} />
        </Route>
        <Route path="/Projects">
          <Projects key={[values, setValues]} />
        </Route>
        <Route path="/Experience">
          <Experience key={[values, setValues]} />
        </Route>
        <Route path="/Extra">
          <Extra key={[values, setValues]} />
        </Route>
        <Route path="/Download">
          <Download key={[values, setValues]} />
        </Route>
      </Router>
    </div>
  );
};
export default useRouting;
