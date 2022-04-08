import React from "react";
import styles from "../../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faTasksAlt} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

function card() {
    const router = useRouter();
    return (
            <div className={styles.scheduledEvent}
                 onClick={() => router.push('/edit')}>
            <div className={styles.leftContent}>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={styles.rightContent}>
                    <p>taskTitle</p>
                    <p>subtitle</p>
                </div>
            </div>
    );
}

export default card;