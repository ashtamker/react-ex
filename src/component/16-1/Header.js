import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends React.Component {

    render() {
        return (
            <nav>
                <ul className="nav-list">
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='products'>
                    <li>Products</li>
                    </Link>

                </ul>
            </nav>
        )
    
        
    }
}


export default Header;