import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Body = () => {
    const dispatch =  useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=> store.user);
    const fetchData = async()=>{
        if(userData)return;
        try{
        const user = await axios.get(BASE_URL+"/profile/view",{withCredentials:true});
        dispatch(addUser(user.data));
        }
        catch(error){
            if(error.status === 400){
            navigate("/login")
            }
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <>
            <NavBar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Body;