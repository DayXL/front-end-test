import githubIcon from '../../assets/github.svg';
import styles from './styles.module.css';

function SearchBar({value, onChange, onSubmit}) {
    return (
        <form className={styles.searchForm} onSubmit={onSubmit}>
            <input 
                type="text" 
                className={styles.inputSearch} 
                placeholder="Buscar usuário"
                value={value}
                onChange={onChange} 
                />
            <button type="submmit" className={styles.buttonSearch}> 
                <img type="submmit" src={githubIcon} alt="Search" />
            </button>
        </form>
    );
}

export default SearchBar;
