import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId,setEmailId] = useState("rohit@gmail.com");
  const [password, setPassword] = useState("Rohit@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginSubmit = async()=> {
      try{
        const user =  await axios.post(BASE_URL+"/login",{
        emailId,
        password
      },{withCredentials:true});

      dispatch(addUser(user.data))
      return navigate("/")
    }
      catch(err){
        console.log(err);
      }
  } 


  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card bg-black text-neutral-content w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div className=" text-black py-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white  font bold">
                  Email ID:{emailId}
                </legend>
                <input
                  type="text"
                  className="input w-full "
                  placeholder="Type here"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white  font bold">
                  Password
                </legend>
                <input
                  type="text"
                  className="input w-full "
                  placeholder="Type here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLoginSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
