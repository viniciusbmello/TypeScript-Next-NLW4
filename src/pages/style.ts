import styled from 'styled-components'

const Layout = styled.main`
  & {
    margin: 0 auto;
    padding-top: 2rem;
    width: 100%;
  }

  & > section > div:last-child {
    background: ${props => props.theme.colors.white};
    height: 100%;
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 1000px) {
    & {
      display: flex;
      flex-direction: column;

      max-width: 992px;
    }

    & > section {
      flex: 1;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }
  }
`

export default Layout
