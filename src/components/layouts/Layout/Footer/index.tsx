import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./index.module.scss";

const Footer = () => {
  const location = useLocation();

  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isCollectionPage = location.pathname.includes("collections");

  return (
    <footer
      className={`${styles.footer} ${
        isCollectionPage && isBigScreen
          ? styles.is_collection_page_b
          : styles.is_collection_page_s
      }`}
    >
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.nav_wrapper}>
            <div className={styles.nav_title}>Shoppy</div>
            <div className={styles.subTitle}>
              Unleash your fashion. Find your flow.
            </div>
            <div className={styles.subTitle}>
              All rights reserved.©️ 2025 Shoppy
            </div>
          </div>
        </div>
        <div className={styles.sitemap}>
          <div className={styles.nav_wrapper}>
            <h4 className={styles.nav_title}>Help</h4>
            <ul className={styles.nav}>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Shipping Info</Link>
              </li>
              <li>
                <Link to="/">Track My Order</Link>
              </li>
              <li>
                <Link to="/">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
