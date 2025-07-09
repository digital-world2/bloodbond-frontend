import {createSlice} from '@reduxjs/toolkit'
import { userLogin, userRegister } from './authActions';


const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;


const initialState= {
    loading: false,
    user:null,
    token,
    error:null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        //LOGIN USER
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error =null;
        });
        builder.addCase(userLogin.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
        });
        builder.addCase(userLogin.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        });
        //REGISTER USER
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
          });
          
          builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload?.user || null; // ✅ Safe access
          });
          
          builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload || "Registration failed";
          });
          
        // builder.addCase(userRegister.pending, (state) => {
        //     state.loading = true;
        //     state.error =null;
        // });
        // builder.addCase(userRegister.fulfilled, (state, {payload}) => {
        //     state.loading = false;
        //     state.user = payload.user;
        // });
        // builder.addCase(userRegister.rejected, (state, {payload}) => {
        //     state.loading = false;
        //     state.error = payload;
        // });
    },
});
export default authSlice;