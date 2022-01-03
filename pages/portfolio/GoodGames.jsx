import { useState } from "react";
import Image from "next/dist/client/image";
import Layouts from "../../components/Layouts";
import json from "../../public/utils/proyect.json";
import styles from "../../styles/Proyect.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function GoodGames() {
  const [state, setstate] = useState(false);
  const [detail, setDetail] = useState(json.proyects[1]);
  const loading = () => {
    setTimeout(() => setstate(true), 3500);
  };
  loading();

  return (
    <Layouts title="GoodGames | Rodriguez Elias" description="Detalle Proyecto">
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
              src="https://firebasestorage.googleapis.com/v0/b/lero-9025b.appspot.com/o/goodgamesgif.gif?alt=media&token=ed87a017-4136-49fc-909f-e53b941feaad"
              alt="Goodgames"
              width={250}
              height={200}
              className={styles.img}
              layout="responsive"
            ></Image>
          </div>
        )}
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
