import { useLocation } from 'react-router';
import styles from './styles.module.css';

function NavBar({logo, search, socials}) {
  const location = useLocation();
  const showLocationHome = location.pathname !== '/';

  return (
    <div className={styles.navBar}>
      <img src={logo} alt="Logo" />

      {showLocationHome && (
          <div className="search-container"> {search} </div>
      )}
    
      {showLocationHome && (
        <div> {socials} </div>
      )}
      
    </div>
  );
}

export default NavBar;
