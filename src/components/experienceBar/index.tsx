import React, { useState } from 'react'
import Layout from './style'

const ExperienceBar: React.FC = () => {
  const [currentExp] = useState(300)

  return (
    <Layout>
      <span>0 xp</span>
      <div>
        <span style={{ left: `${(currentExp / 600) * 100}%` }}>
          <span>{currentExp}</span>
          <br />
          <span>▼</span>
        </span>
        <div style={{ width: `${(currentExp / 600) * 100}%` }} />
      </div>
      <span>600 xp</span>
    </Layout>
  )
}

export default ExperienceBar
