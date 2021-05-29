import { LogOut, Login } from '../actions/authActions';
import ToastService from '../services/ToasterService';

class Apis {
    loginAuth = (Token) => {
        return (dispatch) => {
            ToastService('Logged In Successfully', true);
            dispatch(Login(Token));
        };
    };

    logOutAuth = () => {
        return (dispatch) => {
            ToastService('Logged Out Successfully');
            dispatch(LogOut());
        };
    };
}

const apis = new Apis(); // TODO: create instance in another place

export default apis;