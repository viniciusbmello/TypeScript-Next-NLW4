import styled from 'styled-components'

const Layout = styled.div`
  & {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 1rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.white};
  }
`

export default Layout
