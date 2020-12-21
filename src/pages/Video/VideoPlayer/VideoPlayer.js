import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
import browser from "../../../environment/browser";
import {getDRMWidevinePlayreadyObject,getFairPlayObject} from './drmObject';
import back from "../../../Assets/back.png";
import { connect } from "react-redux";
import {closeVideoPlayerModule} from "../../../store/action/detail/detailAction";

let playObject={autoplay: true, controls: true, debug: false, muted: true, poster:"", preload: true,   width: 720,
height: 300};

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // instantiate Video.js
    require('videojs-contrib-dash')
    this.player = videojs(this.videoNode, playObject, ()=> {
      console.log('onPlayerReady', this);
      this.configureDRMPlayback();
      this.player.requestFullscreen();
    });
  }

  //DRM VIDEOS FUNCTIONALIY FUNCTIONS START
  configureDRMPlayback = () => {
    if(!browser.isSafari()){
      this.player.src(getDRMWidevinePlayreadyObject({
        src:"https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd",
        licenseUrl:"https://widevine-proxy.appspot.com/proxy"
      }));
      this.listenToPlayerEvents();
    }else{
      this.player.eme();
      var fairObject = getFairPlayObject({}, videojs);
      try{
        this.player.eme();
      }catch(e){}
      this.player.src(fairObject);
      this.player.play();
    }
  }
  //DRM VIDEOS FUNCTIONALIY FUNCTIONS END

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  listenToPlayerEvents = () =>{
    this.player.one('loadeddata', () => {
      console.log("loadeddata");
    })

    this.player.on('firstplay', (e) => {
      this.player.requestFullscreen();
    })

    this.player.on("play", function () {
      console.log("play");
    });
  }
  
  render() {
    return (
      <div className="videoBox">
        <div data-vjs-player>
        <button className="close-player" onClick={()=>{
          this.props.closeVideoPlayerModule();
        }}>
          <img src={back}></img>
        </button>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    );
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    closeVideoPlayerModule: () => dispatch(closeVideoPlayerModule())
  };
};


export default connect(
  null,
  mapDispatchToProps
)(VideoPlayer);
