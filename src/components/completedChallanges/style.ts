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
    font-size: 1.4rem;
  }

  & > span:last-child {
    font-size: 1.6rem;
  }
`

export default Layout
