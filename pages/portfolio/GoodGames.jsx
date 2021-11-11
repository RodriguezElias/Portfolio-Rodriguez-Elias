import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/mediax.module.css";

export default function GoodGames() {
  const [detail, setDetail] = useState(json.proyects[1]);

  return (
    <Layouts title="GoodGames | Rodriguez Elias" description="Detalle Proyecto">
      <div className={styles.containerDetail}>
        <h1>{`${detail.name}`}</h1>
        <p className={styles.description}>{`${detail.description}`}</p>
        <div className={styles.image}>
          <Image
            src="/img/goodgamesgif.gif"
            alt="Goodgames"
            width={250}
            height={200}
            className={styles.img}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles.containerButtons}>
          <button className={styles.button}>
            <a
              href="https://good-games-ar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Pagina{" "}
            </a>
          </button>
          <button className={styles.button}>
            <a
              href="https://github.com/RodriguezElias/GOODGAMES"
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
            {detail.technologies.map((logo, index) => {
              return (
                <div key={index}>
                  <Image
                    src={logo["img-technology"]}
                    alt="Logo"
                    width={150}
                    height={150}
                    layout="responsive"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layouts>
  );
}
