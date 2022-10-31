import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Header = () => {
    const {
        user,
        users,
        setUser,
        start,
        setStart,
        end,
        setEnd,
        counterPage,
        setCounterPage,
        pageCounter,
    } = useContext(DataContext);

    const handleUser = (e) => {
        setUser(e.target.value);
    };

    const next = () => {
        setStart(start + pageCounter);
        setEnd(end + pageCounter);
        setCounterPage(counterPage + 1);
    };
    const prev = () => {
        setStart(start - pageCounter);
        setEnd(end - pageCounter);
        setCounterPage(counterPage - 1);
    };
    return (
        <>
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
            <button onClick={next} disabled={end >= users.length && "disabled"}>
                Next
            </button>
            <p>
                Paginas {counterPage} de {Math.ceil(users.length / pageCounter)}
            </p>
            <hr />
        </>
    );
};

export default Header;
