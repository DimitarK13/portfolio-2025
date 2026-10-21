import { Link } from 'react-router';

import externalWhiteIcon from '../assets/images/external-white-icon.svg';
import externalDarkIcon from '../assets/images/external-dark-icon.svg';

function Button({ link, children, style = 'primary', hasIcon = false }) {
  return (
    <Link className={`btn btn-${style}`} to={link}>
      {hasIcon && <img src={style == 'primary' ? externalDarkIcon : externalWhiteIcon} alt="External Link icon" />}
      {children}
    </Link>
  );
}

export default Button;
