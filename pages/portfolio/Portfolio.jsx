import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/Proyect.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Portfolio() {
  const [state, setstate] = useState(false);
  const [detail, setDetail] = useState(json.proyects[3]);
  const loading = () => {
    setTimeout(() => setstate(true), 3500);
  };
  loading();
  return (
    <Layouts title="Portfolio | Rodriguez Elias" description="Detalle Proyecto">
      <div className={styles.containerDetail}>
        <h1>{`${detail.name}`}</h1>
        <p className={styles.description}>{`${detail.description}`}</p>
        {state === false ? (
          <div className={styles.loader}>
            <Loader
              type="TailSpin"
              color="red"
              height={200}
              width={200}
              timeout={3500} //3 secs
            />
          </div>
        ) : (
          <div className={styles.image}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/lero-9025b.appspot.com/o/portfoliogif.gif?alt=media&token=fe7dc7f0-f448-4828-a6dc-3bf04998a34c"
              alt="portfolio"
              width={250}
              height={200}
              className={styles.img}
              layout="responsive"
            ></Image>
          </div>
        )}
        <div className={styles.containerButtons}>
          <button className={styles.button}>
            <a href="#"> Pagina </a>
          </button>
          <button className={styles.button}>
            <a
              href="https://github.com/RodriguezElias/Portfolio-Rodriguez-Elias"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Repositorio
            </a>
          </button>
        </div>
        <div className={styles.containerTechnologies}>
          <h2>Tecnologias Utilizadas</h2>
          <div className={styles.logos}>
            {detail.technologies.map((logo, index) => {
              return (
                <Image
                  key={index}
                  alt="logo"
                  src={logo["img-technology"]}
                  width={150}
                  height={150}
                  layout="responsive"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layouts>
  );
}
