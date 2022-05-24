import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant in New York</title>
        <meta name="description" content="The best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
    </div>
  );
}
