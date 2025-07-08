import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addUserRequests, removeRequests } from "../utils/requestsSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Request = ()=>{
    const dispatch = useDispatch();
    const requests = useSelector(store => store.requests);
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

    if (!requests) return;

    if (requests.length === 0) return <h1>No Connections Found!</h1>;
    return (
      <>
        <h1 className="text-white font-bold text-3xl text-center">
          Your Requests
        </h1>
        <div className="my-10">
          {requests.map((request) => {
            const { _id,firstName, lastName, age, gender, about, photoURL,skills } =
              request.fromUserId;
            return (
              <div key={_id}>
                <ul className="list  flex justify-between  m-4 p-4 rounded-lg w-1/2 mx-auto bg-base-300">
                  <li className="list-row">
                    <div className="mr-8">
                      <img className="size-20 rounded-box" src={photoURL} />
                    </div>
                    <div>
                      <div className="font-bold text-l">
                        {firstName + " " + lastName}
                      </div>
                      {age && gender && (
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {age + "," + gender}
                        </div>
                      )}
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {skills}
                      </div>
                      <div className="text-xs uppercase font-semibold opacity-60">
                        {about}
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-outline btn-primary mx-4" onClick={() => handleRequests("rejected",request._id)}>
                        Reject
                      </button>
                      <button className="btn btn-outline btn-secondary" onClick={() => handleRequests("accepted",request._id)}>
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

export default Request