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

return(
    <div>
      <h1>{item.title}</h1>
      <img></img>

    </div>
);
}
export default ProductDetail;
