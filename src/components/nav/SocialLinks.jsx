import SocialIcon from './SocialIcon';

import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import githubIcon from '../../assets/images/github-icon.svg';
import xIcon from '../../assets/images/x-icon.svg';

const SOCIAL_ITEMS = [
  {
    icon: linkedinIcon,
    alt: 'LinkedIn Icon',
    link: 'https://www.linkedin.com/in/dimitar-kalapocev/',
  },
  {
    icon: githubIcon,
    alt: 'GitHub Icon',
    link: 'https://github.com/DimitarK13',
  },
  {
    icon: xIcon,
    alt: 'X Icon',
    link: 'https://x.com/dimitar_kalapoc',
  },
];

function SocialLinks() {
  return SOCIAL_ITEMS.map((item) => (
    <div key={item.link}>
      <SocialIcon icon={item.icon} alt={item.alt} link={item.link} />
    </div>
  ));
}

export default SocialLinks;
