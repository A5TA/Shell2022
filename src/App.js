import styled from 'styled-components'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes , Route} from 'react-router-dom'
import Form from './components/Form'

const Wrapper = styled.div`
  font-family: 'Spline Sans Mono', monospace;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    left: 15%;
    width: 600px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 390px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 1px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-5px);
    }
  }

  h1,
  p, .home-btn{
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;


function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={
            <>
            <Spline
                className="spline"
                scene="https://prod.spline.design/cLQmccL6EuvkPKhI/scene.splinecode" 
              />
              <Content>
                <Navbar />
                <Home />
              </Content>
            </>
        } />
        <Route path='/symptoms' element={
        <>
          <div style={{marginTop:'30px'}}>
            <Navbar />
          </div>
          
          <Form />
        </>
        } />
      </Routes>
     
    </Wrapper>
  );
}

export default App;
