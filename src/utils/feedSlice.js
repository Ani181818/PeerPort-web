import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeedData(state,action){
            return action.payload;
        },
        removeFeedData(state,action){
            if(!action.payload)return null;
            const newFeed = state.filter((f) => f._id !== action.payload);
            return newFeed;
        }
    }
})

export const {addFeedData,removeFeedData} = feedSlice.actions;

export default feedSlice.reducer;