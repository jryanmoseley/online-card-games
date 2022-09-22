import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <div className="layout">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
