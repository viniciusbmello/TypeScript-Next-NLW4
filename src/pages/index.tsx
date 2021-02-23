import { NextPage } from 'next'
import Head from 'next/head'
import Profile from '../components/profile'
import CompletedChallanges from '../components/completedChallanges'

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
          </div>
          <div />
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
