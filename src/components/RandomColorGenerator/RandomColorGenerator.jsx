import { useState } from "react";
import styles from "./styles.module.css";

const RandomColorGenerator = () => {
  const randomNumbers = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr[i] = Math.floor(Math.random() * 255);
    }
    return `${arr[0]}, ${arr[1]}, ${arr[2]}`;
  };

  const [style, setStyle] = useState({
    backgroundColor: `rgb(${randomNumbers()})`,
  });

  return (
    <div className={styles.colorAppContainer} style={style}>
      <p className={styles.text}>Random Color Generator</p>
      <button
        className={styles.button}
        onClick={(event) => {
          event.preventDefault();
          setStyle({
            backgroundColor: `rgb(${randomNumbers()})`,
          });
        }}
      >
        Click Here!
      </button>
    </div>
  );
};
export default RandomColorGenerator;
