import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import userFeed from "./feedSlice"
import userConnection from "./connectionsSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:userFeed,
        connections:userConnection
    }
})

export default appStore;