import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode} from 'jwt-decode'; // Using the standard ES Module import

const adminStorage = localStorage.getItem('admin_token');

function verifyToken() {
    if (adminStorage) {
        try {
            const decodeToken = jwtDecode(adminStorage); // Decoding the token
            const expiresIn = new Date(decodeToken.exp * 1000); // Convert seconds to milliseconds
            if (new Date() > expiresIn) {
                localStorage.removeItem('admin_token');
                return null;
            } else {
                return adminStorage;
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            localStorage.removeItem('admin_token');
            return null;
        }
    } else {  
        return null;
    }
}

const AuthReducer = createSlice({
    name: 'authReducer',
    initialState: {
        adminToken: verifyToken()
    },
    reducers: {
        setAdminToken: (state, action) => {
            state.adminToken = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('admin_token');
            state.adminToken = null;
        }
    }
});


export const { setAdminToken, logout } = AuthReducer.actions;
export default AuthReducer.reducer;
