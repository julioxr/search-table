import React from "react";

const Navigation = () => {
    return (
        <div>
            <ul
                style={{
                    display: "flex",
                    gap: "40px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    border: "1px solid black",
                    width: "100%",
                }}
            >
                <li style={{ listStyle: "none" }}>Logo</li>
                <li style={{ listStyle: "none" }}>Login</li>
                <li style={{ listStyle: "none" }}>Register</li>
                <li style={{ listStyle: "none" }}>List of users</li>
            </ul>
        </div>
    );
};

export default Navigation;
