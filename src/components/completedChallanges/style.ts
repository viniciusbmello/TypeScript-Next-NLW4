import styled from 'styled-components'

const Layout = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  & > span:first-child {
    font-size: 1.6rem;
  }

  & > span:last-child {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
  }
`

export default Layout
