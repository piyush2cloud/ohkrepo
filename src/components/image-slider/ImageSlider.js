import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import "./image-slider.scss";

const ImageSlider = ({ url, vid }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/movie-detail/${vid}`);
  };
  const[description,setDescription]=useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

const handleMouseEnter = event => {
    setDelayHandler(setTimeout(() => {
        setDescription(true);
    }, 3000));
};

const handleMouseLeave = () => {
    clearTimeout(delayHandler);
    setDescription(false);
};
  return (
    <Fragment>
      <a href="#" className="item-container">
          <div className="movie-thumbnail" id={url} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {url ? <img
              src={url}
              alt="Movies"
              onClick={() => handleClick()}
            />
              :
              <img
                //  src={require("../../Assets/rakunnoImage.png")}
                src="https://prod2-kraken-cloudfront.rakuten.tv/images/placeholders/covers/negative-portrait-7ab75372ad.png"
                alt="Movies"
                onClick={() => handleClick()}
              />
            }
          </div>
          </a>
            <div className="movie-details" id={url+1} style={{display:description?"flex":"none"}}>
              <div className="movieTitle"><h2>lo impossible(2012)</h2></div>
              <div style={{display:"flex",marginTop:"10px"}}>
                <div className="trailer">▶ trailer</div>
                <div className="anadir">📌 Anadir a quiro ver</div>
              </div>
              <div style={{    marginTop: "20px"}}>
              2012 <span className="age">⚫ 12</span>cineposls
              </div>
              <div className="description">
              Anadir a quiro verAnadir a quiro ver Anadir a quiro ver Anadir a quiro ver Anadir a quiro ver Anadir a quiro ver 
              </div>
              <div className="price">
                VER AHORA DESDE 13,99 € O 1399 ▶
              </div>
            </div>
    </Fragment>
  );
};

export default ImageSlider;
