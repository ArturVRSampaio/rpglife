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
                  <input type="text" placeholder="name"/>
              </div>
          </div>

         <Footer/>
      </>
  )
}

export default Home
