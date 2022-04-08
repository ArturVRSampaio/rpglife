import React from "react";
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel, faCheck} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";


const Home: NextPage = () => {
    const router = useRouter()
  return (
      <div>
          <div className={styles.editButtonsBox}>
              <button className={styles.cancelEditButton }
                      onClick={() => router.push('/')}>
                  <FontAwesomeIcon icon={faCancel}/> cancelar
              </button>
              <button className={styles.acceptEditButton}
                  onClick={() => router.push('/')}>
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
