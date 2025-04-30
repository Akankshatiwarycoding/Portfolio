import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I’m a fresher frontend developer skilled in designing responsive websites and interactive mobile apps using Flutter and Reactjs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                 I have designed backend systems using Node.js, Django, and Firebase for fast and reliable performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Flutter Developer</h3>
              <p>
              I’m a passionate Flutter developer and a fresher, dedicated to building mobile apps with beautifully designed and interactive UIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};