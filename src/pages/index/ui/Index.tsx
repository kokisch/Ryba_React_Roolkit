import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <div className="Menu">
                <div className="menuItem">
                    <Link to="/Main">Главная</Link>
                </div>
                <div className="menuItem">
                    <Link to="/About">О Компании</Link>
                </div>
            </div>
            <div style={{clear: "both"}}></div>
            <div>
                <Outlet />
            </div>
        </div>

    );
};

export default Index;