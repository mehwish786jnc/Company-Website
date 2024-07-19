import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div class="topnav">
      <nav>
        <ul>
          <p><Link to="/">Home</Link></p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/services">Services</Link>
          </p>
          <p>
            <Link to="/products">Products</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </ul>
      </nav>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;