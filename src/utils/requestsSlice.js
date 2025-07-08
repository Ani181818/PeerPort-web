import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addUserRequests:(state,actions)=>actions.payload,
        removeRequests:()=>null
    }
    
})

export const {addUserRequests,removeRequests} = requestsSlice.actions;
export default requestsSlice.reducer;