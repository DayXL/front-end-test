import styles from './styles.module.css';

function CardUser({ avatar, name, repository}) {
    return (
        <div className={styles.cardUser}>
            <img src={avatar} alt={"Avatar"} className={styles.avatar} />
            <div className={styles.info}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.repository}>
                    <strong> {repository} </strong>
                    <p> {" Repositórios"} </p>
                </div>
            </div>
        </div>
    );
}

export default CardUser;
