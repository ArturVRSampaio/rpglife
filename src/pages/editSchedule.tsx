import React from "react";
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import EditButtonBox from "../components/editButtonBox";


const Home: NextPage = () => {
  return (
      <>
          <div>
              <EditButtonBox/>
              <div className={styles.missionTitle}>
                  <input type="text" placeholder="missão"/>
                  <input type="text" placeholder="detalhes"/>
              </div>

              <div className={styles.form}>
                  <input type="number" placeholder="dificuldade"/>
                  <input type="number" placeholder="urgencia"/>
                  <input type="number" placeholder="medo"/>
                  <input type="text" placeholder="habilidades"/>
                  <input type="datetime-local" />
              </div>
          </div>
          <Footer/>
      </>
  )
}

export default Home
