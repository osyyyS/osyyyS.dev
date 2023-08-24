'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  function discordClicked() {
    navigator.clipboard.writeText("osyyyS")
  }

  return (
    <main className={styles.main}>
      <video autoPlay muted loop className={styles.video}>
        <source src="./ZOOM.mp4" type="video/mp4" />
      </video>
      <div className={styles.foreground}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>under construction...</code>
          </p>
        </div>

        <div className={styles.center}>
          <h1>osyyyS</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/osyyyS"
            className={styles.card}
          >
            <h2>
              GitHub
              <Image
                src="/icons/github.svg"
                alt="clipboard"
                className={styles.icon}
                width={40}
                height={20}
                priority
              />
            </h2>
            <p>Checkout my GitHub profile</p>
          </a>

          <a
            onClick={discordClicked}
            className={styles.card}
          >
            <h2>
              Discord 
              <Image
                src="/icons/clipboard.svg"
                alt="clipboard"
                className={styles.icon}
                width={40}
                height={20}
                priority
              />
            </h2>
            <p>osyyyS</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
