import React, { Component } from 'react'

const SlimVideoPlayer = ({video, loop, playVideo}) => {

  return (
    <div classNam="banner-video">
      <video muted onClick={playVideo} loop={loop} autoPlay={"autoplay"}>
        <source src={video} type="video/mp4"/>
        Your broswer doesnt support video tag
      </video>
    </div>
  )
}
export default SlimVideoPlayer
