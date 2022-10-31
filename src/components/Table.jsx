import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Table = () => {
    const { users, start, end, user, setUsers } = useContext(DataContext);
    const deleteUser = (id) => {
        const filteredUser = users.filter((user) => user.id !== id);
        setUsers(filteredUser);
        console.log(filteredUser);
    };

    return (
        <>
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
                            .filter(
                                (_u) =>
                                    _u.name
                                        .toLowerCase()
                                        .includes(user.toLowerCase()) ||
                                    _u.lastName
                                        .toLowerCase()
                                        .includes(user.toLowerCase())
                            )
                            .map((_u) => (
                                <tr key={_u.id}>
                                    <td>{_u.name}</td>
                                    <td>{_u.lastName}</td>
                                    <td>{_u.age}</td>
                                    <td>{_u.email}</td>
                                    <td>
                                        <button>Editar</button>
                                        <button
                                            onClick={() => deleteUser(_u.id)}
                                        >
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))
                            .slice(start, end)}
                </tbody>
            </table>
        </>
    );
};

export default Table;
