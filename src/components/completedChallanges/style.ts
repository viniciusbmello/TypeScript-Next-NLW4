import styled from 'styled-components'

const Layout = styled.header`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  & > span:first-child {
    font-size: 2rem;
  }

  & > span:last-child {
    font-size: 2.4rem;
  }
`

export default Layout
