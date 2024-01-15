"use client";
import React from "react";
import styles from "./styles/Navbar.module.css";
import { useState } from "react";
import {
  FaBars,
  FaBath,
  FaBeer,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaSnowflake,
  FaTwitter,
  FaXbox,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className={styles.outer_div}>
      <div className={styles.icon}>
        <FaSnowflake className={styles.logo} />
        <p>edCom</p>
      </div>
      <ul className={isopen ? `${styles.ul_list}` : `${styles.ul_list1}`}>
        <li>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Leetcode
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Flutter
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Next Js
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={styles.link}
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            Express
          </Link>
        </li>
      </ul>
      <div className={styles.icon_list}>
        <FaInstagram className={styles.logos} />
        <FaFacebook className={styles.logos} />
        <FaTwitter className={styles.logos} />
        <FaLinkedin className={styles.logos} />
        <FaGithub className={styles.logos} />
      </div>
      <FaBars
        className={styles.menu}
        onClick={() => {
          setIsopen(!isopen);
        }}
      />
    </div>
  );
}
