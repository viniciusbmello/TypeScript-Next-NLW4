import styled from 'styled-components'

const Layout = styled.main`
  & {
    margin: 0 auto;
    width: 100%;
  }

  & > section {
    margin: 2rem 0;
  }

  & > section > div {
    height: 100%;
  }

  & > section > div:last-child {
    margin: 2rem 0;
  }

  @media screen and (min-width: 1100px) {
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

      margin: 4rem 0;
    }

    & > section > div:last-child {
      margin: 0 0;
    }
  }
`

export default Layout
