import Icon from '../components/Icon';

import reactIcon from '../assets/images/logos/react-logo.svg';
import jsIcon from '../assets/images/logos/javascript-logo.svg';
import htmlIcon from '../assets/images/logos/html-logo.svg';
import cssIcon from '../assets/images/logos/css-logo.svg';
import wordpressIcon from '../assets/images/logos/wordpress-logo.svg';
import nodejsIcon from '../assets/images/logos/nodejs-logo.svg';
import pythonIcon from '../assets/images/logos/python-logo.svg';
import phpIcon from '../assets/images/logos/php-logo.svg';
import mongodbIcon from '../assets/images/logos/mongodb-logo.svg';
import sqlIcon from '../assets/images/logos/sql-logo.svg';
import jqueryIcon from '../assets/images/logos/jquery-logo.svg';
import figmaIcon from '../assets/images/logos/figma-logo.svg';
import expressjsIcon from '../assets/images/logos/expressjs-logo.svg';
import styles from './IconsGrid.module.css';

const ICONS_MAP = {
  React: reactIcon,
  JavaScript: jsIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  WordPress: wordpressIcon,
  NodeJS: nodejsIcon,
  ExpressJS: expressjsIcon,
  Python: pythonIcon,
  PHP: phpIcon,
  MongoDB: mongodbIcon,
  SQL: sqlIcon,
  jQuery: jqueryIcon,
  Figma: figmaIcon,
};

function IconsGrid({ icons, mts = false }) {
  return (
    <div className={`${styles.grid} ${mts ? styles.mts : ''}`}>
      {icons.map((name) => (
        <Icon key={name} icon={ICONS_MAP[name]} name={name} />
      ))}
    </div>
  );
}

export default IconsGrid;
