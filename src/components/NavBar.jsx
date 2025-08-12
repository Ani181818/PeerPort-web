import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removeFeedData } from "../utils/feedSlice";
import { LogOut } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogout = async () => {
   try {
     await axios.post(
       `${BASE_URL}/logout`,
       {},
       { withCredentials: true } // ensures cookies are sent & cleared
     );

     dispatch(removeUser());
     dispatch(removeFeedData(null));
     navigate("/");
   } catch (err) {
     console.error("Logout failed:", err);
   }
 };

  return (
    <div className="navbar bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50 px-4 border-b border-slate-700">
      {/* Left Logo */}
      <div className="flex-1">
        <Link
          to={user ? "/feed" : "/"}
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-500 transition-all duration-300"
        >
          PeerPort ⚡
        </Link>
      </div>

      {/* Center Menu */}
      {user && (
        <div className="flex-none hidden md:flex gap-8 bg-slate-800/50 px-6 py-2 rounded-full backdrop-blur-sm">
          <Link
            to="/feed"
            className="hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-1 rounded-md hover:bg-slate-700/50"
          >
            Feed
          </Link>
          <Link
            to="/profile"
            className="hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-1 rounded-md hover:bg-slate-700/50"
          >
            Profile
          </Link>
          <Link
            to="/connections"
            className="hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-1 rounded-md hover:bg-slate-700/50"
          >
            Connections
          </Link>
          <Link
            to="/requests"
            className="hover:text-blue-400 transition-colors duration-200 text-lg font-medium px-3 py-1 rounded-md hover:bg-slate-700/50"
          >
            Requests
          </Link>
        </div>
      )}

      {/* Right Side - Login or User Avatar */}
      {user ? (
        <div className="flex items-center gap-4 ml-6">
          <p className="text-sm hidden sm:block">
            Welcome,{" "}
            <span className="text-blue-400 font-semibold">{user.firstName}</span>
          </p>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-all duration-150"
            >
              <div className="w-10 rounded-full ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900 hover:ring-purple-400 transition-all duration-200">
                <img alt="User avatar" src={user.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl w-48 border border-slate-700"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-400 hover:bg-red-900/50 rounded-lg px-3 py-2 w-full text-left transition-all duration-200 font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
