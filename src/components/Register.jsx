import React from "react";
import { DataContext } from "../context/DataProvider";

const Register = () => {
    return (
        <>
            <h2>Register</h2>
            <form action="#">
                <input type="text" placeholder="Usuario" />
                <br />
                <input type="text" placeholder="Contraseña" />
                <br />
                <button type="submit">Create</button>
            </form>
        </>
    );
};

export default Register;
