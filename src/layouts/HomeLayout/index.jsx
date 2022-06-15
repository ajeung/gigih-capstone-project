import Header from "../../components/Header";
import styles from "./style.module.css";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.app}>{children}</div>
    </div>
  );
};

export default HomeLayout;
