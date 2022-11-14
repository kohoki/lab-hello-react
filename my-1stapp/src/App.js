import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

console.log(ironhackLogo)

function App() {
  return (
    <div className="App">
      <div class="mainDiv">
        <div class="navDiv">
          <img src={ironhackLogo} alt="logo" />
          <img src={menuTop} alt="logo" />
        </div>
        <div class="textDiv">
          <h1>Say hello to<br /> ReactJS</h1>
          <p>You will learn how to use <br />
          the most popular frontend library, <br />
          and become a super Ninja developer.
          </p>
          <a href="https://reactjs.org">
          <button> Awseome! </button>
          </a>
          
        </div>
      </div>


      <div class="bottom">
        <div><img src={icon1} alt="logo" />
          <h3>Declerative</h3>
          <p>React makes it</p>
        </div>
        <div>
          <img src={icon2} alt="logo" />
          <h3>Components</h3>
        </div>
        <div>
          <img src={icon3} alt="logo" />
          <h3>Single-Way</h3>
        </div>
        <div>
        <img src={icon4} alt="logo" />
        <h3>JSX-Way</h3>
        </div>
      </div>
      
    
       
    </div>
  );
}
export default App;