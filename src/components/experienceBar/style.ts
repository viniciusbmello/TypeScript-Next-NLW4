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
    height: 10px;
    border-radius: 5px;
    background: ${props => props.theme.colors.grayLine};

    margin: 0 1rem;
  }

  & > div > div {
    height: 10px;
    border-radius: 5px;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: -1px;
    font-size: 10px;
    position: absolute;
    padding-right: 2px;
    transform: translateX(-100%);
    color: ${props => props.theme.colors.white};

    transition: all 0.1s linear;
  }
`

export default Layout
