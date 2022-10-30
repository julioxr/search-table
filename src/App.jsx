import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [pageCounter, setPageCounter] = useState(2);
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [login, setLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(pageCounter);

    const loginData = {
        user: "ju",
        pass: "ju",
    };

    const fetchUsers = async () => {
        try {
            const res = await fetch("http://127.0.0.1:5173/src/api/users.json");
            const userData = await res.json();
            setUsers(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const next = () => {
        setStart(start + pageCounter);
        setEnd(end + pageCounter);
    };
    const prev = () => {
        setStart(start - pageCounter);
        setEnd(end - pageCounter);
    };

    const logOff = () => {
        setLogin(false);
        setStart(0);
        setEnd(pageCounter);
        setUsuario("");
        setPass("");
        localStorage.clear();
        console.log("se borro el local storage");
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
            setLogin(true);
        } catch (error) {
            console.log("no hay datos en localstorage");
        }
    };

    const handleUser = (e) => {
        setUser(e.target.value);
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
            fetchUsers();
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

    const orderByAge = ({ id }) => {
        if (id == "menor") {
            const sortedArray = arrayUser.sort((a, b) => a.age - b.age);
            setUsers(sortedArray);
            return "";
        } else if (id == "mayor") {
            const sortedArray = arrayUser.sort((a, b) => b.age - a.age);
            setUsers(sortedArray);
            return "";
        }
    };

    const deleteUser = (id) => {
        const filteredUser = users.filter((user) => user.id !== id);
        setUsers(filteredUser);
        console.log(filteredUser);
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    return (
        <div className="App">
            {!login && (
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
                        <button onClick={handleLogin}>Ingresar</button>
                    </form>
                </>
            )}

            {errorLogin && <p>{errorMsg}</p>}

            {login && (
                <>
                    <h2>Bienvenido {usuario}</h2>
                    <form action="#">
                        <input
                            type="text"
                            placeholder="buscar"
                            onChange={(e) => handleUser(e)}
                            value={user}
                        />
                    </form>
                    <br />
                    <button onClick={prev} disabled={start <= 0 && "disabled"}>
                        Prev
                    </button>
                    <button
                        onClick={next}
                        disabled={end >= users.length && "disabled"}
                    >
                        Next
                    </button>
                    <p>
                        Paginas {start} de{" "}
                        {Math.floor(users.length / pageCounter)}
                    </p>

                    <span></span>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users
                                    .filter((_u) => {
                                        return (
                                            _u.name
                                                .toLowerCase()
                                                .includes(user.toLowerCase()) ||
                                            _u.lastName
                                                .toLowerCase()
                                                .includes(user.toLowerCase())
                                        );
                                    })
                                    .map((_u) => {
                                        return (
                                            <>
                                                {users ? (
                                                    <>
                                                        <tr key={_u.id}>
                                                            <td>{_u.name}</td>
                                                            <td>
                                                                {_u.lastName}
                                                            </td>
                                                            <td>{_u.age}</td>
                                                            <td>{_u.email}</td>
                                                            <td>
                                                                {" "}
                                                                <button
                                                                    onClick={() =>
                                                                        deleteUser(
                                                                            _u.id
                                                                        )
                                                                    }
                                                                >
                                                                    Borrar
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ) : (
                                                    "La lista de users esta vacia"
                                                )}
                                            </>
                                        );
                                    })
                                    .slice(start, end)}
                        </tbody>
                    </table>
                    <br />
                    <h3>Ordenar por</h3>
                    <button onClick={(e) => orderByAge(e.target)} id="menor">
                        Menor
                    </button>
                    <button onClick={(e) => orderByAge(e.target)} id="mayor">
                        Mayor
                    </button>
                    <br />
                    <br />
                    <button onClick={() => logOff()}>Salir</button>
                </>
            )}
        </div>
    );
}

export default App;
