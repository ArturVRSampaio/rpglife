import React from "react";
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCancel, faCheck} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

function footer() {
    const router= useRouter();
  return (
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
  );
}

export default footer;