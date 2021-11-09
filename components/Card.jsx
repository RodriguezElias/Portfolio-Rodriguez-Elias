import styles from "../styles/Card.module.css";
import Link from "next/dist/client/link";

export default function Card({ title, description, imgBackground, params }) {
  let myStyles = {
    backgroundImage: `url(${imgBackground})`,
  };
  return (
    <div className={styles.card} style={myStyles}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardInfo}>{description}</p>
        <button className={styles.button}>
          <Link href={`/portfolio/${params}`}>Mas informacion</Link>
        </button>
      </div>
    </div>
  );
}
