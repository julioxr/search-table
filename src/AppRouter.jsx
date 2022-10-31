import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/create-user" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/404" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default AppRouter;
