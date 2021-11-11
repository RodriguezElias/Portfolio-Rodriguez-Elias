import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/Mediax.module.css";

export default function Mediax() {
  const [detail, setDetail] = useState(json.proyects[0]);
  return (
    <Layouts title="Mediax | Rodriguez Elias" description="Detalle Proyecto">
      <div className={styles.containerDetail}>
        <h1>{`${detail.name}`}</h1>
        <p className={styles.description}>{`${detail.description}`}</p>
        <div className={styles.image}>
          <Image
            src="/img/recording.gif"
            alt="mediax"
            width={250}
            height={200}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles.containerButtons}>
          <button className={styles.button}>
            <a
              href="https://rodriguezelias.github.io/ProyectoFinal-Mediax/index.html"
              
            >
              {" "}
              Pagina{" "}
            </a>
          </button>
          <button className={styles.button}>
            <a
              href="https://github.com/RodriguezElias/ProyectoFinal-Mediax"
              
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
