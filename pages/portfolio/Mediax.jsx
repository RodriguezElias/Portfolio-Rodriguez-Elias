import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/Mediax.module.css";

export default function Mediax() {
  const [detail, setDetail] = useState(json.proyects[0]);
  console.log(detail.technologies[0]["img-technology"]);
  return (
    <Layouts title="Mediax | Rodriguez Elias" description="Detalle Proyecto">
      <div className={styles.containerDetail}>
        <h1>{`${detail.name}`}</h1>
        <div>
          <p>{`${detail.description}`}</p>
          <Image
            src="/img/mediax.png"
            width={250}
            height={250}
            layout="responsive"
          ></Image>
        </div>
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
        <div>
          <h2>Tecnologias</h2>
          <div className={styles.logos}>
            {detail.technologies.map((logo,index) => {
              return (
                <Image
                  key={index}
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
