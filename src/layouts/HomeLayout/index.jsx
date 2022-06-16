import { useLocation, useRoutes } from "react-router";
import Header from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import SearchBar from "../../components/SearchBar";
import styles from "./style.module.css";

const HomeLayout = (props) => {
  const { children } = props;
  const location = useLocation();

  return (
    <div className={styles.container}>
      {location.pathname !== "/" && location.pathname !== "/payment" && <Header />}
      <SearchBar />
      <div className={styles.app}>{children}</div>
      {location.pathname === "/" && <HomeFooter />}
    </div>
  );
};

export default HomeLayout;
