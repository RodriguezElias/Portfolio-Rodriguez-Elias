import styles from "../styles/Card.module.css";
import logo from "../public/img/mediax.PNG";

export default function Card({title, description, imgBackground}) {
  let myStyles ={
    backgroundImage: `url(${imgBackground})`
  };
  return (
      <div className={styles.card} style={myStyles}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardInfo}>
            {description} 
          </p>
          <button className={styles.button}>
            <a href="#">Mas informacion</a>
          </button>
        </div>
      </div>
  );
}
