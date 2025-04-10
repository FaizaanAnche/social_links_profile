import "./style.css";

const ProfileCard = ({
  profileImage,
  profileName,
  location,
  tagLine,
  links,
}) => {
  console.log(links);
  return (
    <div className="profile">
      <img className="profileImage" src={profileImage} alt="profile" />
      <p className="name">{profileName}</p>
      <p className="location">{location}</p>
      <p className="tagLine">{tagLine}</p>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="socialLink"
          rel="noreferrer"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default ProfileCard;
