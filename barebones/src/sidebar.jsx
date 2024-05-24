// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { invoke } from '@tauri-apps/api/tauri';
import './Sidebar.css'; // Import CSS file for styling

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await invoke("logout");
        console.log("Logged out");
        navigate("/")
    }
  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`} >
      <h2>Dashboard</h2>
      <button className='toggle-btn' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      <ul>
        <li>
            <Link to="/logs">Logs</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/settings">Settings</Link>
        </li>
        <li>
            <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
