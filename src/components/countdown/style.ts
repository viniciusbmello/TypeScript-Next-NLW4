import styled from 'styled-components'

const Layout = styled.header`
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

    font-size: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};

    transition: all 0.1s linear;
  }

  & > button.countdownIsActive {
    background: ${props => props.theme.colors.red};
  }

  & > button:hover {
    background: ${props => props.theme.colors.blueDark};
  }

  & > button.countdownIsActive:hover {
    background: ${props => props.theme.colors.redDark};
  }
`

export default Layout
