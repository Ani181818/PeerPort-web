import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [emailId,setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false);
  const [error, setError] = useState();
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
        setError(err?.response?.data);
      }
  } 
  const handleSignUp = async()=> {
      try{
          const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true})
          dispatch(addUser(res.data));
          return navigate("/profile");
      }
      catch(err){
        setError(err?.response?.data);
      }
  }


  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card bg-gradient-to-br from-slate-900 to-slate-800 text-white w-96 shadow-2xl border border-slate-700">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              {isLogin ? "Welcome Back" : "Join PeerPort"}
            </h2>
            <div className=" text-white py-4">
              {!isLogin && <><fieldset className="fieldset">
                <legend className="fieldset-legend text-blue-300 font-semibold">
                  First Name
                </legend>
                <input
                  type="text"
                  className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-blue-300 font-semibold">
                  Last Name
                </legend>
                <input
                  type="text"
                  className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset></>}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-blue-300 font-semibold">
                  Email ID:
                </legend>
                <input
                  type="text"
                  className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Type here"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-blue-300 font-semibold">
                  Password
                </legend>
                <input
                  type="text"
                  className="input w-full bg-slate-800 border-slate-600 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Type here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none text-white font-semibold px-8 py-2 shadow-lg transform hover:scale-105 transition-all duration-200" onClick={isLogin?handleLoginSubmit:handleSignUp}>
                {isLogin?"LogIn":"SignUp"}
              </button>
            </div>
            <p className="text-center cursor-pointer my-2 text-blue-300 hover:text-blue-200 transition-colors duration-200" onClick={()=>setIsLogin((val)=>!val)}>{isLogin?"New User? Sign Up Here":"Already a User? Login Here"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
