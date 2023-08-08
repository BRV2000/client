import {useContext} from "react";
import { AuthContext } from "../contexts";
import { Auth } from "../pages/admin";

export const useAuth = () => useContext(AuthContext);