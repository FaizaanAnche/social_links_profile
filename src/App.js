import "./App.css";
import ProfileCard from "./component/ProfileCard";
import profilePhoto from "./images/avatar-jessica.jpeg";

function App() {
  const socialLinks = [
    { url: "https://github.com/", text: "GitHub" },
    { url: "https://in.linkedin.com/", text: "LinkedIn" },
    { url: "https://x.com/", text: "twitter" },
    { url: "https://www.frontendmentor.io/", text: "Frontend Mentor" },
    { url: "https://www.instagram.com/", text: "Instagram" },
  ];

  return (
    <div className="App">
      <ProfileCard
        profileImage={profilePhoto}
        profileName="Jessica Randall"
        location="London, United Kingdom"
        tagLine='"Front-end developer and avid reader."'
        links={socialLinks}
      ></ProfileCard>
    </div>
  );
}

export default App;
