import { NavBar } from "./components/Navbar";
import Greating from "./components/Greeting";

function Home() {

  return (
    <div className="bg-bodycolor">
      <NavBar />
      <Greating />
    </div>
  );
}
export default Home;
