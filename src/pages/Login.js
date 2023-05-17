import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
    const [apiKey, setApiKey] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);

    async function handleLogin() {
        try {
            const response = await fetch(
                "https://v3.football.api-sports.io/status",
                {
                    method: "GET",
                    headers: {
                        "x-apisports-key": apiKey,
                        "x-rapidapi-host": "v3.football.api-sports.io",
                    },
                }
            )
                .then((response) => response.text())
                .then((result) => {
                    return JSON.parse(result);
                });
            if (response.errors.token === undefined) {
                console.log(response);
                localStorage.setItem("apiKey", apiKey);
                setLoggedIn(true);
            } else {
                alert("API key inválida!");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
            <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
