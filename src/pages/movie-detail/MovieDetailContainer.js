import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMovieDetail} from "../../store/action/detail/detailAction";
import MovieDetailHeader from "./components/MovieDetailHeader/MovieDetailHeader";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import VideoContainer from "../Video/VideoContainer"

class MovieDetailContainer extends Component {
  componentDidMount() {
    const id = "movieId";
    this.props.fetchMovieDetail(id);
  }

  render() {
    const { movieDetail } = this.props;
    return (
      <Fragment>
        {this.props.isVideoModule ? (<VideoContainer/>) : 
          (<div>
            <MovieDetailHeader movieDetail={movieDetail && movieDetail.data} />
            <MovieDescription />
          </div>)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({detail}) => {
  const { detailData, isVideoModule} = detail;
  return {
    detailData,
    isVideoModule
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ fetchMovieDetail }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailContainer);
