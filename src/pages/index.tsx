import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import NavbarComponent from "../components/globalComponents/navbarComponent";

const Home: NextPage = () => {
  return (
      <>
      <NavbarComponent/>
      <div className={styles.mainContent}>

      </div>

      </>
  )
}

export default Home
