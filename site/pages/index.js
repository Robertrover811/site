import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Robert Goll - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1 className="">Robert Goll</h1>
    </div>
  )
}
