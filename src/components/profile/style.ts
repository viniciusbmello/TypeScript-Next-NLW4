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
    font-size: 3.2rem;
  }

  & > div > p {
    font-size: 2.4rem;
  }

  & > div > p > svg {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.colors.green};
  }
`

export default Layout
