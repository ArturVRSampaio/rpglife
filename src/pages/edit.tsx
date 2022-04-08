import React from "react";
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel, faCheck, faStar} from "@fortawesome/free-solid-svg-icons";


const Home: NextPage = () => {
  return (
      <div>
          <div className={styles.editButtonsBox}>
              <button className={styles.cancelEditButton }>
                  <FontAwesomeIcon icon={faCancel}/> cancelar
              </button>
              <button className={styles.acceptEditButton}>
                  <FontAwesomeIcon icon={faCheck}/> aceitar
              </button>
          </div>

          <div className={styles.missionTitle}>
              <input type="text" placeholder="missão"/>
              <input type="text" placeholder="detalhes"/>
          </div>

          <div className={styles.form}>
              <input type="number" placeholder="dificuldade"/>
              <input type="number" placeholder="urgencia"/>
              <input type="number" placeholder="medo"/>
              <input type="text" placeholder="habilidades"/>
              <input type="datetime-local"/>
          </div>
      </div>
  )
}

export default Home
