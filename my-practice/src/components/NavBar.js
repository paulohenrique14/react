import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navContent}>
        <li className={styles.list}>Home</li>
        <li className={styles.list}>Contatos</li>
        <li className={styles.list}>Forum</li>
        <li className={styles.list}>Imagens</li>
      </ul>
    </div>
  );
}

export default NavBar;
