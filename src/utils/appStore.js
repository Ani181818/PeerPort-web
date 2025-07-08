import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import userFeed from "./feedSlice"
import userConnection from "./connectionsSlice"
import userRequests from "./requestsSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:userFeed,
        connections:userConnection,
        requests:userRequests
    }
})

export default appStore;