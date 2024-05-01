import React from 'react'


const ImageCard = ({image1, image2}) => {
  return (
    <div class="myCard">
    <div class="innerCard">
        <div class="frontSide">
            <img src={image1} alt=""  className='image'/>
        </div>
        <div class="backSide">
        <img src={image2} alt="" className='image img2'/>
        </div>
    </div>
</div>
  )
}

export default ImageCard