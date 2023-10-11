import { NavBar } from "./components/Navbar";
import Greating from "./components/Greeting";
// import Project from "./components/Project";
import { About } from "./components/About";
// import { useState } from "react";


function Home() {
  // const [sector, setSector] = useState("");

  return (
    <div className="bg-bodycolor">
      {/* <NavBar /> */}
      <Greating />
      {/* <Project /> */}
      {/* <About /> */}
    </div>
  );
}
export default Home;
