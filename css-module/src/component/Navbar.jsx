import { navbar, right } from "./Navbar.module.css";

let Navbar = () => {
  return (
    <>
      <div className={navbar}>
        <div className="left">
          <h1>Applute</h1>
        </div>
        <div className={right}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
