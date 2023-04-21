import Head from "next/head";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"
        ></link>
        <title>Reservation Service</title>
        <link rel="icon" type="image/x-icon"></link>

        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
