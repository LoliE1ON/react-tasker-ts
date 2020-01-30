import React from 'react';
import {Link} from "react-router-dom";

export const NotFound: React.FC = () => {
    return (
        <div>
            <p>404 Not Found</p>
            <Link to="/">Home</Link>
        </div>
    )
}