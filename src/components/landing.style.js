import styled from 'styled-components';

const LandingWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 20px 0px 20px;
  align-items: center;

  .button {
    height: 100vh;
    width: 10vw;
    background-color: #d0d0d0;
    font-size: 40px;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      transform: translateX(-5px);
    }
  }

  .scene {
    margin: 40px 0;
    position: relative;
    width: 210px;
    height: 140px;
    margin: 80px auto;
    perspective: 800px;
  }
  .title {
      margin-bottom: 50px;
      font-size: 18px;
      transform: ${props => props.isLoading? 'translateX(-100vw)' : 'translateX(0px)'};
      transition: all 2s;
    }

  .carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: ${props => props.transform} ${props => props.isLoading? 'translateX(-100vw)' : 'translateX(0px)'};
    transform-style: preserve-3d;
    transition: all 1.2s;
  }

`

export default LandingWrapper
