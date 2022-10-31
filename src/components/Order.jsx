import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Order = () => {
    const { users, setUsers, logOff } = useContext(DataContext);

    const orderByAge = ({ id }) => {
        if (id == "menor") {
            console.log(users);
            const sortedArray = users.slice().sort((a, b) => a.age - b.age); // uso slice() porque el sort por si solo no rerenderiza dado que el array es el mismo
            setUsers(sortedArray);
            return "";
        } else if (id == "mayor") {
            console.log(users);
            const sortedArray = users.slice().sort((a, b) => b.age - a.age); // uso slice() porque el sort por si solo no rerenderiza dado que el array es el mismo
            setUsers(sortedArray);
            return "";
        }
    };

    return (
        <>
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
    );
};

export default Order;
