import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removeFeedData } from "../utils/feedSlice";
import { LogOut } from "lucide-react";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(removeUser());
      dispatch(removeFeedData(null));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-black text-white shadow-md sticky top-0 z-50 px-4">
      {/* Left Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-primary transition-all duration-200"
        >
          DevTinder 🚀
        </Link>
      </div>

      {/* Center Menu */}
      <div className="flex-none hidden md:flex gap-8">
        <Link
          to="/"
          className="hover:text-primary transition-colors duration-200 text-lg"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="hover:text-primary transition-colors duration-200 text-lg"
        >
          Profile
        </Link>
        <Link
          to="/connections"
          className="hover:text-primary transition-colors duration-200 text-lg"
        >
          Connections
        </Link>
        <Link
          to="/requests"
          className="hover:text-primary transition-colors duration-200 text-lg"
        >
          Requests
        </Link>
      </div>

      {/* Right Avatar + Welcome */}
      {user && (
        <div className="flex items-center gap-4 ml-6">
          <p className="text-sm hidden sm:block">
            Welcome,{" "}
            <span className="text-primary font-semibold">{user.firstName}</span>
          </p>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-all duration-150"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-black ring-offset-2">
                <img alt="User avatar" src={user.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-neutral text-white rounded-box w-48"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-400 hover:bg-red-900 rounded-md px-2 py-1 w-full text-left"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
