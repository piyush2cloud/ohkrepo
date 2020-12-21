import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import "./video.scss"

class VideoContainer extends Component {
  render() {
    return (
      <Fragment>
        <VideoPlayer/>
      </Fragment>
    );
  }
}

export default VideoContainer;
