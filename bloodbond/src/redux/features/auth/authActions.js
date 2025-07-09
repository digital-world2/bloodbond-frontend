import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../../services/API";
import {toast} from 'react-toastify';



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role,email,password},{rejectWithValue}) => {
        try {
            const {data} = await API.post('/auth/login',{role,email,password})
            //store token
            if(data.success){
                localStorage.setItem('token', data.token);
                toast.success(data.message);
            }
            return data;
        } catch (error) {
           if(error.response && error.response.data.message){
            return rejectWithValue(error.response.data.message)
           }else{
            return rejectWithValue(error.message)
           }
        }
    }
)

//REGISTER
// export const userRegister = createAsyncThunk(
//     'auth/register',
//     async ({name,role,email,password,adminName,bloodGroup,phonenumber,address},{rejectWithValue}) => {
//         try {
//             const {data} = await API.post('/auth/register', {
//                 name,role,email,password,adminName,bloodGroup,phonenumber,address
//             })
//             if(data.success){
//                 toast.success(data.message);
//                 window.location.replace('/login');
//             }
//         } catch (error) {
//             console.log(error)
//             if(error.response && error.response.data.message){
//                 return rejectWithValue(error.response.data.message)
//                }else{
//                 return rejectWithValue(error.message)
//                }
//         }
//     }
// )


export const userRegister = createAsyncThunk(
  'auth/register',
  async ({ name, role, email, password, adminName, bloodGroup, phonenumber, address, bloodReportImage }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('role', role);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('adminName', adminName);
      formData.append('bloodGroup', bloodGroup);
      formData.append('phonenumber', phonenumber);
      formData.append('address', address);
      if (bloodReportImage) {
        formData.append('bloodReportImage', bloodReportImage);
      }

      const { data } = await API.post('/auth/register', formData, {
        headers: {
  'Content-Type': 'multipart/form-data'
}
      });

      if (data.success) {
        toast.success(data.message);
        window.location.replace('/login');
        return data;
      } else {
        return rejectWithValue(data.message);
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

