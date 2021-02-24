import styled from 'styled-components'

const Layout = styled.header`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};
  }

  & > span:first-child {
    font-size: 1.6rem;
  }

  & > span:last-child {
    font-size: 2rem;
    width: 2.4rem;
    text-align: center;

    border-radius: 4px;
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
  }
`

export default Layout
