import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tanky Turkey - NFT</title>
        <meta name="description" content="Non-Fungible Token Tanky Turkey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NFT <a href="https://opensea.io/collection/tankyturkey">Tanky Turkey</a>
        </h1>

        <p className={styles.description}>
         
          <code className={styles.code}>
            <Link href="https://opensea.io/collection/tankyturkey">
              click here to see more
            </Link>
          </code>
        </p>
 <div className={styles.grid}>
Tanky Turkey NFTs is a collection of randomly generated thanksgiving turkey. 
Total of 366+1 art pieces on OpenSea NFTs Marketplace, 366 published on polygon network and
1 outstanding piece to be published on ethereum network soon.
</div>
        <div className={styles.grid}>
          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81210281507696217995685449912678685468372656662771121513866832894761057124353/" className={styles.card}>
            <h2>Tanky Turkey #01</h2>
            <img 
              src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_102/v1630285167/pixel-saga-nft/01.png"
              alt="Tanky Turkey #01"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81210281507696217995685449912678685468372656662771121513866832895860568752129/" className={styles.card}>
            <h2>Tanky Turkey #02</h2>
            <img 
              src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_102/v1630285162/pixel-saga-nft/02.png"
              alt="Tanky Turkey #02"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81210281507696217995685449912678685468372656662771121513866832896960080379905/" className={styles.card}>
            <h2>Tanky Turkey #03</h2>
            <img 
              src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_102/v1630285182/pixel-saga-nft/pixil-frame-0_1.png"
              alt="Tanky Turkey #03"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81210281507696217995685449912678685468372656662771121513866832898059592007681/" className={styles.card}>
            <h2>Tanky Turkey #04</h2>
            <img 
              src="https://res.cloudinary.com/luneswallet/image/upload/c_scale,w_102/v1630288806/pixel-saga-nft/04.png"
              alt="Tanky Turkey #04"
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/tankyturkey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    </div>
  )
}
