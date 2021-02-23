import React from 'react'
import Layout from './style'

import ArrowUpSvg from '../../assets/svg/arrowUp'

const Profile: React.FC = () => {
  return (
    <Layout>
      <img src="https://github.com/viniciusbmello.png" alt="Profile Photo" />
      <div>
        <strong>Vinícius Baptista de Mello</strong>
        <p>
          <ArrowUpSvg />
          Level 1
        </p>
      </div>
    </Layout>
  )
}

export default Profile
