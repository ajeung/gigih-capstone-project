import { useLocation } from "react-router";
import Header from "../../components/header_footer/header";
import HomeFooter from "../../components/header_footer/footer";
import SearchBar from "../../components/SearchBar";
import styles from "./style.module.css";

const HomeLayout = (props) => {
  const { children } = props;
  const location = useLocation();

  return (
    <div className={styles.container}>
      {location.pathname !== "/payment" && <Header />}
      {location.pathname !== "/" && <SearchBar />}
      <div className={styles.app}>{children}</div>
      {location.pathname === "/" && <HomeFooter />}
    </div>
  );
};

export default HomeLayout;
