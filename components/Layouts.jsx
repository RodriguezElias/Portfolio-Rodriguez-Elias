import Link from "next/dist/client/link";
import Head from "next/head";
import styles from "../styles/Layout.module.css";


export default function Layouts({ children, title, description }) {
  const openMenu = () => {
    const burguer_menu = document.querySelector('.Layout_listItem__1Dsua');
    burguer_menu.classList.toggle(styles.open);
  };
  const closeMenu = () => {
    const button_close = document.querySelector('.Layout_listItem__1Dsua')
    button_close.classList.remove(styles.open)
  }
  return (
    <main className={styles.main}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <nav className={styles.navbar}>
        <div className="menuBar">
          <button title="Open" onClick={openMenu} className={styles.burgerButton}>
            <i className="fas fa-bars fa-3x"></i>
          </button>
        </div>
        <div className={styles.listItem}>
          <div>
            <button title="Close" onClick={closeMenu} className={styles.closeButton}>
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <Link href="/">
            <a className={styles.navItem}>Home</a>
          </Link>
          <Link href="/aboutme">
            <a className={styles.navItem}>Sobre Mi</a>
          </Link>
          <Link href="/portfolio">
            <a className={styles.navItem}>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className={styles.navItem}>Contacto</a>
          </Link>
          <Link href="/resume">
            <a className={styles.navItem}>Curriculum</a>
          </Link>
        </div>
      </nav>
      <div>{children}</div>
      <footer>footer</footer>
    </main>
  );
}

Layouts.defaultProps = {
  title: "Portfolio Rodriguez Elias",
  description: "Portfolio Personal creado con Next.js",
};