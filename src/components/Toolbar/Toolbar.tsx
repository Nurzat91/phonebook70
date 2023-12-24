import {NavLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="nav-link me-5">Contacts</NavLink>
        <NavLink to="/new-contact" className="nav-link me-5 border p-2 rounded">Add new contact</NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;