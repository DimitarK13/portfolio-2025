function SocialIcon({ icon, alt, link }) {
  return (
    <a href={link} target="_blank">
      <img src={icon} alt={alt} />
    </a>
  );
}

export default SocialIcon;
