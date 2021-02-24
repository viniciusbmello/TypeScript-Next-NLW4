import React from 'react'
import Layout from './style'

import LevelUpSvg from '../../assets/svg/levelUp'

const ChallangeBox: React.FC = () => {
  return (
    <Layout>
      <strong>Inicie um ciclo para receber desafios a serem completados</strong>
      <LevelUpSvg />
      <p>Avance de level completando os desafios.</p>
    </Layout>
  )
}

export default ChallangeBox
