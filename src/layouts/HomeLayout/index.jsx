import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import styles from "./style.module.css";

const HomeLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <div className={styles.app}>{children}</div>
    </div>
  );
};

export default HomeLayout;
