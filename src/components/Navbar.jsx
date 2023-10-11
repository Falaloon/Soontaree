// border-solid border-black	border-2
export const NavBar = () => {
  return (
    <div className=" fixed w-full h-[70px] text-[#FFFADD items-center flex flex-row justify-between px-10 bg-[#22668D] z-10 font-bold font-IBMPlexSans text-xl rounded-b-lg">
      <p className="hover:bg-[#22668D] hover:text-[#FFFADD] hover:shadow-lg hover:scale-70 rounded-b-lg p-2">
        Soontaree Rs
      </p>
      <ul className="flex flex-row justify-around gap-10 ">
        <li
          className="
          hover:bg-[#22668D] hover:text-[#FFFADD] hover:shadow-lg hover:scale-70 rounded-b-lg p-2"
        >
          <a href="/">Home</a>
        </li>
        <li
          className="
          hover:bg-[#22668D] hover:text-[#FFFADD] hover:shadow-lg hover:scale-70 rounded-b-lg p-2"
        >
          <a href="/project">Project</a>
        </li>
        <li
          className="
          hover:bg-[#22668D] hover:text-[#FFFADD] hover:shadow-lg hover:scale-70 rounded-b-lg p-2"
        >
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};
