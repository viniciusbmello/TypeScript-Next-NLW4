import styled from 'styled-components'

const Layout = styled.header`
  & {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  & > img {
    width: 10rem;
    height: 10rem;
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
    margin-right: 1rem;
    fill: ${props => props.theme.colors.green};
  }
`

export default Layout
