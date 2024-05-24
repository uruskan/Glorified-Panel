//Dashboard.jsx
import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { useNavigate } from 'react-router-dom';
import "./dashboard.css";
import Sidebar from './sidebar';

function Dashboard(){
    
return (
    
    <div> 
            <Sidebar />
            
            
    </div>
);
}
export default Dashboard;