import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Navbar.Brand onClick={() => navigate("/")}>
        {/* <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /> */}
        <h3 className="text-light">HOME</h3>
      </Navbar.Brand>
    </Navbar>
  );
};
export default NavBar;
