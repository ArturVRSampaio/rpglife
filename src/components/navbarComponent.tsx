import React from "react";
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function navbarComponent() {
  return (
      <div className={styles.navBar}>
          <div className={styles.navbarAppTitle}>
              <p>rpgLife</p>
          </div>
          <div className={styles.navbarUser}>
              <div>
                  <p>NOME DO USR</p>
                  <p>editar perfil</p>
              </div>
              <FontAwesomeIcon icon={faUser} size={"3x"}/>
          </div>
      </div>
  );
}

export default navbarComponent;