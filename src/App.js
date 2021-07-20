import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home"
import MyFeed from "./Routes/MyFeed"
import Drafts from "./Routes/Drafts"
import MyFollowers from "./Routes/MyFollowers"
import Following from "./Routes/Following"
import MyTeam from "./Routes/MyTeam"
import MyReportees from "./Routes/MyReportees"
import Artifacts from "./Routes/Artifacts"
import Modules from "./Routes/Modules"
import Skills from "./Routes/Skills"
import NewJoins from "./Routes/NewJoins"
import Birthdays from "./Routes/Birthdays"
import NewProjects from "./Routes/NewProjects"
import Navbar from "./Components/Navbar";
import "./nav.css";

function App() {
   return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myfeed" exact component={MyFeed} />
          <Route path="/drafts" exact component={Drafts} />
          <Route path="/myfollowers" exact component={MyFollowers} />
          <Route path="/following" exact component={Following} />
          <Route path="/team" exact component={MyTeam} />
          <Route path="/reportees" exact component={MyReportees} />
          <Route path="/artifacts" exact component={Artifacts} />
          <Route path="/modules" exact component={Modules} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/newjoinees" exact component={NewJoins} />
          <Route path="/birthdays" exact component={Birthdays} />
          <Route path="/newprojects" exact component={NewProjects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
