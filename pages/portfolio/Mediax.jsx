import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/Proyect.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Mediax() {
  const [state, setstate] = useState(false);
  const [detail, setDetail] = useState(json.proyects[0]);
  const loading = () => {
    setTimeout(() => setstate(true), 3500);
  };
  loading();
  return (
    <Layouts title="Mediax | Rodriguez Elias" description="Detalle Proyecto">
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
              src="https://firebasestorage.googleapis.com/v0/b/lero-9025b.appspot.com/o/mediaxgif.gif?alt=media&token=d29bcfc6-f119-4fbb-9545-fd49334db169"
              alt="mediax"
              width={250}
              height={200}
              layout="responsive"
            ></Image>
          </div>
        )}
        <div className={styles.containerButtons}>
          <button className={styles.button}>
            <a
              href="https://rodriguezelias.github.io/ProyectoFinal-Mediax/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Pagina{" "}
            </a>
          </button>
          <button className={styles.button}>
            <a
              href="https://github.com/RodriguezElias/ProyectoFinal-Mediax"
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
