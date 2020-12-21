import React from "react";
import styles from "./m-description.module.scss";
const MovieDescription = () => {
  return (
    <div className={styles.m_description_container}>
      <div className={styles.section_left}>
        <div className={styles.top_des}>
          <span>7</span>
          <span>103 minutos</span>
          <span> 2016</span>
          <span>España, Reino Unido, Estados Unidos</span>
          <span>Título original: A Monster calls</span>
        </div>
        <div className={styles.m_des_content}>
          <p>
            Conmovedora e inolvidable fábula sobre la superación personal y el
            poder del arte y la imaginación para sanar heridas. Con 9 premios
            Goya en su haber (incluyendo el de Mejor Director) y siendo la
            película más taquillera del año en España (más de 4 millones de
            espectadores y 23 millones de euros recaudados), la nueva obra
            maestra de J.A. Bayona ('El orfanato' y 'Lo imposible') narra la
            espectacular historia de Connor, un chico de 12 años que recibe cada
            noche la visita de un monstruo con forma de árbol (la voz de Liam
            Neeson) en el que buscará ayuda para hacer frente a la enfermedad
            terminal de su madre (Felicity Jones).
          </p>
        </div>
        <div className={styles.m_des_footer}>
          <p> Idiomas y subtítulos</p>
          <div className={styles.footer_feature_header}>
            <p>Audio</p>
            <p>Subtítulos</p>
          </div>
          <div className={styles.footer_feature}>
            <p>Inglés</p>
            <p> Español,Inglés,Sin subtítulos</p>
          </div>
          <div className={styles.footer_feature}>
            <p>Inglés</p>
            <p> Español,Inglés,Sin subtítulos</p>
          </div>
        </div>
        <div className={styles.img_carousal_container}>
          <h5>Dirección y reparto</h5>
          <div className={styles.img_carousal}>
            {Array(10)
              .fill()
              .map((item) => {
                return (
                  <div className={styles.car_item}>
                    <img src="https://images.squarespace-cdn.com/content/v1/5923263029687fb9e0ad01b0/1498927349263-TU0KL7HPA9VIDFVBK83O/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/John+Larimer.jpg" />
                    <p>Lewis MacDougall</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.section_right}></div>
    </div>
  );
};

export default MovieDescription;
