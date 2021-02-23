import { NextPage } from 'next'
import Head from 'next/head'
import Profile from '../components/profile'

import Layout from './style'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NLW #4</title>
      </Head>
      <Layout>
        <section>
          <Profile />
          <div />
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
