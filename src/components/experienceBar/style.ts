import styled from 'styled-components'

const Layout = styled.div`
  & {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: ${props => props.theme.colors.grayLine};

    margin: 0 1rem;
  }

  & > div > div {
    height: 0.4rem;
    border-radius: 0.2rem;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: 0.4rem;
    position: absolute;
    transform: translateX(-50%);
    text-align: center;
    line-height: 0.9rem;

    transition: all 0.1s linear;
  }

  & > div > span > span:last-child {
    border-radius: 0.4rem;
    border: 0.2rem solid ${props => props.theme.colors.green};
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
  }

  & > div > span > span:first-child {
    background: none;
    color: ${props => props.theme.colors.green};
  }
`

export default Layout
