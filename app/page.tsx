'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState('');

  function discordClicked() {
    navigator.clipboard.writeText("osyyyS")
    setCopied(" copied!")
    setTimeout(() => { setCopied("") }, 2000)
    console.log("asdasd")
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
          <p>
            <a href="https://www.youtube.com/channel/UCc3OkBbWKrduly3Lu59jzEg"><code className={styles.code}>Source code</code></a>
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
            <p>osyyyS {copied}</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCc3OkBbWKrduly3Lu59jzEg"
            className={styles.card}
          >
            <h2>
              Youtube
              <Image
                src="/icons/youtube.svg"
                alt="youtube"
                className={styles.icon}
                width={40}
                height={20}
                priority
              />
            </h2>
            <p>Aged gaming videos</p>
          </a>

          <a
            href="/projects"
            className={styles.card}
          >
            <h2>
              Projects
              <Image
                src="/icons/rocket.svg"
                alt="rocket"
                className={styles.icon}
                width={40}
                height={18}
                priority
              />
            </h2>
            <p>
              Comming soon...
            </p>
          </a>
        </div>
      </div>
    </main>
  )
}
