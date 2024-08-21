import { configureStore } from "@reduxjs/toolkit";
import authService from "./services/AuthServices";
import CategoryService from "./services/CategoryService";
import AuthReducer from "./reducers/AuthReducer";
import GlobalReducer from "./reducers/GlobalReducer";
const store = configureStore({
    reducer:{
        [authService.reducerPath]:authService.reducer,
        [CategoryService.reducerPath]:CategoryService.reducer,
        "authReducer":AuthReducer,
        "GlobalReducer":GlobalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authService.middleware,CategoryService.middleware]),
        
})
export default store;