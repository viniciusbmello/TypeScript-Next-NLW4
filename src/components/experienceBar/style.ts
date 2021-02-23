import styled from 'styled-components'

const Layout = styled.header`
  & {
    display: flex;
    align-items: center;
  }

  & > span {
    font-size: 1rem;
    margin: 0 1rem;
  }

  & > div {
    position: relative;
    flex: 1;
    height: 4px;
    border-radius: 2px;
    background: ${props => props.theme.colors.grayLine};
    /* margin: 0 1rem; */
  }

  & > div > div {
    height: 4px;
    border-radius: 2px;
    background: ${props => props.theme.colors.green};

    transition: all 0.1s linear;
  }

  & > div > span {
    top: 10px;
    font-size: 1rem;
    position: absolute;
    transform: translateX(-50%);

    transition: all 0.1s linear;
  }

  & > button {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    border-radius: 25%;
    border: none;

    transition: all 0.1s linear;
  }

  & > button:hover {
    background: ${props => props.theme.colors.greenDark};
  }
`

export default Layout
