import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay muted loop className={styles.video}>
        <source src="./ZOOM.mp4" type="video/mp4" />
      </video>
      <h1 className={styles.osyyyS}>osyyyS</h1>
    </main>
  )
}
