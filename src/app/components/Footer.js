import React from "react";
import styles from "./styles/Footer.module.css";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <p className={styles.heading}>edCom</p>
        <p className={styles.content}>
          Flutter transforms the development process. Build, test, and deploy
          beautiful mobile, web, desktop, and embedded experiences from a single
          codebase.
        </p>
      </div>
      <div className={styles.div2}>
        <h4>Navigation</h4>
        <p>Leetcode</p>
        <p>Flutter</p>
        <p>Next Js</p>
        <p>Express</p>
      </div>
      <div className={styles.div3}>
        <h4>More</h4>
        <p>Node Js</p>
        <p>React Js</p>
        <p>Competitive</p>
        <p>more...</p>
      </div>
      <div className={styles.div4}>
        <h4>Contact US</h4>
        <p>Anoop Chaudhary</p>
        <p>Anup@gmail.com</p>
        <p>+91-6396937375</p>
        <div className={styles.icons}>
          <FaGoogle className={styles.logo} />
          <FaInstagram className={styles.logo} />
          <FaFacebook className={styles.logo} />
          <FaTwitter className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
