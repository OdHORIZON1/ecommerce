import React from "react"
import {FaShoppingCart} from 'react-icons/fa'

const Product = ({ product, onAddToCart })=>{
    
      
    
    return(
        
    <div className="Product">
      <div className="pr-img">
        <img src={product.media.source} alt="" />
       </div>
      <div className="details">
       <span className="name">{product.name}</span>
       <span className="price">{product.price.formatted_with_symbol}</span>
         </div>
       <div dangerouslySetInnerHTML={{ __html : product.description}} className="info" />
        
      <div className="cart" onClick={()=> onAddToCart(product.id, 1)}>
      <span className="sp"><FaShoppingCart /></span> </div>
    
   
        </div>
    
    );


}

export default Product;