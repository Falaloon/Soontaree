export const NavBar = () => {
  return (
    <div className="navbar shadow-md ">
      <ul className="navbar-list grid grid-cols-12 gap-12 justify-items-center h-[50px] content-center	">
        <li
          className="col-start-10 col-end-10
         hover:bg-[#FFCC70] active:bg-[#f2bc58] hover:shadow-lg hover:scale-125 rounded-3xl p-4	"
        >
          <a href="/">Home</a>
        </li>
        <li
          className="col-start-11 col-end-11
          hover:bg-[#FFCC70]  active:bg-[#f2bc58]  hover:shadow-lg hover:scale-125 rounded-3xl p-4	"
        >
          <a href="/project">Project</a>
        </li>
        <li
          className="col-start-12 col-end-12
          hover:bg-[#FFCC70]  active:bg-[#f2bc58]  hover:shadow-lg hover:scale-125 rounded-3xl p-4	"
        >
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};
