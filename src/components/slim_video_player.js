import React, { Component } from 'react'

const SlimVideoPlayer = ({video, loop, playVideo}) => {

  return (
    <div className="slim-video">
      <video className='animated fadeInDown' muted onClick={playVideo} loop={loop} autoPlay={"autoplay"}>
        <source src={video} type="video/mp4"/>
        Your broswer doesnt support video tag
      </video>
    </div>
  )
}
export default SlimVideoPlayer
