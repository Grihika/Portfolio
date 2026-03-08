const Header = ({ portfolio }) => {
  return (
    <header className="header">
      <img src={portfolio.image} alt={portfolio.name} className="profile-img" />
      <h1 className="name">{portfolio.name}</h1>
      <p className="role">{portfolio.role}</p>
      
      <div className="socials">
        {portfolio.socialMedia.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="social-icon">{social.name.charAt(0)}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
      
      <p className="about">{portfolio.about}</p>
    </header>
  );
};

export default Header;
