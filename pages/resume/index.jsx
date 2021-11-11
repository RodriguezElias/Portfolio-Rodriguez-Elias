import Layouts from "../../components/Layouts";
import style from "../../styles/Resume.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function resume() {
  return (
    <Layouts
      title="Curriculum | Rodriguez Elias"
      description="Seccion de Curriculum"
    >
      <h1 className={style.backgroundTitle}>Resumen</h1>
      <div className={style.containerResume}>
        <div className={style.containerFile}>
          <a
            className={style.textDownload}
            href="https://drive.google.com/file/d/1O4OVn4Fm3KSz3J-RyoAdg_P8XmxqBPJc/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar
            <FontAwesomeIcon
              icon={faFileDownload}
              size="2x"
              className={style.iconFile}
            />
          </a>
        </div>
        <div className={style.containerStudies}>
          <div className={style.studies}>
            <h2 className={style.titleStudies}>Desarrollador Full Stack</h2>
            <h3>2021 - Actualidad</h3>
            <p>
              Curso de Desarrollador Full Stack (MERN) dictado por la empresa
              MINDHUB{" "}
            </p>
            <ul className={style.listLocation}>
              <li>MindHub LA | Tech Bootcamps</li>
              <li>Caba, Argentina</li>
            </ul>
          </div>
          <div className={style.studies}>
            <h2 className={style.titleStudies}>
              Desarrollador Front-End React
            </h2>
            <h3>2020 - 2021</h3>
            <p>
              Carrera de desarrollo Front-End con React JS, compuesta por los
              modulos : Desarrollo Web + Javascript + React Js.
            </p>
            <ul className={style.listLocation}>
              <li>CODERHOUSE</li>
              <li>Caba, Argentina</li>
            </ul>
          </div>
          <div className={style.studies}>
            <h2 className={style.titleStudies}>Tecnicatura en Sistemas</h2>
            <h3>2017 - 2020</h3>
            <p>
              Recibido en la carrera de Técnico en Analisis de sistemas en el
              Instituto de Formacion Tecnica Superior N°16.
            </p>
            <ul className={style.listLocation}>
              <li>IFTS N°16</li>
              <li>Caba, Argentina</li>
            </ul>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
