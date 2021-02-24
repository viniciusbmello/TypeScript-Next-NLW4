import styled from 'styled-components'

const Layout = styled.div`
  & {
    display: flex;
    align-items: center;
  }

  & > span {
    font-size: 1.2rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 1.2rem;
    border-radius: 0.6rem;
    background: ${props => props.theme.colors.grayLine};

    margin: 0 1rem;
  }

  & > div > div {
    height: 1.2rem;
    border-radius: 0.6rem;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: 0;
    font-size: 1.1rem;
    position: absolute;
    padding-right: 0.5rem;
    transform: translateX(-100%);
    color: ${props => props.theme.colors.white};

    transition: all 0.1s linear;
  }
`

export default Layout
