import React from 'react';
import {Link} from 'react-router-dom';
import dataStore from './store';
import './style.css';


class Products extends React.Component {
    state = {
        info: [],
    }
    componentDidMount() {
        this.setState({info: dataStore});

    }

    render() {
        return (
            <div>
                {this.state.info.map(p => (
                    <p key={p.id}>
                     <Link to={`/products/${p.id}`}>{p.title}</Link>
                    </p>

                ))}
                
            </div>
        )
    
        
    }
}


export default Products;