import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);

  const fetchConnections = async () => {
    try {
      const users = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(users.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    if (connections) {
      const filtered = connections.filter((conn) =>
        (conn.firstName + " " + conn.lastName)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredConnections(filtered);
    }
  }, [searchTerm, connections]);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/connection-lost-7970447-6361911.png"
          alt="No Connections"
          className="w-64 h-64 mb-6 animate-fadeIn"
        />
        <h2 className="text-3xl font-bold text-gray-300 mb-2">
          No Connections Found
        </h2>
        <p className="text-gray-400 text-md">
          You haven’t connected with anyone yet. Explore and send requests!
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
        Your Connections
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="my-10">
        {filteredConnections.map((connection) => (
          <div key={connection._id}>
            <ul className="list flex m-4 p-6 rounded-xl w-1/2 mx-auto bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300">
              <li className="list-row flex justify-between w-full items-center">
                <div className="flex">
                  <img
                    className="size-20 rounded-full border-4 border-blue-400 shadow-lg mr-8"
                    src={connection.photoURL}
                    alt="Profile"
                  />
                  <div className="text-white">
                    <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {connection.firstName + " " + connection.lastName}
                    </div>
                    {connection.age && connection.gender && (
                      <div className="text-sm font-medium text-slate-300 mt-1">
                        {connection.age + ", " + connection.gender}
                      </div>
                    )}
                    <div className="text-sm font-medium text-blue-300 mt-1">
                      {connection.skills}
                    </div>
                    <div className="text-sm text-slate-200 mt-2 leading-relaxed">
                      {connection.about}
                    </div>
                  </div>
                </div>
                <Link to={"/chat/" + connection._id}>
                  <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none text-white font-semibold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg">
                    Chat
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Connections;
