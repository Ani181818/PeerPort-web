import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Connections = ()=>{
    const dispatch = useDispatch();
    const connections = useSelector((store)=>store.connections);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredConnections, setFilteredConnections] = useState([]);

    const fetchConnections = async()=>{
        try{
        const users = await axios.get(BASE_URL+"/user/connections",{withCredentials:true})
        dispatch(addConnections(users.data))
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    useEffect(() => {
        if (connections) {
            const filtered = connections.filter(connection => {
                const fullName = `${connection.firstName} ${connection.lastName}`.toLowerCase();
                const skills = connection.skills?.toLowerCase() || "";
                const about = connection.about?.toLowerCase() || "";
                const search = searchTerm.toLowerCase();
                
                return fullName.includes(search) || 
                       skills.includes(search) || 
                       about.includes(search);
            });
            setFilteredConnections(filtered);
        }
    }, [connections, searchTerm]);
    if(!connections)return;

    if (connections.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7465/7465691.png"
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
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search connections by name, skills, or about..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
            />
          </div>
        </div>
        <div className="my-10">
        {(searchTerm ? filteredConnections : connections).map((connection) => {
            return (
              <div key={connection._id}>
                <ul className="list flex m-4 p-6 rounded-xl w-1/2 mx-auto bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300">
                  <li className="list-row">
                    <div className="mr-8">
                      <img
                        className="size-20 rounded-full border-4 border-blue-400 shadow-lg"
                        src={connection.photoURL}
                      />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {connection.firstName + " " + connection.lastName}
                      </div>
                      {connection.age && connection.gender && (
                        <div className="text-sm font-medium text-slate-300 mt-1">
                          {connection.age + "," + connection.gender}
                        </div>
                      )}
                      <div className="text-sm font-medium text-blue-300 mt-1">
                        {connection.skills}
                      </div>
                      <div className="text-sm text-slate-200 mt-2 leading-relaxed">
                        {connection.about}
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
            );})}
          
        </div>
      </>
    );
}

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-4">
            <p className="text-slate-300">
              Found {filteredConnections.length} connection{filteredConnections.length !== 1 ? 's' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && filteredConnections.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[40vh] text-center">
            <Search className="w-16 h-16 text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-300 mb-2">No matches found</h3>
            <p className="text-slate-400">Try adjusting your search terms</p>
          </div>
        )}

export default Connections