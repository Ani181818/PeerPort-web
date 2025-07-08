import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addUserRequests:(state,actions)=>actions.payload,
        removeRequests:(state,action)=>{
            const newArray = state.filter((r)=> r._id !== action.payload)
            return newArray;
        }
    }
    
})

export const {addUserRequests,removeRequests} = requestsSlice.actions;
export default requestsSlice.reducer;