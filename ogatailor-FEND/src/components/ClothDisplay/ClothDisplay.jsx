import React, { useContext } from 'react'
import './ClothDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ClothItem from '../ClothItem/ClothItem'

const ClothDisplay = ({category}) => {

    const {clothing_list} = useContext(StoreContext)

  return (
    <div className='clothing-display' id='cloth-display'>
        <h2>All Collections</h2>
        <div className="cloth-display-list">
            {clothing_list?.map((item,index)=>{
                if (category==="All" || category===item.category) {
                return <ClothItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
            })}
        </div>
    </div>
  )
}

export default ClothDisplay
