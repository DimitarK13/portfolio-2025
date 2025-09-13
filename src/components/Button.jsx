import { Link } from 'react-router';

function Button({ link, children }) {
  return (
    <Link className="btn btn-primary" to={link}>
      {children}
    </Link>
  );
}

export default Button;
