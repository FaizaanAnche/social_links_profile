import "./App.css";
import profilePhoto from "./images/avatar-jessica.jpeg";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <img className="profileImage" src={profilePhoto} alt="profile" />
        <p className="name">Jessica Randall</p>
        <p className="location">London, United Kingdom</p>
        <p className="tagLine">"Front-end developer and avid reader."</p>
        <a href="www.google.com" className="socialLink">
          GitHub
        </a>
        <a href="www.google.com" className="socialLink">
          Frontend Mentor
        </a>
        <a href="www.google.com" className="socialLink">
          LinkedIn
        </a>
        <a href="www.google.com" className="socialLink">
          Twitter
        </a>
        <a href="www.google.com" className="socialLink">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default App;
