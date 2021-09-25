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
              OpenSea 
            </Link>
          </code>
<code className={styles.code}>
            <Link href="https://facebook.com/tankyturkey">
              Facebook
            </Link>
          </code>
<code className={styles.code}>
            <Link href="https://twitter.com/tankyturkey">
            Twitter
            </Link>
          </code>
<code className={styles.code}>
            <Link href="t.me/tankyturkey">
             Telegram
            </Link>
          </code>
<code className={styles.code}>
            <Link href="https://github.com/TankyTurkey">
         Github
            </Link>
          </code>
        </p>
 <div className={styles.grid}>
Tanky Turkey NFTs is a collection of randomly generated thanksgiving turkey. All art pieces are unique.
A Total of 366+1 art pieces on OpenSea NFTs Marketplace, 366 published on polygon network and
1 outstanding piece to be published on ethereum network soon.
</div>
        <div className={styles.grid}>
          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/27297555424367449018882142262532668847556185165117409212162522491783292649473/" className={styles.card}>
            <h2>Tanky Turkey #001</h2>
            <img 
              src="https://lh3.googleusercontent.com/cJBpZJbhrifDGSdERlYmgkGb1rXCB53-S0dH-lGPrPoQq0_NNr2VloAfI3DsqC8qBNxWgSMGQ1eM3NZnr6xOVZCzwQmWUtITXRCL=w305"
              alt="Tanky Turkey #001"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/27297555424367449018882142262532668847556185165117409212162522499479874043905/" className={styles.card}>
            <h2>Tanky Turkey #008</h2>
            <img 
              src="https://lh3.googleusercontent.com/Xp_KYT05n1DoodSFqDvKjtNm5lvv8PCuYt1G7Q2A5Euc1gNhsN6FRgSar2SHo7plsHRmm9O8e789jnEQP3ypaQG8iF4GTJJ7g62P=w305"
              alt="Tanky Turkey #008"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/81210281507696217995685449912678685468372656662771121513866832896960080379905/" className={styles.card}>
            <h2>Tanky Turkey #013</h2>
            <img 
              src="https://lh3.googleusercontent.com/pk9fShV1E8JsK6dcAhmmrSwpxEcRihDS0gPcOrjnQqj4IEqXoGJTf12ALHN0pbH83ibyY4AH0gyPS24E9lNPnG_rYIkRj6gXr1jQ=w305"
              alt="Tanky Turkey #013"
            />
          </a>

          <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/27297555424367449018882142262532668847556185165117409212162522520370594971649/" className={styles.card}>
            <h2>Tanky Turkey #027</h2>
            <img 
              src="https://lh3.googleusercontent.com/8QhCH21MkXAK71x5dpCBUSsikY0EaDSw67lTe6vV6wJ789nTDEfXr_rmWRyDV3j0tldJyT4j36-WAVXR5tMC6QHXD3F5sLKCnB2szg=w305"
              alt="Tanky Turkey #027"
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
