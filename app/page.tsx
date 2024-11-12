
export default function Home() {
  return (
    
    <div>
      <header className="bg-white fixed w-full shadow-sm z-3 left-0 top-0">
        <a href="" className="block float-left px-1.2 py-1 text-[#71C55D]">PARDPARW</a>
        <input className="hidden" type="checkbox" id="menu-btn"></input>
          <label className=""><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Award">Award</a></li>
            <li><a href="#Projects">Project</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Contact">Test</a></li>
          </ul>
      </header>
      
    </div>
  );
}
