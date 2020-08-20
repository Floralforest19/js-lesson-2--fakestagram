import React from 'react';
import { Link } from 'react-router-dom';

export default function layoutsimple({ children }){
    return(
        <div>
            <Link className="" to="/">Home</Link>
            <Link className="" to="/image-list">Go to Image list</Link>
            <Link className="" to="/contact">Go to contact </Link>
            {children}
         </div>   
    )
}