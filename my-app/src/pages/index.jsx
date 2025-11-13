import styles from './styles.module.css';
import bitwiseLogo from '../assets/bitwise.svg';
import socialsIconPurple from '../assets/social-purple.svg';
import socialsIconWhite from '../assets/social-white.svg';
import paper from '../assets/paper.svg';
import HOME_PAGE from '../constants/constants';
import SearchBar from '../components/searchForm';
import NavBar from '../components/navBar';
import BodyHome from '../components/bodyHome';
import SocialNetworks from '../components/socialNetworks';
import { useState, useEffect } from 'react';
import { GET_USER_DATA } from '../services/query';
import { useLazyQuery } from '@apollo/client/react';
import { useNavigate } from 'react-router';
import CardSpawAlert from '../components/spaw';

function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const [getUserData, { loading, error, data }] = useLazyQuery(GET_USER_DATA);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    getUserData({ variables: { login: searchValue.trim() } });
  }

  const onChange = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (data) {
      navigate('/user', { state: { userData: data.user } });
    }
    if (error) {
      setShowAlert(true);
    }
  }, [data, error]);

  const onCloseAlert = () => {
    setShowAlert(false);
  }

  return (
    <>
      <div className={styles.backgroundHomePage}>
        <div className={styles.background}>
          <div className={styles.navBar}> <NavBar 
            logo={bitwiseLogo} 
            search={<SearchBar value={searchValue} onChange={onChange} onSubmit={handleSubmit}/>}
            socials={<SocialNetworks socials={socialsIconPurple} link={HOME_PAGE.LINK_BITWISE} />}
          /> 

          <BodyHome 
            searchUserIn={HOME_PAGE.SEARCH_USER_IN} 
            github={HOME_PAGE.GITHUB} 
            very={HOME_PAGE.VERY} 
            easy={HOME_PAGE.EASY}
            spaw={ showAlert && (<CardSpawAlert 
                text1={HOME_PAGE.SPAW_TEXT_1} 
                text2={HOME_PAGE.SPAW_TEXT_2} 
                socials={<SocialNetworks socials={socialsIconWhite} link={HOME_PAGE.LINK_BITWISE}/>}
                onClose={onCloseAlert}
              />)} 
            searchBar={<SearchBar value={searchValue} onChange={onChange} onSubmit={handleSubmit} />}
          />
          </div>
          <div className={styles.paper}> <img src={paper} alt="paper" /> </div>
        </div>
        <div className={styles.footBar}>
          <SocialNetworks socials={socialsIconPurple} link={HOME_PAGE.LINK_BITWISE}/>
        </div>
      </div>
    </>
  )
}

export default HomePage;
