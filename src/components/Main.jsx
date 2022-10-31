import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Order from "./Order";

const Main = () => {
    const { fetchUsers } = useContext(DataContext);
    useEffect(() => {
        fetchUsers();
    }, []);

    const { usuario } = useContext(DataContext);
    return (
        <>
            <h2>Bienvenido {usuario}</h2>
            <SearchBar />
            <Table />
            <Order />
        </>
    );
};

export default Main;
