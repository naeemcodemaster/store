import { createSlice } from "@reduxjs/toolkit";
const GlobalReducer = createSlice({
    name:'Global',
    initialState:{
        success:''
    },
    reducers:{
        setSuccess:(state,action)=>{
            console.log(action.payload);
            state.success = action.payload;
        },
        clearMessage:(state)=>{
            state.success = '';
        }
    }
});
export const {setSuccess,clearMessage} = GlobalReducer.actions;
export default GlobalReducer.reducer;