import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akanksha Tiwari</h1>
        <p className={styles.description}>
          I'm a full-stack developer and Flutter developer 
        </p>
        <a href="mailto:akankshatiwary290@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("heroImage.png")} 
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};