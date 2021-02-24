import React, { useState, useEffect } from 'react'

import Layout from './style'
import CheckSvg from '../../assets/svg/check'
import CloseSVG from '../../assets/svg/close'
import ClockSvg from '../../assets/svg/clock'

let countdownTimeout: NodeJS.Timeout

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <Layout>
      <div>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled>
          Ciclo Encerrado
          <CheckSvg />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="countdownIsActive"
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <CloseSVG />
            </button>
          ) : (
            <button type="button" onClick={startCountdown}>
              Iniciar ciclo
              <ClockSvg />
            </button>
          )}
        </>
      )}
    </Layout>
  )
}

export default Countdown
