import styles from'./styles.module.css'
import bitwiseLogo from '../../assets/bitwise.svg';
import bitwiseLogoWhite from '../../assets/logo-white.svg';
import socialsIconPurple from '../../assets/social-purple.svg';
import socialsIconWhite from '../../assets/social-white.svg';
import HOME_PAGE from '../../constants/constants';
import SearchBar from '../../components/searchForm';
import NavBar from '../../components/navBar';
import CardUser from '../../components/cardUser';
import SocialNetworks from '../../components/socialNetworks';
import TabUserInformation from '../../components/table';
import FootBar from '../../components/footBar';
import FOOT_BAR from '../../constants/footBar';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { GET_USER_DATA } from '../../services/query';
import { useLazyQuery } from '@apollo/client/react';

const HEAD = [
  "Nome do repositório",
  "Qtd de commit",
  "Msg Último commit",
  "Hash do último commit"
]

function UserPage() {
  const { state } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const [userValue , setUserDataState] = useState(state.userData);
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
      setUserDataState(data.user); 
      setSearchValue('');
    }
    if (error) console.error(error);
  }, [data]);

  const onBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <>
      <div className={styles.backgroundUserPage}>
        <NavBar 
          logo={bitwiseLogo} 
          search={<SearchBar value={searchValue} onChange={onChange} onSubmit={handleSubmit}/>}
          socials={<SocialNetworks socials={socialsIconPurple} link={HOME_PAGE.LINK_BITWISE} />}
        />

        <CardUser 
          avatar={userValue.avatarUrl} 
          name={userValue.name} 
          repository={userValue.repositories.totalCount} 
        />

        <TabUserInformation 
          head={HEAD}
          repoData={userValue.repositories.nodes}
        />
        
        <FootBar 
          logo={bitwiseLogoWhite} 
          vision={FOOT_BAR.VISION} 
          addressOne={FOOT_BAR.ADDRESS_ONE} 
          addressTwo={FOOT_BAR.ADDRESS_TWO}
          socials={<SocialNetworks socials={socialsIconWhite} link={HOME_PAGE.LINK_BITWISE} />}
          rightsReserved={FOOT_BAR.RIGHT_RESERVED}
          addressTitleOne={FOOT_BAR.BRASIL}
          addressTitleTwo={FOOT_BAR.CANADA}
          onBack={onBack}
        />      
      </div>
    </>
  )
}

export default UserPage;
