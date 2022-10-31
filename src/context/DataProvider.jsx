import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [logged, setLogged] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [pageCounter, setPageCounter] = useState(2); // incrementador del slice para users
    const [end, setEnd] = useState(pageCounter);
    const [counterPage, setCounterPage] = useState(1); // para contar pagina 1 de 3
    const [start, setStart] = useState(0);
    const [pass, setPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const res = await fetch("http://127.0.0.1:5173/src/api/users.json");
            const userData = await res.json();
            setUsers(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const logOff = () => {
        setLogged(false);
        setStart(0);
        setEnd(pageCounter);
        setUsuario("");
        setPass("");
        localStorage.clear();
        navigate("/");
        console.log("se borro el local storage");
    };
    return (
        <DataContext.Provider
            value={{
                logged,
                setLogged,
                errorLogin,
                setErrorLogin,
                fetchUsers,
                user,
                users,
                usuario,
                setUsuario,
                start,
                setStart,
                end,
                setEnd,
                counterPage,
                pageCounter,
                setUsers,
                setCounterPage,
                logOff,
                setUser,
                pass,
                setPass,
                errorMsg,
                setErrorMsg,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
