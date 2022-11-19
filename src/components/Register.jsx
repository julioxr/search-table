import { useState } from "react";
import { DataContext } from "../context/DataProvider";

const Register = () => {
    const [userLogin, setUserLogin] = useState("");
    const [passLogin, setPassLogin] = useState("");

    const url = "http://127.0.0.1:5173/src/api/loginData.json";

    const createUser = async () => {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ userLogin, passLogin }),
            header: { "Content-type": "aplication/json" },
        });
    };

    return (
        <>
            <h2>Register</h2>
            <form action="#">
                <label htmlFor="user">Usuario:</label>
                <br />
                <input
                    type="text"
                    id="user"
                    placeholder="Usuario"
                    value={userLogin}
                    onChange={(e) => setUserLogin(e.target.value)}
                />
                <br />
                <label htmlFor="pass">Contraseña:</label>
                <br />
                <input
                    type="password"
                    id="pass"
                    placeholder="Contraseña"
                    value={passLogin}
                    onChange={(e) => setPassLogin(e.target.value)}
                />
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    );
};

export default Register;
