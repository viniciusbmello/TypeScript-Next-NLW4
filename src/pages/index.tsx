import { NextPage } from 'next'
import Head from 'next/head'
import Profile from '../components/Profile'
import CompletedChallanges from '../components/CompletedChallanges'
import Countdown from '../components/Countdown'

import Layout from './style'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NLW #4</title>
      </Head>
      <Layout>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>
          <div />
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
