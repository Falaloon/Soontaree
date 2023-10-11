import { NavBar } from "./components/Navbar";
import Greating from "./components/Greeting";
// import Project from "./components/Project";
import { About } from "./components/About";
function Home() {
  return (
    <div className="bg-bodycolor">
      <NavBar />
      <Greating />
      {/* <Project /> */}
      {/* <About /> */}
    </div>
  );
}
export default Home;
