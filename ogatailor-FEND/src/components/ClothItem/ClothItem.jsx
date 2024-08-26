import React, { useContext, useState } from 'react'
import './ClothItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const ClothItem = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart,} = useContext(StoreContext);

    return (

    <div className='cloth-item'>
        <div className="cloth-item-image-container">
            <img className='cloth-item-image' src={image} alt="" />
            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
              :<div className='cloth-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=""/>
              </div>
            }
        </div>
        <div className="cloth-item-info">
            <div className="cloth-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="fast selling products" />
            </div>
            <p className="cloth-item-desc">{description}</p>
            <p className="cloth-item-price">#{price}</p>
        </div>
    </div>

  )
}

export default ClothItem
