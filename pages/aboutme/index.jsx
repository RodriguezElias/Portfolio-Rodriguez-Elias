import Layouts from "../../components/Layouts";
import Image from "next/image";
import styles from "../../styles/Aboutme.module.css";

export default function aboutme() {
  return (
    <Layouts
      title="Contacto | Rodriguez Elias"
      description="Informacion de Contacto"
    >
      <h1 className={styles.backgroundTitle}>Sobre Mi</h1>
      <div className={styles.containerAbout}>
        <div className={styles.presentation}>
          <h2>Desarrollador Web / Analista QA</h2>
          <p>
            Mi nombre es Leandro Elias Rodriguez, soy Desarrollador Web y
            Tecnico Analista de Sistemas, me considero un amante de los videos
            juegos y de la tecnologia.
          </p>
          <p>
            Mi objetivo es seguir creciendo en el mundo de la programacion y
            especializarme como Desarrollador FullStack.
          </p>
          <p>
            Actualmente poseo experiencia laboral como Desarrollador Web
            Frontend, ademas de dos años de experiencia como Analista QA.
          </p>
          <p>
            Aunado al Desarrollo Web tambien me desempeño como Freelance en una
            plataforma para Freelancer QA de US.
          </p>
        </div>
        <div className={styles.containerSkills}>
          <div className={styles.knowledge}>
            <h2>Conocimientos</h2>
            <div className={styles.containerLogos}>
              <Image
                src="/img/html.png"
                width={100}
                height={100}
                layout="responsive"
                className={styles.logo}
              />

              <Image
                src="/img/javascript.png"
                width={100}
                height={100}
                layout="responsive"
              />
              <Image
                src="/img/react.png"
                width={100}
                height={100}
                layout="responsive"
              />
              <Image
                src="/img/nextjs.png"
                width={100}
                height={100}
                layout="responsive"
              />
              <Image
                src="/img/python.png"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
          <div className={styles.interests}>
            <h2>Intereses</h2>
            <div className={styles.containerLogos}>
              <Image
                src="/img/react-native.png"
                width={100}
                height={100}
                layout="responsive"
              />
              <Image
                src="/img/node.png"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}
