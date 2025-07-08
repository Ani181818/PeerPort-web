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
        <div className="card bg-black text-neutral-content w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">{isLogin ?"Login":"SignUp"}</h2>
            <div className=" text-white py-4">
              {!isLogin && <><fieldset className="fieldset">
                <legend className="fieldset-legend text-white  font bold">
                  First Name
                </legend>
                <input
                  type="text"
                  className="input w-full "
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white  font bold">
                  Last Name
                </legend>
                <input
                  type="text"
                  className="input w-full "
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset></>}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white  font bold">
                  Email ID:
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
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={isLogin?handleLoginSubmit:handleSignUp}>
                {isLogin?"LogIn":"SignUp"}
              </button>
            </div>
            <p className="text-center cursor-pointer my-2" onClick={()=>setIsLogin((val)=>!val)}>{isLogin?"New User?Sign Up Here":"Already a User?Login Here"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
