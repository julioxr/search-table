import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {
        fetchUsers,
        usuario,
        setUsuario,
        errorLogin,
        setErrorLogin,
        setLogged,
        pass,
        setPass,
        errorMsg,
        setErrorMsg,
    } = useContext(DataContext);

    const loginData = {
        user: "ju",
        pass: "ju",
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (usuario === "" || pass === "") {
            setErrorLogin(true);
            setErrorMsg("Los campos no pueden estar vacios");
            return;
        }

        if (
            usuario.trim() === loginData.user &&
            pass.trim() === loginData.pass
        ) {
            fetchUsers();
            setErrorLogin(false);
            setLogged(true);
            setLocalStorage();
            navigate("/main");
            return "";
        } else {
            setErrorLogin(true);
            setErrorMsg("El usuario o la contraseña son incorrectos");
            return "";
        }
    };

    const setLocalStorage = () => {
        localStorage.setItem(
            "logged",
            JSON.stringify({ username: usuario, password: pass })
        );
        console.log("se guardo el localstorage");
    };

    const getLocalStorage = () => {
        try {
            const userStorage = localStorage.getItem("logged");
            setUsuario(userStorage.username);
            setPass(userStorage.password);
            fetchUsers();
            setLogged(true);
        } catch (error) {
            console.log("no hay datos en localstorage");
        }
    };

    useEffect(() => {
        fetchUsers();
        getLocalStorage();
    }, []);

    return (
        <>
            <form action="#">
                <input
                    type="text"
                    placeholder="user"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <button type="submit" onClick={(e) => handleLogin(e)}>
                    LogIn
                </button>
                <Link to="/register">Registrarse</Link>
            </form>
            {errorLogin && <p>{errorMsg}</p>}
        </>
    );
};

export default Login;
