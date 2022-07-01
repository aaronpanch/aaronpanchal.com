import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Panchal | Film Photography</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#f9886c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Aaron Panchal's photography portfolio"
        />
      </Head>

      <div className={styles.layout}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/full_name_darker.png"
            alt="Aaron Panchal"
          />
        </header>

        <main className={styles.grid}>
          <Image
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/courthouse-panorama.jpg"
            width={2895}
            height={1192}
          />

          <div className={classNames(styles.grid, styles.grid3)}>
            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-2.jpg"
              width={2087}
              height={2087}
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-1.jpg"
              width={2089}
              height={2089}
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-3.jpg"
              width={2144}
              height={2144}
            />
          </div>

          <div className={classNames(styles.grid, styles.grid23)}>
            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/dad.jpg"
              width={2390}
              height={1877}
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lucy-1.jpg"
              width={2083}
              height={2047}
            />
          </div>

          <Image
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/pike-place-market.jpg"
            width={2892}
            height={1205}
          />
        </main>
      </div>
    </div>
  );
}
