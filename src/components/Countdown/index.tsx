import React from 'react'
import Layout from './style'

const Countdown: React.FC = () => {
  return (
    <Layout>
      <div>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <button>Iniciar ciclo</button>
    </Layout>
  )
}

export default Countdown
