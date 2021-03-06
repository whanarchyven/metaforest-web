import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bunny from "../components/Bunny";

const Home: NextPage = () => {
  return (
    <div className={'grey-gradient'}>
      <Head>
        <title>Create Next App</title>

          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'font-roboto overscroll-y-none'}>
        <Bunny></Bunny>
      </main>
    </div>
  )
}

export default Home
