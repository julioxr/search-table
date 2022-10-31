import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Login = () => {
    const {
        fetchUsers,
        usuario,
        setUsuario,
        errorLogin,
        setErrorLogin,
        setLogin,
        pass,
        setPass,
        errorMsg,
        setErrorMsg,
    } = useContext(DataContext);

    const loginData = {
        user: "ju",
        pass: "ju",
    };

    const handleLogin = () => {
        if (usuario === "" || pass === "") {
            setErrorLogin(true);
            setErrorMsg("Los campos no pueden estar vacios");
            return;
        }

        if (
            usuario.trim() === loginData.user &&
            pass.trim() === loginData.pass
        ) {
            // fetchUsers();
            setErrorLogin(false);
            setLogin(true);
            setLocalStorage();
            return "";
        } else {
            setErrorLogin(true);
            setErrorMsg("El usuario o la contraseña son incorrectos");
            return "";
        }
    };

    const setLocalStorage = () => {
        localStorage.setItem(
            "test",
            JSON.stringify({ username: usuario, password: pass })
        );
        console.log("se guardo el localstorage");
    };

    const getLocalStorage = () => {
        try {
            const localLogin = localStorage.getItem("test");
            setUsuario(localLogin.username);
            setPass(localLogin.password);
            fetchUsers();
            setLogin(true);
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
                <button onClick={handleLogin}>LogIn</button>
                <a href="#">Registrarse</a>
            </form>
            {errorLogin && <p>{errorMsg}</p>}
        </>
    );
};

export default Login;
