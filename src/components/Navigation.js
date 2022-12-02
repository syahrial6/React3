import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle,FiLogOut} from 'react-icons/fi';



function Navigation({logout}){


    return(

        <header>
            <nav className='navigation'>
            <ul>
              
                <li><Link to="/add"><FiPlusCircle/></Link></li>
                <li><Link to="/" onClick={logout}><FiLogOut/></Link></li>

            </ul>
            </nav>
        </header>

    );
}
export default Navigation;