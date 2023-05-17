import React from "react";
import { Navigate } from "react-router-dom";

function Navbar() {
    function handleLogout() {
        localStorage.removeItem("apiKey");
        console.log("Deslogado");
        return <Navigate to="/login" />;
    }

    return (
        <nav>
            Navbar
            <button onClick={handleLogout}>Deslogar</button>
        </nav>
    );
}

export default Navbar;
