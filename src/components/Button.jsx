import { Link } from 'react-router';

import externalWhiteIcon from '../assets/images/external-white-icon.svg';
import externalDarkIcon from '../assets/images/external-dark-icon.svg';

function Button({ link, children, style = 'primary', isExternal = false }) {
  if (isExternal)
    return (
      <a className={`btn btn-${style}`} href={link} target="_blank">
        <img src={style == 'primary' ? externalDarkIcon : externalWhiteIcon} alt="External Link icon" />
        {children}
      </a>
    );

  return (
    <Link className={`btn btn-${style}`} to={link}>
      {children}
    </Link>
  );
}

export default Button;
