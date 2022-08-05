import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {sdk} from "../graphql/sdk";
import Layout from "../components/Layout";
import Dashboard from "../components/screens/Dashboard";

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
        {/*<Bunny></Bunny>*/}
          <Layout>
              Activity
          </Layout>
      </main>
    </div>
  )
}

export default Home
