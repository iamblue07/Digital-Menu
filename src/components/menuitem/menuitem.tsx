import React, { useState } from 'react'
import { Product } from 'data/menuData'
import { cartData } from 'data/cartData'
import './menuitem.css'

interface ProductDetailsProps {
  product: Product
}

const handleAddToCart = (product: Product) => {
  const cartItem = cartData.find((item) => item.product.id === product.id)
  if (cartItem) {
    cartItem.quantity += 1
  } else {
    cartData.push({ product, quantity: 1 })
  }
  console.log('Cart Data:', cartData)
}

const MenuItem: React.FC<ProductDetailsProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="product-details" onClick={() => setIsModalOpen(true)}>
        <img
          src="https://placehold.co/600x400"
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            {product.available ? (
              <p>$ {product.price.toFixed(2)}</p>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src="https://placehold.co/600x400"
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                {product.available ? (
                  <>
                    <p>$ {product.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <p>Not Available</p>
                )}
              </div>
            </div>
            <button
              className="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuItem
