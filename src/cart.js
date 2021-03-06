import React from "react"

const Cart =({ cart2, handleQuantityUpdate, handleRemoveItem, emptyCart  })=>{

    
    const EmptyCart = ()=>(
      <>
        <h1 className="h1">You have Selected no Items</h1>
    </>
    )

    const FilledCart = ()=>(
        <>
        
            {cart2.line_items.map((item)=>(
                <div className="item">
                    <span className="imgg"><img src={item.media.source} alt="" /></span>
                    <span className="detailss">
                    <span className="nname">{item.name}</span>
                    <span className="pprice">{item.line_total.formatted_with_symbol}</span>
                    </span>
                    <span className="btn">
                    <button className="removeItem" onClick={()=> handleRemoveItem(item.id)}>
                    Remove
                    </button>
                    </span>
                    <div className="quan">
                        <span className="minus" >
                            <button onClick={()=> handleQuantityUpdate(item.id, item.quantity - 1)}>-</button>
                        </span>
                        <span className="qq">{item.quantity}</span>
                        <span className="plus"><button onClick={()=> handleQuantityUpdate(item.id, item.quantity + 1)}>+</button></span>
                    </div>
                </div>
            ))}
            <div className="buttons">
               <span className="total">Total: {cart2.subtotal.formatted_with_symbol}</span>
               <span className="btns">    
                <button className="empty" onClick={emptyCart}>Empty Cart</button>
                <button className="checkout">CheckOut</button>
            </span> 
            <br/>
            </div>
   
    </>
    )

    if(!cart2.line_items) return 'Loading...';

return(

<section className="cart-section">
    <div className="title">Your Cart</div>
    <div className="cart-content">
        {!cart2.line_items.length ? <EmptyCart/> : <FilledCart />}
    </div>
</section>

);
}

export default Cart;