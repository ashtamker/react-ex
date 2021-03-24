import React from 'react';
import {Link} from 'react-router-dom';
import dataStore from './store';
import './style.css';


// class ProductDetail extends React.Component {
     
//     render() {
        
//         return (
//             <div>
//                item
//             </div>
//         )
    
        
//     }
// }


// export default ProductDetail;

function ProductDetail({match}) {
let item = dataStore[match.params.id - 1];
console.log(match);

const btnHandler = () => {
    <Link to='products'></Link>
    console.log('click');
}


return(
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl}></img>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <button onClick={btnHandler}>All Product</button>

    </div>
);
}
export default ProductDetail;
