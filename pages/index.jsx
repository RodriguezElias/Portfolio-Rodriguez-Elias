import Layouts from "../components/Layouts";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ytiped from "../components/Ytiped";

export default function index() {
  return (
    <Layouts title="About | Rodriguez Elias" description="Informacion Personal">
      <div className={styles.containerMain}>
        <div className={styles.containerPresentation}>
          <h1 className={styles.presentation}>Me llamo</h1>
          <Ytiped />
          <h2 className={styles.profession}>Soy Desarrollador Front-End</h2>
        </div>
        <div className={styles.imagePersonal}>
          <Image
            src="/img/4.jpg"
            width={250}
            height={250}
            className={styles.img}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </Layouts>
  );
}
