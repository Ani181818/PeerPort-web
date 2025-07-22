import axios from "axios"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserRequests, removeRequests } from "../utils/requestsSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { Search } from "lucide-react";

const Request = ()=>{
    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRequests, setFilteredRequests] = useState([]);

    const fetchRequets = async()=>{
        const requests = await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true});
        console.log(requests);
        dispatch(addUserRequests(requests.data))

    }

    const handleRequests = async(status,id)=>{
        try{
            await axios.post(BASE_URL+"/request/review/"+status+"/"+id,{},{withCredentials:true})
            dispatch(removeRequests(id));
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchRequets();
    },[])

    useEffect(() => {
        if (requests) {
            const filtered = requests.filter(request => {
                const { firstName, lastName, skills, about } = request.fromUserId;
                const fullName = `${firstName} ${lastName}`.toLowerCase();
                const userSkills = skills?.toLowerCase() || "";
                const userAbout = about?.toLowerCase() || "";
                const search = searchTerm.toLowerCase();
                
                return fullName.includes(search) || 
                       userSkills.includes(search) || 
                       userAbout.includes(search);
            });
            setFilteredRequests(filtered);
        }
    }, [requests, searchTerm]);
    if (!requests) return;

    if (requests.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7465/7465691.png"
            alt="No Requests"
            className="w-64 h-64 mb-6 animate-fadeIn"
          />
          <h2 className="text-3xl font-bold text-gray-300 mb-2">
            No Requests Found
          </h2>
          <p className="text-gray-400 text-md">
            Looks like no one has sent you a request yet.
          </p>
        </div>
      );
    }

    return (
      <>
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
          Your Requests
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search requests by name, skills, or about..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
            />
          </div>
        </div>
        <div className="my-10">
          {(searchTerm ? filteredRequests : requests).map((request) => {
            const { _id,firstName, lastName, age, gender, about, photoURL,skills } =
              request.fromUserId;
            return (
              <div key={_id}>
                <ul className="list flex justify-between m-4 p-6 rounded-xl w-1/2 mx-auto bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300">
                  <li className="list-row">
                    <div className="mr-8">
                      <img className="size-20 rounded-full border-4 border-blue-400 shadow-lg" src={photoURL} />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {firstName + " " + lastName}
                      </div>
                      {age && gender && (
                        <div className="text-sm font-medium text-slate-300 mt-1">
                          {age + "," + gender}
                        </div>
                      )}
                      <div className="text-sm font-medium text-blue-300 mt-1">
                        {skills}
                      </div>
                      <div className="text-sm text-slate-200 mt-2 leading-relaxed">
                        {about}
                      </div>
                    </div>
                    <div>
                      <button className="btn bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 border-none text-white font-semibold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg mx-2" onClick={() => handleRequests("rejected",request._id)}>
                        Reject
                      </button>
                      <button className="btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-none text-white font-semibold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg" onClick={() => handleRequests("accepted",request._id)}>
                        Accept
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </>
    );
}

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-4">
            <p className="text-slate-300">
              Found {filteredRequests.length} request{filteredRequests.length !== 1 ? 's' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && filteredRequests.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[40vh] text-center">
            <Search className="w-16 h-16 text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-300 mb-2">No matches found</h3>
            <p className="text-slate-400">Try adjusting your search terms</p>
          </div>
        )}

export default Request