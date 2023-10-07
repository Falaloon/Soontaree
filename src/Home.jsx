import { NavBar } from "./components/Navbar";
import Project from "./components/Project";
import Greating from "./components/Greeting";
import { About } from "./components/About";
// border-solid border-2 border-sky-500
function Home() {
  return (
    <div>
      <NavBar />
      <Greating />
    </div>
  );
}
export default Home;
