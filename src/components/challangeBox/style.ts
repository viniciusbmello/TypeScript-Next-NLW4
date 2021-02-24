import styled from 'styled-components'

const Layout = styled.div`
  & {
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    padding: 2rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.white};
  }

  & > strong {
    padding: 0 1rem;
    font-size: 2rem;
  }

  & > svg {
    width: 8rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    fill: ${props => props.theme.colors.green};
  }

  & > p {
    padding: 0 2rem;
  }
`

export default Layout
