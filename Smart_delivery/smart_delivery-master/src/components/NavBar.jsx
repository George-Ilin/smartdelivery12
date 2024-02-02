import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { session, setSession } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setSession(null);
    localStorage.removeItem("session");
    navigate("/sign-in");
  }
  return (
    <>
      <nav>
        <h1>
          {" "}
          <Link to="/" className="navbarListItem">
            Rent a delivery car
          </Link>
        </h1>

        <div>
          {session ? (
            <div className="navbarListItems">
              {" "}
              <Link to="/" className="navbarListItem">
                <img
                  src="https://www.atvrom.ro/frontend/atvrom/images/test-drive.webp"
                  alt=""
                />
                Home
              </Link>
              <Link to="/scooters" className="navbarListItem">
                <img
                  src="https://www.atvrom.ro/storage/categories/24/Icon-zehoo-2_O7Gma_1703161922.webp"
                  alt=""
                />{" "}
                Scooters
              </Link>
              <Link to="/cars" className="navbarListItem">
                <img
                  src="https://www.atvrom.ro/storage/categories/98/sxs_6anBL_1661196558.webp"
                  alt=""
                />
                Cars
              </Link>
              <p className="navbarListItem">{session.user.email}</p>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/sign-in" className="navbarListItem">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
