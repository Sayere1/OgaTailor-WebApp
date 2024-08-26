import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import findogatailor from '../../components/Find-ogatailor/findogatailor'
import ExploreCollections from '../../components/ExploreCollections/ExploreCollections'
import ClothDisplay from '../../components/ClothDisplay/ClothDisplay'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <hr className='Btag'/>
      <find-ogatailor/>
      <hr className='Btag'/>
      <ExploreCollections category={category} setCategory={setCategory} />
      <ClothDisplay category={category}/>
    </div>
  )
}

export default Home
