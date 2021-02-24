import styled from 'styled-components'

const Layout = styled.div`
  & > div {
    display: flex;

    font-size: 7rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.colors.title};
  }

  & > div > span {
    margin: 0 0.5rem;
  }

  & > div > div {
    display: flex;
    flex: 1;
    background: ${props => props.theme.colors.white};
    border-radius: 1rem;
  }

  & > div > div span {
    flex: 1;
  }

  & > div > div span:first-child {
    border-right: 1px solid ${props => props.theme.colors.background};
  }

  & > div > div span:last-child {
    border-left: 1px solid ${props => props.theme.colors.background};
  }

  & > button {
    cursor: pointer;
    margin-top: 2rem;
    width: 100%;
    height: 5rem;

    border: 0;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.blue};

    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};

    transition: all 0.1s linear;
  }

  & > button:disabled {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.white};
    height: 5.2rem;
    border-bottom: 0.2rem solid ${props => props.theme.colors.green};
    cursor: not-allowed;
  }

  & > button:not(:disabled):hover {
    background: ${props => props.theme.colors.blueDark};
  }

  & > button.countdownIsActive {
    background: ${props => props.theme.colors.red};
  }

  & > button.countdownIsActive:hover {
    background: ${props => props.theme.colors.redDark};
  }

  & > button svg {
    margin-left: 0.5rem;
    width: 1.4rem;
    height: 1.4rem;
    fill: ${props => props.theme.colors.green};
  }
`

export default Layout
