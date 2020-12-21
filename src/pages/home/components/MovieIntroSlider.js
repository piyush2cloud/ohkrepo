import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../home.scss";
import ImageSlider from "../../../components/image-slider/ImageSlider";
import { fetchMoviesList } from "../../../store/action/home/homeAction";
import right from "../../../Assets/right-arrow.svg"
import left from "../../../Assets/left-arrow.svg"


class MovieIntroSlider extends Component {
  componentDidMount() {
    const { categoryId } = this.props;
    this.props.fetchMoviesList(categoryId);
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  handleScrollToElement(isLeft) {
    const scrollList = ReactDOM.findDOMNode(this.refs.scrollList)
    if(isLeft)
      scrollList.scrollBy(500,0);
    else
      scrollList.scrollBy(-500,0);
  }

  render() {
    const {
      movies: { data },
    } = this.props;
    const moviesList = data && data.contents;
    
    const movieImageSlider =
      moviesList &&
      moviesList.data &&
      moviesList.data.map((movie, idx) => {
        const { images } = movie;
        return <ImageSlider className="thumb-box" key={idx} url={images.artwork} />;
      });

    return movieImageSlider ? (
      <div className="horizontal-slider" style={{position:"relative"}}>
        <span className="arrow left">
          <img src={left} onClick={()=>{
                this.handleScrollToElement(false)
          }}></img>
        </span>
        <span className="title-bar">{data && data.name}</span>
        <div ref="scrollList" className="rakuten-list-scrollable">
          {movieImageSlider}
        </div>
        <span className="arrow right">
          <img  src={right} onClick={()=>{
              this.handleScrollToElement(true)
          }}></img>
        </span>
      </div>
    ): null;
  }
}

const mapStateToProps = (state) => {
  const { movies } = state.home;
  return {
    movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchMoviesList }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIntroSlider);
