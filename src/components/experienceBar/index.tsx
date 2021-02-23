import React from 'react'

import Layout from './style'

const ExperienceBar: React.FC = () => {
  return (
    <Layout>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>300 px</span>
      </div>
      <span>600 xp</span>
    </Layout>
  )
}

export default ExperienceBar
