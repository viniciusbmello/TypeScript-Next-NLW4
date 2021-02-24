import styled from 'styled-components'

const Layout = styled.header`
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
    height: 8px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grayLine};

    margin: 0 1rem;
  }

  & > div > div {
    height: 8px;
    border-radius: 4px;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: 10px;
    font-size: 1.2rem;
    position: absolute;
    transform: translateX(-50%);

    transition: all 0.1s linear;
  }
`

export default Layout
