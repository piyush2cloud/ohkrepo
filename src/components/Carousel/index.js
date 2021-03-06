import React,{Component} from "react"
import "./style.scss";

class CarouselIndicator extends Component {
    render() {
      return (
        <li>
          <a
            className={
              this.props.index == this.props.activeIndex
                ? "carousel__indicator carousel__indicator--active"
                : "carousel__indicator"
            }
            onClick={this.props.onClick}
          />
        </li>
      );
    }
  }
  class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
          <p className="carousel-slide__content">
              <img style={{width: "100%"}} src={this.props.slide.urlToImage}/>
             </p>
        </li>
      );
    }
  }  
  class Carousel extends Component {
    constructor(props) {
      super(props);
  
      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
      this.state = {
        activeIndex: 0
      };
    }
  
    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length;
  
      if (index < 1) {
        index = slidesLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { slides } = this.props;
      let slidesLength = slides.length - 1;
  
      if (index === slidesLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    render() {
      return (
        <div className="carousel">
  
          <ul className="carousel__slides">
            {this.props.slides && this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul>
  
          <ul className="carousel__indicators">
            {this.props.slides && this.props.slides.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex==index} 
                onClick={e => this.goToSlide(index)}
              />
            )}
          </ul>
        </div>
      );
    }
  }
export default Carousel;