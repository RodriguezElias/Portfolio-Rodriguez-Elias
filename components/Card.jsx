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
        <Link href={`/portfolio/${params}`}>
          <button className={styles.button}>Mas informacion</button>
        </Link>
      </div>
    </div>
  );
}
