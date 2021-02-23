import React, { useState } from 'react'

import Layout from './style'

const ExperienceBar: React.FC = () => {
  const [currentExp, setCurrentExp] = useState(300)

  return (
    <Layout>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${(currentExp / 600) * 100}%` }} />
        <span style={{ left: `${(currentExp / 600) * 100}%` }}>
          <button onClick={() => setCurrentExp(currentExp - 10)}>-</button>
          {currentExp} px
          <button onClick={() => setCurrentExp(currentExp + 10)}>+</button>
        </span>
      </div>
      <span>600 xp</span>
    </Layout>
  )
}

export default ExperienceBar
