import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Panchal | Film Photography</title>
      </Head>

      <div className={styles.layout}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/full_name_darker.png"
            alt="Logo for Aaron Panchal"
          />
        </header>

        <main className={styles.grid}>
          <Image
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/courthouse-panorama.jpg"
            width={2895}
            height={1192}
            alt="Santa Barbara Courthouse Panorama"
          />

          <div className={classNames(styles.grid, styles.grid3)}>
            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-2.jpg"
              width={2087}
              height={2087}
              alt="Car on Lisbon Streets"
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-1.jpg"
              width={2089}
              height={2089}
              alt="Lisbon Buildings"
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lisbon-3.jpg"
              width={2144}
              height={2144}
              alt="Lisbon Auto Rickshaw"
            />
          </div>

          <div className={classNames(styles.grid, styles.grid23)}>
            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/dad.jpg"
              width={2390}
              height={1877}
              alt="My Dad"
            />

            <Image
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/lucy-1.jpg"
              width={2083}
              height={2047}
              alt="Lucy Dog"
            />
          </div>

          <Image
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/pike-place-market.jpg"
            width={2892}
            height={1205}
            alt="Pike Place Market Panorama"
          />
        </main>
      </div>
    </div>
  );
}
