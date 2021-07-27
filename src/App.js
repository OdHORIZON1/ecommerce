import React, { useEffect, useState } from 'react';
import commerce from '@chec/commerce.js'
import Products from './products';
import Nav from './nav';


function App() {
  const url = 'pk_30845457571c0b780854a195c1790f40356ee3c81347d';
  const commerse = new commerce(url, true);
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState({});

  const fetchProducts = async()=>{
    const { data } = await commerse.products.list();
    setProducts(data); 
  }

  const fetchCart = async()=>{
    const cart = await commerse.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async(productId, quantity)=>{
      const item = await commerse.cart.add(productId, quantity);
      setCart(item.cart);
  }

  useEffect(()=>{
      fetchProducts();
      fetchCart();
  }, []);

console.log(cart);
  return(

  <section className="container">
    <Nav totalItems={cart.total_items} cartt={cart} />
    <Products products={products} onAddToCart={handleAddToCart}/>
  
  </section>

 );
}

export default App;
