import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Panchal | Film Photographer</title>

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
        <link rel="stylesheet" href="https://use.typekit.net/cst6hxf.css" />
      </Head>

      <div className={styles.layout}>
        <header className={styles.header}>
          <img
            className={styles.logo}
            src="https://d28ghlfa8ayyw9.cloudfront.net/images/full_name_darker.png"
            alt="Aaron Panchal"
          />
        </header>

        <main className={styles.main}>
          <div>
            <img
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/na-pali-coast.jpg"
              alt="Nā Pali Coast"
              className="image"
            />
            <h1>Nature</h1>
            <p>
              The evolved, natural world: landscapes. The most challenging of
              photography subjects, but brings you to some of the coolest places
              on our planet. Vistas from my adventures around the world.
            </p>
          </div>

          <div>
            <img
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/sydney-harbor.jpg"
              alt="Sydney, New South Wales Harbor"
              className="image"
            />
            <h1>Cities</h1>
            <p>
              Street photography: the asphalt jungle. Wanderings and
              observations.
            </p>
          </div>

          <div>
            <img
              src="https://d28ghlfa8ayyw9.cloudfront.net/images/aaron-nashville.jpg"
              alt="Portrait at Parthenon, Nashville"
              className="image"
            />
            <h1>People</h1>
            <p>
              What I would consider the most interesting of subjects. Candids
              and portraits, all full of personality and many stories to tell.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
