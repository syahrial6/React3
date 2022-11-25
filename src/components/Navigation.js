import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';


function Navigation(){
    return(
        <header>
            <nav className='navigation'>
            <ul>
                <li><Link to="/add"><FiPlusCircle/></Link></li>
            </ul>
            </nav>
        </header>
    );
}
export default Navigation;