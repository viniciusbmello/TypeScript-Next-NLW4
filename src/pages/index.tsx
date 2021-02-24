import { NextPage } from 'next'
import Head from 'next/head'

import Profile from '../components/profile'
import CompletedChallanges from '../components/completedChallanges'
import Countdown from '../components/countdown'
import ChallangeBox from '../components/challangeBox'

import Layout from './style'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | NLW#4</title>
      </Head>
      <Layout>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>
          <div>
            <ChallangeBox />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
