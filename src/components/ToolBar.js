import { NavLink, useRouteMatch } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { FaMicrophone, FaCog } from 'react-icons/fa';
import styles from './toolbar.module.css';

const ToolBar = () => {
  const { params: { slug } } = useRouteMatch();

  const title = `${slug || 'South America'} COVID statistics`;

  return (
    <nav className={styles.toolbar}>
      <NavLink className="d-block" to="/"><BsChevronLeft /></NavLink>
      <h4 className={`capitalize ${styles.navTitle}`}>{title}</h4>
      <div className={styles.rightIcons}>
        <FaMicrophone className="pl-10" />
        <FaCog className="pl-10" />
      </div>
    </nav>
  );
};

export default ToolBar;
