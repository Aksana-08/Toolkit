import { Link } from "react-router-dom";
import Balanse from "./Balanse";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <a href="">Home</a>
        </Link>
        <Link to="/add">
          <a href="">Transaction</a>
        </Link>
      </nav>
      <Balanse />
    </>
  );
};

export default Navigation;
