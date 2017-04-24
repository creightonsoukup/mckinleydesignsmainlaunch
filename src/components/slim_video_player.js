import React, { Component } from 'react'
import { Row } from 'reactstrap'

const SlimVideoPlayer = ({video, loop, playVideo}) => {

  return (
    <Row className="slim-video">
      <video className='animated fadeInDown' muted onClick={playVideo} loop={loop} autoPlay={"autoplay"}>
        <source src={video} type="video/mp4"/>
        Your broswer doesnt support video tag
      </video>
    </Row>
  )
}
export default SlimVideoPlayer
