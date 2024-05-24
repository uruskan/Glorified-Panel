//LoginPage.jsx
import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { invoke } from '@tauri-apps/api/tauri';
import "./styles.css";
function LoginPage(){
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("Logging in...");
            const response = await invoke("login", { userName, userPassword });
            if (response === true) {
                console.log("Navigating");
                navigate('/dashboard');
            } else {
                console.log("Login failed");
            }
        } catch (error) {
            console.error("Failed to login for some reason", error);
        }
    }
    return (
        <div className='loginContainer'>
            <div className='container'>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Username" />
                <input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
            
    );
}
export default LoginPage;