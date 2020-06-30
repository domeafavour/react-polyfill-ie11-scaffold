import React from "react";
import styles from "./index.module.scss";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <h1 className={styles.red}>Home Page</h1>
      <h2 className="yellow">Hello.</h2>
    </div>
  );
};

export default Home;
