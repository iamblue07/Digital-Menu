import React, { useState } from 'react'
import { cartData, CartItem } from '../data/cartData'
import '../styles/Cart.css'

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(cartData)

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart)
  }

  const increaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    updateCart(updatedCart)
  }

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cart
      .map((item) =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
    updateCart(updatedCart)
  }

  const removeItem = (productId: string) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId)
    updateCart(updatedCart)
  }

  const placeOrder = () => {
    updateCart([])
    alert('Order placed successfully!')
  }

  return (
    <div className="CartPage">
      <h1 className="CartTitle">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="EmptyCart">Your cart is empty.</p>
      ) : (
        <div className="CartItems">
          {cart.map((item) => (
            <div key={item.product.id} className="CartItem">
              <div className="CartItemDetails">
                <h2 className="ProductName">{item.product.name}</h2>
                <p className="ProductPrice">${item.product.price.toFixed(2)}</p>
                <p className="ProductQuantity">Quantity: {item.quantity}</p>
              </div>
              <div className="CartItemActions">
                <button
                  className="ActionButton"
                  onClick={() => increaseQuantity(item.product.id)}
                >
                  +
                </button>
                <button
                  className="ActionButton"
                  onClick={() => decreaseQuantity(item.product.id)}
                >
                  -
                </button>
                <button
                  className="RemoveButton"
                  onClick={() => removeItem(item.product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button className="PlaceOrderButton" onClick={placeOrder}>
          Place Order
        </button>
      )}
    </div>
  )
}

export default Cart
