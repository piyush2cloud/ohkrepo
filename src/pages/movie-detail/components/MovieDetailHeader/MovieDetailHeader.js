import React, { Fragment } from "react";
import playIcon from "../../../../Assets/play.svg";
import styles from "./m-detail-header.module.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {openVideoPlayerModule} from "../../../../store/action/detail/detailAction";

const MovieDetailHeader = (props) => {
  return (
    <Fragment>
      <div className={styles.movie_detail_header_container}>
        <div className={styles.header_content_container}>
          <div className={styles.round_btns_container}>
            <div className={styles.round_btn} onClick={()=>{
              props.openVideoPlayerModule();
            }}>
              <button>
                <img src={playIcon} />
              </button>
              <p>Trailer</p>
            </div>
            <div className={styles.round_btn}>
              <button>
                <img src={playIcon} />
              </button>
              <p>Añadir a Quiero Ver</p>
            </div>
          </div>
          <div className={styles.title_container}>
            <h1>Un monstruo viene a verme</h1>
          </div>
          <div className={styles.btn_container}>
            <button>ver gratis con anuncios</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openVideoPlayerModule: () => dispatch(openVideoPlayerModule())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieDetailHeader);
