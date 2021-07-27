import React, { useEffect, useState } from "react";
import commerce from '@chec/commerce.js'
import Product from "./product";

const Products = ({ products, onAddToCart })=>{

 

  const [test, setTest] = useState(false);



return(
<div className="pr">
     {products.map((product)=>(
      <div className="Products" key={product.id}>
      <Product product={product} onAddToCart={onAddToCart}/>
      </div>
    
    ))}
</div>
);
}

export default Products;