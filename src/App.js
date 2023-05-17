import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function App() {
    const apiKey = localStorage.getItem("apiKey");

    return (
        <div className="App">
            {!apiKey ? <Navigate to="/login" /> : <Navigate to="/home" />}
            App
            <Outlet />
        </div>
    );
}

export default App;
