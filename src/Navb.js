//<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
import { Outlet, Link } from "react-router-dom";
function Navb(){
    return<>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <p class="navbar-brand">Company A</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <p class="nav-link" ><Link to="/">Home</Link></p>
      </li>
      <li class="nav-item">
        <p class="nav-link" ><Link to="/about">About</Link></p>
      </li>
      <li class="nav-item">
        <p class="nav-link" ><Link to="/services">Services</Link></p>
      </li>
      <li class="nav-item">
        <p class="nav-link" ><Link to="/contact">Contact us</Link></p>
      </li>
    </ul>
  </div>
</nav>
<Outlet />
</>
    
}
export default Navb;