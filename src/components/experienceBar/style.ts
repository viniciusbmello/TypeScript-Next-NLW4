import styled from 'styled-components'

const Layout = styled.div`
  & {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: ${props => props.theme.colors.grayLine};

    margin: 0 1rem;
  }

  & > div > div {
    height: 0.4rem;
    border-radius: 0.2rem;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: -1rem;
    position: absolute;
    padding-right: 0.5rem;
    transform: translateX(-50%);
    color: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }
`

export default Layout
