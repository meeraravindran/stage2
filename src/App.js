import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import SideNav from "./Components/SideNav";
import "./nav.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <SideNav/>
        <div id="main">
          <Card/>
          <Post/>
        </div>
      </div>
    </div>
  );
}

export default App;
