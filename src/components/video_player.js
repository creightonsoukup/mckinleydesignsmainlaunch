import React, { Component } from 'react'

const VideoPlayer = ({video, loop, playVideo}) => {

  return (
    <div>
      <video muted loop={loop} autoPlay={"autoplay"}>
        <source src={video} type="video/mp4"/>
        Your broswer doesnt support video tag
      </video>
    </div>
  )
}
export default VideoPlayer
