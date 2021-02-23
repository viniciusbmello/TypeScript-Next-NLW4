import styled from 'styled-components'

const Layout = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 4px;
    border-radius: 2px;
    background: ${props => props.theme.colors.grayLine};
    margin: 0 1rem;
  }

  & > div > div {
    height: 4px;
    border-radius: 2px;
    background: ${props => props.theme.colors.green};
  }

  & > div > span {
    position: absolute;
    transform: translateX(-50%);
  }
`

export default Layout
