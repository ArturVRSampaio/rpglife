import React from "react";
import styles from "../styles/Home.module.css";

function footer() {
  return (
      <div className={styles.footer}>
          <p>
              made with <span role="img" aria-label="heart">❤️</span> by <a href="https://github.com/arturVRSampaio/" target={"_blank"}>ArturVRSampaio</a>
          </p>
      </div>
  );
}

export default footer;