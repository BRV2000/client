import {useEffect,useState,createContext} from "react";
import {User} from "../api";

const userController = new User();
export const AuthContext = createContext();

export function AuthProvider(props) {
    const {children} = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
     // para comprobar si el usuario esta logeado o no
    }, [])
    
    const login  = async (accessToken) => {
        try {
            const response = await userController.getMe(accessToken);
            delete response.password;
            console.log(response);
                setUser(response);
                setToken(response);
        } catch (error) {
            console.error(error);
        }
    };

    const data = {
        accessToken: token,
        user,
        login,
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}