import { userLogin, userRegister } from '../redux/features/auth/authActions';
import store from '../redux/store';


export const handleLogin = (e,email,password,role) => {
        e.preventDefault();
        try{
            if(!role || !email || !password) {
                return alert('Please Provide All Fields');
            }
            store.dispatch(userLogin({email,password,role}));
        }
        catch (error) {
            console.log(error);
        }
};

export const handleRegister = (e,name,role,email,password,adminName,bloodGroup,phonenumber,address, bloodReportImage) => {
    e.preventDefault();
    try{
        if(!role || !phonenumber || !address || !email || !password) {
            return alert('Please Provide All Fields');
        }
        store.dispatch(userRegister({
  name, role, email, password, adminName, bloodGroup, phonenumber, address, bloodReportImage
}));

    }
    catch(error){
        console.log(error);
    }
};