import React, { useState } from 'react'
import Layout from './style'

const ExperienceBar: React.FC = () => {
  const [currentExp, setCurrentExp] = useState(300)

  return (
    <Layout>
      <button
        onClick={() => {
          setCurrentExp(currentExp > 0 ? currentExp - 50 : 0)
        }}
      >
        <span>-</span>
      </button>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${(currentExp / 600) * 100}%` }} />
        <span style={{ left: `${(currentExp / 600) * 100}%` }}>
          {currentExp}xp
        </span>
      </div>
      <span>600 xp</span>
      <button
        onClick={() => {
          setCurrentExp(currentExp < 600 ? currentExp + 50 : 600)
        }}
      >
        <span>+</span>
      </button>
    </Layout>
  )
}

export default ExperienceBar
