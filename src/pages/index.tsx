import { NextPage } from 'next'
import Head from 'next/head'

import Layout from './style'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NLW #4</title>
      </Head>
      <Layout>
        <h1>Hello NLW</h1>
      </Layout>
    </>
  )
}

export default IndexPage
