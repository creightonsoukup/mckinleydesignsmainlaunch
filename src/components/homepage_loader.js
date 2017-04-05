import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const HomepageLoader = ({video, loop, playVideo}) => {

  return (
      <div className="animated fadeIn homepage-loader">
        <video loop autoPlay={"autoplay"} >
          <source src={video} type="video/mp4"/>
        </video>
      </div>
  )
}
export default HomepageLoader
