import react from "react";
import destination from './destination.module.css';
import { Outlet } from "react-router-dom";

function Destination() {
    return (
        <>
            <main id="main" className={`grid_container ${destination.grid_container_destination} flow`}>
                <h2 className={`numbered_titles ${destination.numbered_titles}`}><span>01</span> Pick You Destination</h2>

                <Outlet />                
            </main>
        </>
    )
}

export default Destination;