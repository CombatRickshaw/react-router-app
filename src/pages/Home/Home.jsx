import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <p className={styles.heading}>React Projects</p>
      <Link to="/colorgenerator" className={styles.links}>
        Color Generator App
      </Link>
      <Link to="/counter" className={styles.links}>
        Counter App
      </Link>
    </div>
  );
};

export default Home;
