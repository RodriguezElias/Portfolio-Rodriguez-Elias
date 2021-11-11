import Layouts from "../../components/Layouts";
import styles from "../../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShareAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Layouts
      title="Contacto | Rodriguez Elias"
      description="Informacion de Contacto"
    >
      <h1 className={styles.backgroundTitle}>Contacto</h1>
      <div className={styles.containerItems}>
        <div className={styles.items}>
          <div className={styles.itemTitle}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="3x"
              className={styles.itemIcon}
            />
            <h3>Ubicacion</h3>
          </div>
          <div className={styles.itemValue}>
            <p>CABA, Buenos Aires</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemTitle}>
            <FontAwesomeIcon
              icon={faShareAlt}
              size="3x"
              className={styles.itemIcon}
            />
            <h3>Redes Sociales</h3>
          </div>
          <div className={styles.containerIconSocial}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className={styles.itemIconSocial}
            />
            <a
              href="https://www.linkedin.com/in/leandroeliasrodriguez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className={styles.containerIconSocial}>
            <FontAwesomeIcon
              icon={faShareAlt}
              size="2x"
              className={styles.itemIconSocial}
            />
            <a
              href="https://github.com/RodriguezElias"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemTitle}>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              className={styles.itemIcon}
            />
            <h3>Email</h3>
          </div>
          <div className={styles.itemValue}>
            <a href="mailto:rodriguezelias@hotmail.es">
              rodriguezelias@hotmail.es
            </a>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.itemTitle}>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              size="3x"
              className={styles.itemIcon}
            />
            <h3>Telefono</h3>
          </div>
          <div className={styles.itemValue}>
            <a href="tel:+54 011 39330683">+54 011 39330683</a>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
