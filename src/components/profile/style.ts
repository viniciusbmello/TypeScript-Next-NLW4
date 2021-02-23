import styled from 'styled-components'

const Layout = styled.header`
  & {
    display: flex;
    align-items: center;
  }

  & > img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  & > div {
    margin-left: 2rem;
  }

  & > div > strong {
    font-size: 2.4rem;
  }

  & > div > p {
    font-size: 1.4rem;
  }

  & > div > p > svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${props => props.theme.colors.green};
  }
`

export default Layout
