import React from "react";
import styles from "../../styles/Home.module.css";
import Card from "./card";

function scheduleContent() {
    return (
        <div className={styles.mainContent}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default scheduleContent;