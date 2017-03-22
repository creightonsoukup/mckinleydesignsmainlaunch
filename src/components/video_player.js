import React, { Component } from 'react'

const VideoPlayer = ({video}) => {

  return (
    <div>
      <video loop autoPlay="autoplay">
        <source src={video} type="video/mp4"/>
        Your broswer doesnt support video tag
      </video>
    </div>
  )
}
export default VideoPlayer
