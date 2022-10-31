import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/log" element={<Main />} />
                <Route path="/create-user" element={<Main />} />
            </Routes>
        </>
    );
};

export default AppRouter;
