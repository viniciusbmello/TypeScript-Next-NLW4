import React, { useState } from 'react'
import Layout from './style'

const ExperienceBar: React.FC = () => {
  const [currentExp, setCurrentExp] = useState(300)

  return (
    <Layout>
      <button onClick={() => setCurrentExp(currentExp - 10)}>-</button>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${(currentExp / 600) * 100}%` }} />
        <span style={{ left: `${(currentExp / 600) * 100}%` }}>
          {currentExp} px
        </span>
      </div>
      <span>600 xp</span>
      <button onClick={() => setCurrentExp(currentExp + 10)}>+</button>
    </Layout>
  )
}

export default ExperienceBar
