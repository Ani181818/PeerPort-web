import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Connections = ()=>{
    const dispatch = useDispatch();
    const connections = useSelector((store)=>store.connections);
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

    if(!connections)return;

    if(connections.length === 0)return <h1>No Connections Found!</h1>
    return (
      <>
        <h1 className="text-white font-bold text-3xl text-center">Your Connections</h1>
        <div className="my-10">
        {connections.map((connection) => {
            return (
              <div>
                <ul className="list  flex m-4 p-4 rounded-lg w-1/2 mx-auto bg-base-300">
                  <li className="list-row">
                    <div className="mr-8">
                      <img
                        className="size-20 rounded-box"
                        src={connection.photoURL}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-l">
                        {connection.firstName + " " + connection.lastName}
                      </div>
                      {connection.age && connection.gender && (
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {connection.age + "," + connection.gender}
                        </div>
                      )}
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {connection.skills}
                      </div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {connection.about}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );})}
          
        </div>
      </>
    );
}

export default Connections