import React from 'react'
import './findOgatailor.css'
import { assets } from '../../assets/assets'

const findOgatailor = () => {
  return (
    <div className='app-download' id='find-ogatailor'>
      <iframe src="https://my.atlist.com/map/8d53298c-b871-46c0-98b9-62bce6d101de/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="600px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
    </div>
  )
}

export default findOgatailor
